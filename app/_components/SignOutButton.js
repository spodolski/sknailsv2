import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-1 md:py-3 px-1 md:px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-accent-400 w-full">
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-accent-600" />

        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
