import ReservationList from "@/app/_components/ReservationList";
import { auth } from "@/app/_lib/auth";
import { getBookings, getNails } from "@/app/_lib/data-service";
import Link from "next/link";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const nailName = await getNails();
  const session = await auth();
  const bookings = await getBookings(session.user.guestId);

  return (
    <div className="max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-accent-400 scrollbar-track-primary-400 scrollbar-track-rounded-full">
      <h1 className="text-center font-extrabold text-accent-100 text-4xl mt-2 mb-4 ">
        Your reservations
      </h1>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <Link className="underline text-accent-500" href="/price">
            nails &rarr;
          </Link>
        </p>
      ) : (
        <ReservationList bookings={bookings} nailName={nailName} />
      )}
    </div>
  );
}
