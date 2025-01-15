import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <div className="">
      <div className="mx-auto relative  max-h-fit opacity-80  aspect-video ">
        <Image
          className=" rounded-b-lg   object-cover"
          src=" https://utjfaspanvjuqdpwbwwg.supabase.co/storage/v1/object/public/sknails/banner.jpg"
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
