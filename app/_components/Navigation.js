import Link from "next/link";
import Logo from "./Logo";
import { auth } from "../_lib/auth";
import SignIn from "./SignIn";
import Image from "next/image";
import SmallMenu from "./SmallMenu";

export default async function Navigation() {
  const session = await auth();

  const name = session?.user?.name?.split(" ");
  return (
    <div className="flex gap-10 justify-between  h-24 md:h-36 lg:h-52   max-w-[1200px]">
      <Logo />

      <div className="flex flex-row items-center justify-end    w-3/5 mr-4">
        <div className="flex flex-col  justify-start items-end gap-4 ">
          <ul className="hidden md:flex     md:justify-center">
            <li className="buttons">
              <Link href="/about">About</Link>
            </li>
            <li className="buttons">
              <Link href="/price">Price list</Link>
            </li>
            <li className="buttons">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="buttonBook">
              <Link href="/booking">Book Now!</Link>
            </li>
          </ul>
          {session?.user?.image ? (
            <div className="flex  bg-primary-700 hover:bg-primary-900 hover:text-accent-800 hover:delay-200 text-accent-600 rounded-lg cursor-pointer border border-accent-700 items-center mr-4 px-2 py-0.5 md:px-3 md:py-1 lg:px-4 lg:py-2 text-xs md:text-sm lg:text-base">
              <Link href="/account">
                <span className="mr-2 flex items-center">
                  Welcome, {name[0]}
                </span>
              </Link>

              <Image
                className="max-h-5 max-w-5 md:max-h-6 md:max-w-6 lg:max-h-8 lg:max-w-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                height={30}
                width={30}
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            <div className="flex text-xs bg-primary-700 text-accent-600 hover:bg-primary-900 hover:text-accent-800 rounded-lg cursor-pointer border border-accent-700 items-center mr-4 px-3 py-1">
              <SignIn />
            </div>
          )}
        </div>
        <SmallMenu />
      </div>
    </div>
  );
}
