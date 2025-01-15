import Image from "next/image";
import Link from "next/link";
import logo from "@/public/skn.png";

function Logo() {
  return (
    <Link
      href="/"
      className="relative h-auto w-auto max-h-[110px] max-w-[110px] md:max-h-[210px] md:max-w-[210px]   aspect-square"
    >
      <Image
        className=" object-contain"
        src={logo}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        alt="Sk Nails"
        priority={false}
      />
    </Link>
  );
}

export default Logo;
