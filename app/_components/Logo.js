import Image from "next/image";
import Link from "next/link";
import logo from "@/public/skn.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10 ml-6 max-h-52">
      <Image
        src={logo}
        height={300}
        width={300}
        sizes="(max-width: 20px)"
        alt="Sk Nails"
        priority={false}
      />
    </Link>
  );
}

export default Logo;
