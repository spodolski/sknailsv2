import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import WhatsApp from "./WhatsApp";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-primary-900/80 p-1 rounded-t-lg ">
      <div className="flex justify-between items-center text-accent-600 max-w-[1200px]">
        <div>
          <p className="text-center font-bold mb-6 ml-4">
            My home Nail Salon address
          </p>
          <ul className="  text-center">
            <li>Victoria Way</li>
            <li>Hucknall</li>
            <li>Nottingham</li>
            <li> NG15 7SD</li>
          </ul>
        </div>
        <div>
          <p className="text-center font-bold mb-6 ">Follow me on</p>
          <div className="flex justify-between ">
            <Link
              className="text-6xl"
              href="https://www.tiktok.com/@Nails_by_Sandra_Wiecek"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTikTok />
            </Link>
            <Link
              className="text-6xl"
              href="https://www.instagram.com/nails_by_sandra_wiecek/"
              target="_blank"
              rel="noreferrer"
            >
              <FaSquareInstagram />
            </Link>
            <Link
              className="text-6xl"
              href="https://www.facebook.com/profile.php?id=61562252641573"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare />
            </Link>

            <WhatsApp />
          </div>
        </div>
        <div className="mr-8">
          <Image
            src="https://utjfaspanvjuqdpwbwwg.supabase.co/storage/v1/object/public/sknails/hba.png?t=2025-01-03T16%3A19%3A01.344Z"
            alt="hba logo"
            height={200}
            width={200}
          />
        </div>
      </div>
      <div className="text-center mt-4 text-sm text-accent-600">
        <Link
          href="https://sebastianpodolski.co.uk"
          target="_blank"
          rel="noreferrer"
        >
          © Created by SWebDew 2025
        </Link>
      </div>
    </div>
  );
}
export default Footer;
