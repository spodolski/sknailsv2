import { Suspense } from "react";
import Price from "../_components/Price";

import Spinner from "../_components/Spinner";

export const metadata = {
  title: "Price List",
};
export default function Page() {
  return (
    <>
      <h1 className="text-center font-extrabold text-accent-100 text-4xl mt-2 mb-4">
        {" "}
        Price List
      </h1>
      <div className="max-w-[800px] mx-auto">
        <Suspense fallback={<Spinner />}>
          <Price />
          {/* <PriceExtra /> */}
        </Suspense>
      </div>
    </>
  );
}
