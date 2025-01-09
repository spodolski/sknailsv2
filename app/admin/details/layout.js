import AdminNavigation from "@/app/_components/AdminNavigation";
import AdminDetails from "@/app/_components/AdminDetails";
import { logOutAdmin } from "@/app/_lib/actions";
import {
  getAllBooking,
  getDiscount,
  getGalleryPhotos,
  getGuests,
  getNails,
} from "@/app/_lib/data-service";

export default async function Layout({ children }) {
  const guests = await getGuests();
  const bookings = await getAllBooking();
  const photos = await getGalleryPhotos();
  const nails = await getNails();
  const discount = await getDiscount();

  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <>
        <AdminDetails
          guests={guests}
          bookings={bookings}
          photos={photos}
          nails={nails}
          discount={discount}
        />
        <button onClick={logOutAdmin}>log out</button>
      </>
      <AdminNavigation
        guests={guests}
        bookings={bookings}
        photos={photos}
        nails={nails}
        discount={discount}
      />
      <div className="py-1">{children}</div>
    </div>
  );
}
