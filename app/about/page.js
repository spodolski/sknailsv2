import { Suspense } from "react";
import AboutText from "../_components/AboutText";
import Spinner from "../_components/Spinner";

export const metadata = {
  title: "About",
};
export default function Page() {
  return (
    <Suspense fallback={<Spinner />}>
      <AboutText />
    </Suspense>
  );
}
