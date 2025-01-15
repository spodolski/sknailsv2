"use client";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import WhatsApp from "./WhatsApp";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Image from "next/image";

function SmallMenu() {
  const [active, setActive] = useState(false);
  function toggleActive(active) {
    setActive(active);
  }
  return (
    <div>
      <button
        onClick={() => toggleActive(!active)}
        className=" m-1 p1 border border-accent-700 h-[28px] w-[28px] cursor-pointer rounded-lg bg-primary-700 text-accent-600 md:hidden lg:hidden"
      >
        <Bars4Icon />
      </button>
      {active ? (
        <div className="absolute  max-w-[768px] h-screen w-screen inset-0 bg-primary-900 bg-opacity-75 backdrop-blur-lg flex items-start justify-end z-50 md:hidden">
          <div className="bg-primary-900 ">
            <div className="flex flex-col  bg-primary-400 relative">
              <button className="absolute top-2 right-2">
                <XMarkIcon
                  onClick={() => toggleActive(!active)}
                  className=" text-accent-700 h-[24px] w-[24px]"
                />
              </button>
              <ul className="flex   flex-col   justify-center items-center w-60 text-accent-700 bg-primary-900   pb-8">
                {/* <li
                  onClick={() => toggleActive(!active)}
                  className=" rounded-full overflow-hidden bg-primary-400 h-32 w-32 relative"
                >
                  <Logo />
                </li> */}
                <li
                  onClick={() => toggleActive(!active)}
                  className="relative  h-[80px] w-[80px]   bg-primary-400 rounded-full aspect-square overflow-hidden my-6"
                >
                  <Link href="/">
                    <Image
                      className=" object-contain"
                      src="https://utjfaspanvjuqdpwbwwg.supabase.co/storage/v1/object/public/sknails/skn.png"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      alt="Sk Nails"
                      priority={false}
                    />
                  </Link>
                </li>
                <li className="underline underline-offset-8 py-2">
                  <Link onClick={() => toggleActive(!active)} href="/about">
                    About
                  </Link>
                </li>
                <li className="underline underline-offset-8 py-2">
                  <Link onClick={() => toggleActive(!active)} href="/price">
                    Price list
                  </Link>
                </li>
                <li className="underline underline-offset-8 py-2">
                  <Link onClick={() => toggleActive(!active)} href="/gallery">
                    Gallery
                  </Link>
                </li>
                <li className="underline underline-offset-8 py-2">
                  <Link onClick={() => toggleActive(!active)} href="/booking">
                    Book Now!
                  </Link>
                </li>
                <li className="py-4 flex gap-3 text-accent-700 text-2xl">
                  <Link
                    className=""
                    href="https://www.instagram.com/nails_by_sandra_wiecek/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaSquareInstagram />
                  </Link>
                  <Link
                    className=""
                    href="https://www.facebook.com/profile.php?id=61562252641573"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookSquare />
                  </Link>

                  <WhatsApp />
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default SmallMenu;
