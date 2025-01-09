import { auth } from "../_lib/auth";
import {
  getBookedDates,
  getDatesTime,
  getGuest,
  getNails,
} from "../_lib/data-service";

import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation() {
  const [bookedDates] = await Promise.all([getBookedDates()]);
  const datesTimes = await getDatesTime();
  const nails = await getNails();

  const session = await auth();

  const guest = await getGuest(session?.user.email);

  return (
    <div className="grid grid-cols-2  min-h-[400px]">
      <DateSelector nails={nails} bookedDates={bookedDates} />
      {session?.user ? (
        <ReservationForm
          datesTimes={datesTimes}
          nails={nails}
          user={session.user}
          phone={guest.phone}
        />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
export default Reservation;
