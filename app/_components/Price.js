import { getNails } from "../_lib/data-service";
import PriceRow from "./PriceRow";

async function Price() {
  const nails = await getNails();
  return <PriceRow nails={nails} />;
}
export default Price;
