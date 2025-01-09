"use client";
import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteReservation } from "../_lib/actions";

function ReservationList({ bookings, nailName }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id1 == bookingId);
    }
  );
  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  }
  return (
    <ul className="space-y-6">
      {optimisticBookings
        .slice()
        .reverse()
        .map((booking) => (
          <ReservationCard
            onDelete={handleDelete}
            booking={booking}
            nailName={nailName}
            key={booking.id}
          />
        ))}
    </ul>
  );
}
export default ReservationList;
