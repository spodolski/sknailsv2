import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <div className="">
      <div className="mx-auto relative  h-[280px] md:w-[768px] md:h-[520px] w-[380px]  lg:h-650 lg:w-[1024px] opacity-80  aspect-auto ">
        <Image
          className=" rounded-b-lg   object-cover"
          src="https://utjfaspanvjuqdpwbwwg.supabase.co/storage/v1/object/public/sknails/banner.JPEG?t=2025-01-15T20%3A52%3A59.542Z"
          quality={90}
          fill
          sizes="(max-width: 400px) 100vw, (max-width: 1024px) 50vw, 33vw"
          alt={`banner`}
        />
      </div>
      <div className="flex mt-4 mx-auto justify-center  ">
        <button className="  buttonBook mt-8">
          <Link href="/booking">Book Now!</Link>
        </button>
      </div>
    </div>
  );
}

export default Banner;
