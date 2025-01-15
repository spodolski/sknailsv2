import Reservation from "../_components/Reservation";

import { Suspense } from "react";
import Spinner from "../_components/Spinner";

export default async function Page() {
  return (
    <div>
      <h1 className="text-center font-extrabold text-accent-100 text-xl md:text-2xl lg:text-4xl mt-2 mb-4">
        Book now
      </h1>

      <Suspense fallback={<Spinner />}>
        <Reservation />
      </Suspense>
    </div>
  );
}
