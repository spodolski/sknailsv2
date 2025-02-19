"use client";

import Link from "next/link";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-accent-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-accent-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-accent-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="md:border-r border-primary-900">
      <ul className="flex  flex-row md:flex-col md:gap-2 h-full text-[8px] md:text-base lg:text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-1 md:py-3 px-1 md:px-2 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-1 font-semibold text-accent-500 ${
                pathname === link.href ? "bg-primary-700" : ""
              }`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
