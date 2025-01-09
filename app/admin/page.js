import FormLogin from "../_components/FormLogin";
import Logo from "../_components/Logo";

export default function Page() {
  return (
    <div className=" flex flex-col items-center gap-4 ">
      <div className="h-36 w-36">
        <Logo />
      </div>
      <FormLogin />
    </div>
  );
}
