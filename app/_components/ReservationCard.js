import { PencilSquareIcon } from "@heroicons/react/24/solid";
import {
  format,
  formatDistance,
  isAfter,
  isPast,
  isToday,
  parseISO,
  startOfDay,
  add,
  isBefore,
} from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Link from "next/link";
import Image from "next/image";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ onDelete, booking, nailName }) {
  const {
    id,
    date,
    time,
    nails_price,
    nails,
    status,
    coments,

    created_at,
  } = booking;

  const [testNails] = nailName.filter((id) => id.id === nails);

  const today = startOfDay(new Date());
  const twoDays = startOfDay(add(today, { days: 3 }));

  return (
    <div className="flex  border border-accent-500 bg-primary-900 rounded">
      {testNails.image && (
        <div className="  relative h-32 mt-2 aspect-square">
          <Image
            src={testNails.image}
            alt={`Nails: ${testNails.name_nails}`}
            fill
            className="object-cover rounded m-1"
          />
        </div>
      )}
      <div className="flex-grow px-6 py-3 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-accent-700">
            Reservation #{id}
          </h3>
          {isPast(new Date(date)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              upcoming
            </span>
          )}
        </div>
        <h4 className="text-l font-semibold text-accent-700">Details:</h4>
        <p className="text-lg text-primary-300">
          {format(new Date(date), "EEE, MMM dd yyyy")} {time} (
          {isToday(new Date(date)) ? "Today" : formatDistanceFromNow(date)})
        </p>

        <p className="text-xs text-primary-300">
          Nails: {testNails.name_nails}
        </p>
        <p className="text-xs text-primary-300">Coments: {coments}</p>
        {status ? (
          <p className="text-green-400 text-xs">Aproved by Sandra</p>
        ) : (
          <p className="text-red-400 text-xs">Wait for aproved by Sandra</p>
        )}

        <div className="flex gap-5 mt-auto items-baseline">
          <p className="text-xl font-semibold text-accent-600">
            From £{nails_price}
          </p>

          <p className="ml-auto text-xs text-primary-500">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="flex flex-col border-l border-accent-800 w-[100px]">
        {!isBefore(date, twoDays) ? (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-accent-800 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation onDelete={onDelete} bookingId={id} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ReservationCard;
