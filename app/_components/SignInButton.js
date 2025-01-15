import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-sm md:text-base lg:text-lg border border-accent-700 rounded-lg bg-primary-900 px-6 py-2 font-medium">
        <img
          className="bg-primary-300 rounded-full p-2"
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="36"
          width="36"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
