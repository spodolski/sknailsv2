"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings, getNail } from "./data-service";
import { redirect } from "next/navigation";
import nodemailer from "nodemailer";
import { logo } from "../icon.png";

export async function updateProfile(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const full_name = formData.get("name");
  const phone = formData.get("phone");
  if (!/^[0-9]{10,11}$/.test(phone))
    throw new Error("Please put correct phone number");
  const updateData = { full_name, phone };
  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);
  if (error) throw new Error("Profile could not be updated");
  revalidatePath("/account");
}
export async function loginAdmin(formData) {
  const email = formData.get("email");
  let { error } = await supabase.auth.signInWithPassword({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (error) {
    redirect("/admin");
  }
  redirect(`/admin/details?email=${encodeURIComponent(email)}`);
}
export async function logOutAdmin() {
  let { error } = await supabase.auth.signOut();
  redirect("/");
}
export async function signInAction() {
  await signIn("google", { redirectTo: "/booking" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId))
    throw new Error("You are not allowed to delete this booking");

  const { error } = await supabase.from("booking").delete().eq("id", bookingId);
  if (error) throw new Error("Booking could not be deleted");
  revalidatePath("/account/reservations");
}

export async function updateBooking(formData) {
  const bookingId = Number(formData.get("bookingId"));
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId))
    throw new Error("You are not allowed to update this booking");

  const nails = await getNail(formData.get("nails"));
  const updateData = {
    status: formData.get("status"),
    coments: formData.get("coments").slice(0, 1000),
    nails: formData.get("nails"),
    nails_price: nails.price,
    status: false,
  };
  const { error } = await supabase
    .from("booking")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();
  if (error) throw new Error("Booking could not be update");
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath("/account/reservations");
  redirect("/account/reservations");
}
export async function addBooking(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");
  const nails = await getNail(formData.get("nails"));

  // const [priceNB] = nails.filter((item) => item.id === formData.get("nails"));
  // console.log(priceNB);

  const addData = {
    date: formData.get("date"),
    time: formData.get("time"),
    nails: formData.get("nails"),
    nails_price: nails.price,
    status: false,
    isPaid: false,
    coments: formData.get("coments").slice(0, 1000),
    guest_id: formData.get("guest_id"),
  };
  const { error } = await supabase.from("booking").insert([addData]).select();

  if (error) throw new Error("Booking could not be created");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Booking System" <${process.env.GMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Booking Received",
      html: `
        <h3>New Booking Details</h3>
        <p><strong>Name:</strong> ${formData.get("name")}</p>
        <p><strong>Email:</strong> ${formData.get("email")}</p>
        <p><strong>Phone:</strong> ${formData.get("phone")}</p>
        <p><strong>Date:</strong> ${formData.get("date").slice(0, 10)}</p>
        <p><strong>Time:</strong> ${formData.get("time")}</p>
        <p><strong>Nails:</strong> ${nails.name_nails}</p>
        <p><strong>Comments:</strong> ${formData.get("coments")}</p>
      `,
    });

    // Wyślij e-mail z potwierdzeniem do klienta
    await transporter.sendMail({
      from: `"Sk Nails Booking " <${process.env.GMAIL_USER}>`,
      to: formData.get("email"),
      subject: "Thank you for your booking!",
      html: `<img src='' alt="logo"/>
        <h3>Thank you for your booking!</h3>
        <p>Dear ${formData.get("name")},</p>
        <p>We have received your booking for:</p>
        <p><strong>Date:</strong> ${formData.get("date").slice(0, 10)}</p>
        <p><strong>Time:</strong> ${formData.get("time")}</p>
        <p><strong>Nails:</strong> ${nails.name_nails}</p>
        <p>If you have any questions, feel free to contact us.</p>
      `,
    });

    console.log("Emails sent successfully!");
  } catch (emailError) {
    console.error("Error sending emails:", emailError);
    throw new Error("Emails could not be sent");
  }

  revalidatePath("/account/reservations");
  redirect("/account/reservations");
}
