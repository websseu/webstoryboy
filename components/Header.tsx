"use client";

import Link from "next/link";
import { GiMoebiusStar, GiGecko } from "react-icons/gi";
import { usePathname } from "next/navigation";
import { MdStars } from "react-icons/md";

const menuItems = [
  { href: "/tutorial", label: "Tutorial" },
  { href: "/lecture", label: "Lecture" },
  { href: "/reference", label: "Reference" },
  { href: "/inspiration", label: "Inspiration" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header>
      <div
        id="header"
        className="w-full border-black border-b-2 flex items-center justify-between py-2 px-4"
      >
        <div>
          <button className="bg-main w-9 h-9 rounded-full flex items-center justify-center ring ring-gray-300/20 hover:bg-slate-50 bg-[#f8f7f1]">
            <GiMoebiusStar size="20" />
          </button>
        </div>
        <div className="poppins">
          <Link
            href={"/"}
            className="star text-6xl font-black uppercase bg-[#efeeec] px-4 flex"
          >
            <span>webst</span>
            <MdStars />
            <span>ryboy</span>
          </Link>
        </div>
        <div className="bg-main w-9 h-9 rounded-full flex items-center justify-center ring ring-gray-300/20 hover:bg-slate-50 bg-[#f8f7f1]">
          <GiGecko size="20" />
        </div>
      </div>
      <nav className="max-w-screen-xl mx-auto fixed top-[59px] left-1/2 transform -translate-x-1/2 z-10 ">
        <ul className="flex items-center justify-center gap-1 poppins text-sm">
          {menuItems.map((item, index) => (
            <li key={index} className="bg-[#efeeec] ">
              <Link
                href={item.href}
                className={`border border-black px-1 font-light py-0 uppercase hover:bg-black hover:text-[#f8f7f1] transition-all duration-300 ${
                  pathname.startsWith(item.href) ? "bg-[#000] text-white" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
