"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiMoebiusStar, GiGecko } from "react-icons/gi";

export default function Header() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/tutorial", label: "튜토리얼" },
    { href: "/lecture", label: "강의" },
    { href: "/reference", label: "레퍼런스" },
    { href: "/inspiration", label: "인스퍼레이션" },
  ];

  return (
    <header id="header">
      <div className="flex-1">
        <button className="header__left">
          <GiMoebiusStar size="20" />
        </button>
      </div>
      <div>
        <Link href="/" className="header__logo">
          webstoryboy
        </Link>
      </div>
      <div className="flex-1 flex justify-end">
        <button className="header__right">
          <GiGecko size="20" />
        </button>
      </div>

      <nav id="nav" className="header__menu">
        <ul className="flex gap-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`header__menu-link ${
                  pathname === item.href ? "active" : ""
                }`}
              >
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
