import { eachDayOfInterval } from "date-fns";
import { supabase } from "./supabase";

export const getNails = async function () {
  const { data, error } = await supabase.from("nails").select("*");

  if (error) {
    console.log(error);
    throw new Error("nails could not be loaded");
  }
  return data;
};

export const getGuests = async function () {
  const { data, error } = await supabase.from("guests").select("*");

  if (error) {
    console.log(error);
    throw new Error("nails could not be loaded");
  }
  return data;
};
export const getAllBooking = async function () {
  const { data, error } = await supabase.from("booking").select("*");

  if (error) {
    console.log(error);
    throw new Error("nails could not be loaded");
  }
  return data;
};
export const getDiscount = async function () {
  const { data, error } = await supabase.from("discount").select("*");

  if (error) {
    console.log(error);
    throw new Error("nails could not be loaded");
  }
  return data;
};
export const getGalleryPhotos = async function () {
  const { data, error } = await supabase.storage
    .from("sknailsphotos")
    .list("", {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });
  if (error) {
    throw new Error("photos could not be loaded");
  }

  return data;
};
export const getNail = async function (id) {
  const { data, error } = await supabase
    .from("nails")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("nails could not be loaded");
  }
  return data;
};
// Guests are uniquely identified by their email address
export async function getGuest(email) {
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

export async function getBookings(guestId) {
  const { data, error } = await supabase
    .from("booking")
    .select("*")
    .eq("guest_id", guestId)
    .order("date");

  if (error) {
    console.log(error);
    throw new Error("nails could not be loaded");
  }

  return data;
}

export async function createGuest(newGuest) {
  const { data, error } = await supabase.from("guests").insert([newGuest]);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be created");
  }

  return data;
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("booking")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("nails could not be loaded");
  }
  return data;
}

export async function getBookedDates() {
  // let today = new Date();
  // today.setUTCHours(0, 0, 0, 0);
  // today = today.toISOString();

  // Getting all bookings
  const { data, error } = await supabase.from("booking").select("*");

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  // Converting to actual dates to be displayed in the date picker
  // const bookedDates = (dates) => {
  //   return dates.map((item) => ({
  //     ...item,
  //     date: new DataTransfer(item.date),
  //   }));
  // };

  const dateTime = data.map((date) => ({
    date: date.date.slice(0, 10),
    time: date.time,
  }));

  const groupedByDate = dateTime.reduce((acc, item) => {
    // Jeśli klucz (data) jeszcze nie istnieje, stwórz go
    if (!acc[item.date]) {
      acc[item.date] = [];
    }
    // Dodaj element do odpowiedniej grupy
    acc[item.date].push(item);
    return acc;
  }, {});

  const bookedDates = Object.entries(groupedByDate)
    .filter(([key, value]) => value.length === 4)
    .map(([key]) => key)
    .map((date) => new Date(date));

  return bookedDates;
}
export async function getDatesTime() {
  const { data, error } = await supabase.from("booking").select("*");

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  const dateTime = data.map((date) => ({
    date: date.date.slice(0, 10),
    time: date.time,
  }));

  return dateTime;
}
