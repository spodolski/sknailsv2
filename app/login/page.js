import Image from "next/image";
import Logo from "../_components/Logo";
import SignInButton from "../_components/SignInButton";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center h-full">
      <h2 className="text-lg md:text-2xl lg:text-3xl text-accent-600 font-semibold">
        Sign in to access your guest area
      </h2>

      <SignInButton />
      <div className="relative  h-[110px] w-[110px] md:max-h-[210px] md:max-w-[210px]   aspect-square">
        <Image
          className=" object-contain"
          src="https://utjfaspanvjuqdpwbwwg.supabase.co/storage/v1/object/public/sknails/skn.png"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          alt="Sk Nails"
          priority={false}
        />
      </div>
    </div>
  );
}
