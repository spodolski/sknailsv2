import SubmitButton from "@/app/_components/SubmitButton";
import { updateBooking } from "@/app/_lib/actions";
import { getBooking, getNail, getNails } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const { bookingId } = await params;
  const { nails, coments, status } = await getBooking(bookingId);
  const { name_nails } = await getNail(nails);
  const nailsList = await getNails();

  return (
    <div className="">
      <h1 className="text-center font-extrabold text-accent-100 text-lg md:text-2xl lg:text-4xl mt-2 mb-4">
        Edit Reservation #{bookingId}
      </h1>

      <form
        action={updateBooking}
        className="bg-primary-900 py-8 px-12 text-sm md:text-base lg:text-lg flex gap-6 flex-col rounded-lg"
      >
        <input type="hidden" value={bookingId} name="bookingId" />
        <label className="text-accent-700" htmlFor="nails">
          Nails what you choice
        </label>
        <select
          name="nails"
          id="nails"
          className="px-5 py-3  bg-primary-200 text-accent-200 w-full shadow-sm rounded"
          required
        >
          <option value="" key="">
            {name_nails}
          </option>
          {nailsList
            .filter((name) => name.name_nails !== name_nails)
            .map((nail) => (
              <option value={nail.id} key={nail.id}>
                {nail.name_nails} (from £{nail.price})
              </option>
            ))}
        </select>
        {/* <input type="hidden" value={!status} name="status" /> */}
        <div className="space-y-2">
          <label className="text-accent-700" htmlFor="coments">
            Anything would you like to change?
          </label>
          <textarea
            name="coments"
            defaultValue={coments}
            className="px-5 py-3 bg-primary-200 text-accent-200 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton pendingLabel="Updating...">
            Update Reservation
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
