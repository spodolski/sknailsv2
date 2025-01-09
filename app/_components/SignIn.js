import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function SignIn() {
  return (
    <Link href="/account" className="flex items-center ">
      <p>Log in</p>
      <ArrowLeftStartOnRectangleIcon className="h-5 w-5 text-accent-600 ml-2" />
    </Link>
  );
}

export default SignIn;
