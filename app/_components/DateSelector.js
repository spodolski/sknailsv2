"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function DateSelector({ bookedDates }) {
  const { selected, setSelected } = useReservation();

  return (
    <div
      className=" border-l-2 border-y-2 border-primary-800 flex flex-col
   "
    >
      <div className=" text-accent-600 text-xl px-16 py-2 mt-4 mb-4 items-center">
        <h2>1. Choice day first:</h2>
      </div>
      <DayPicker
        date={selected}
        className="pt-4  text-accent-600  place-self-center "
        mode="single"
        numberOfMonths={1}
        selected={selected}
        onSelect={setSelected}
        disabled={[{ before: new Date() }, ...bookedDates]}
        required
      />
    </div>
  );
}

export default DateSelector;
