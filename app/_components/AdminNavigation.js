"use client";

import Link from "next/link";
import {
  CalendarDaysIcon,
  HomeIcon,
  PhotoIcon,
  SparklesIcon,
  TagIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "All details",
    href: "/admin/details",
    icon: <HomeIcon className="h-5 w-5 text-accent-600" />,
  },
  {
    name: "Reservations",
    href: "/admin/details/bookings",
    icon: <CalendarDaysIcon className="h-5 w-5 text-accent-600" />,
  },
  {
    name: "Nails",
    href: "/admin/details/nails",
    icon: <SparklesIcon className="h-5 w-5 text-accent-600" />,
  },
  {
    name: "Photos",
    href: "/admin/details/photos",
    icon: <PhotoIcon className="h-5 w-5 text-accent-600" />,
  },
  {
    name: "Guests",
    href: "/admin/details/guests",
    icon: <UsersIcon className="h-5 w-5 text-accent-600" />,
  },
  {
    name: "Discounts",
    href: "/admin/details/discounts",
    icon: <TagIcon className="h-5 w-5 text-accent-600" />,
  },
];

function AdminNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-accent-500 ${
                pathname === link.href ? "bg-primary-700" : ""
              }`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default AdminNavigation;
