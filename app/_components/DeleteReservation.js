"use client";
import { TrashIcon } from "@heroicons/react/24/solid";

import { useTransition } from "react";
import Spinner from "./Spinner";

function DeleteReservation({ onDelete, bookingId }) {
  const [isPending, startTransition] = useTransition();
  function handleDelete() {
    if (confirm("are you sure you want to delete this reservation?"))
      startTransition(() => onDelete(bookingId));
  }
  return (
    <button
      onClick={handleDelete}
      className="group flex items-center gap-1 uppercase text-xs md:text-sm lg:text-base font-bold text-primary-300 flex-grow px-3  hover:bg-accent-600 transition-colors hover:text-primary-900"
    >
      {!isPending ? (
        <>
          <TrashIcon className="h-5 w-5 text-base text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span className="text-xs md:text-xs lg:text-base ">Delete</span>
        </>
      ) : (
        <span className="mx-auto">
          <Spinner />
        </span>
      )}
    </button>
  );
}

export default DeleteReservation;
