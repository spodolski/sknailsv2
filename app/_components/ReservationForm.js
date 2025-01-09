"use client";

import { useReservation } from "./ReservationContext";
import { addBooking } from "../_lib/actions";

function ReservationForm({ datesTimes, nails, phone, user }) {
  const { selected } = useReservation();

  const selectedBooks = datesTimes.filter(
    (item) => item.date === selected?.toISOString().split("T")[0]
  );

  return (
    <div className="">
      <form
        action={addBooking}
        className="bg-primary-800  py-10 px-16 text-lg flex gap-5 flex-col"
      >
        <input type="hidden" name="guest_id" value={user.guestId} />
        <input type="hidden" name="name" value={user.name} />
        <input type="hidden" name="email" value={user.email} />
        {selected && (
          <input
            type="hidden"
            name="date"
            value={String(selected.toISOString())}
          />
        )}
        <div className="space-y-2">
          <label className="text-accent-600" htmlFor="nails">
            2. What nails would you like to do ?
          </label>
          <select
            name="nails"
            id="nails"
            disabled={!selected}
            className="px-5 py-3  bg-primary-200 text-primary-800 w-full shadow-sm rounded"
            required
          >
            <option value="" key="">
              Select type of nails
            </option>
            {nails.map((nail) => (
              <option value={nail.id} key={nail.id}>
                {nail.name_nails}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-accent-600 space-y-2" htmlFor="time">
            3. Select time ?
          </label>
          <select
            name="time"
            id="name"
            disabled={!selected}
            className="px-5 py-3  w-full shadow-sm rounded  bg-primary-200 text-primary-800"
            required
          >
            <option value=" " key="">
              select time
            </option>
            {selectedBooks?.some((item) => item.time === "9:00") ? (
              ""
            ) : (
              <option value="9:00">9:00</option>
            )}
            {selectedBooks?.some((item) => item.time === "12:00") ? (
              ""
            ) : (
              <option value="12:00">12:00</option>
            )}
            {selectedBooks?.some((item) => item.time === "15:00") ? (
              ""
            ) : (
              <option value="15:00">15:00</option>
            )}
            {selectedBooks?.some((item) => item.time === "18:00") ? (
              ""
            ) : (
              <option value="18:00">18:00</option>
            )}
          </select>
        </div>

        <div className="space-y-2 ">
          <label className="text-accent-600" htmlFor="coments">
            4. Anything I should know what you want to do extra?
          </label>
          <textarea
            name="coments"
            id="coments"
            disabled={!selected}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded"
            placeholder="Any extra information"
          />

          <label className="text-accent-600" htmlFor="Phone">
            5. Phone number{" "}
            <span className="text-accent-800">
              (Required to confirm apoitment)
            </span>
          </label>
          <input
            name="phone"
            defaultValue={phone}
            required
            className="px-5 py-3 bg-primary-200 text-accent-100 w-full shadow-sm rounded"
          />
        </div>

        {selected && (
          <div className="flex justify-end items-center gap-6">
            <div className="text-primary-300  text-base">
              <p>You selected:</p>
              <p>{String(selected.toISOString().split("T")[0])}</p>
            </div>

            <button className="buttons">Reserve now</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default ReservationForm;
