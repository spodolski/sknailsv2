"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function AdminDetails({ guests, bookings, photos, nails, discounts }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const emailA = searchParams.get("email");
  const admin = guests.find((email) => email?.email === emailA);

  console.log(admin);
  useEffect(() => {
    if (!admin) {
      router.push("/admin");
    }
  }, [admin, router]);
  return <div> witam {admin?.full_name}</div>;
}

export default AdminDetails;
