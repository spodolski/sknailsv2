import Link from "next/link";
import Logo from "./Logo";
import { auth } from "../_lib/auth";
import SignIn from "./SignIn";
import Image from "next/image";

export default async function Navigation() {
  const session = await auth();

  const name = session?.user?.name?.split(" ");
  return (
    <div className="flex gap-10 justify-between max-h-52 mb-8 max-w-[1200px]">
      <div>
        <Logo />
      </div>
      <div className="flex flex-col  justify-center   w-3/5 mr-4">
        <div className="flex flex-col items-end">
          <ul className="flex     justify-center">
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
            <div className="flex  bg-primary-700 hover:bg-primary-900 hover:text-accent-800 hover:delay-200 text-accent-600 rounded-lg cursor-pointer border border-accent-700 items-center mr-4 px-3 py-1">
              <Link href="/account">
                <span className="mr-2 flex items-center">
                  Welcome, {name[0]}
                </span>
              </Link>

              <Image
                className=" rounded-full"
                src={session.user.image}
                alt={session.user.name}
                height={30}
                width={30}
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            <div className="flex  bg-primary-700 text-accent-600 hover:bg-primary-900 hover:text-accent-800 rounded-lg cursor-pointer border border-accent-700 items-center mr-4 px-3 py-1">
              <SignIn />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
