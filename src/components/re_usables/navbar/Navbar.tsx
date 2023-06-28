"use client";
import Link from "next/link";
import Hamburger from "../hamburger/Hamburger";
import { useState } from "react";
import CloseIcon from "../close_icon/CloseIcon";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const ROUTES = ["home", "about", "education", "news", "resources", "web3"];
  console.log(pathname);

  return (
    <nav className="shadow-sm flex flex-col py-5 px-8 md:flex-row md:justify-between md:items-center">
      <div className="flex justify-between items-center py-5">
        <h1 className="text-lg">Hurupay Academy</h1>
        <span
          className="md:hidden flex justify-center items-center"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          {showMenu ? <CloseIcon /> : <Hamburger />}
        </span>
      </div>
      <div
        className={`${
          showMenu ? "" : "hidden"
        } flex flex-col gap-3 md:flex md:flex-row`}
      >
        {ROUTES.map((route, index) => (
          <Link
            key={route}
            href={`/${index ? route : ""}`}
            className={`text-lg hover:text-[#FFC100] ${
              pathname.endsWith(route) ? "text-[#FFC100]" : ""
            }`}
          >
            {route}
          </Link>
        ))}
      </div>
    </nav>
  );
}
