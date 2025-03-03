"use client";

import { useEffect, useState } from "react";
import InputSearch from "./InputSearch";
import Link from "next/link";
import AuthButton from "./AuthButton";

export default function NavbarClient({ userLoggedIn }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible =
        currentScrollPos < 100 || prevScrollPos > currentScrollPos;

      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`grid grid-cols-2 md:flex md:flex-row md:justify-between p-4 bg-background-third/80 backdrop-blur-xs md:items-center fixed w-full top-0 z-50 navbar transition-all duration-300 gap-2 md:gap-0
    ${visible ? "translate-y-0" : "-translate-y-32"}`}
    >
      <Link
        href="/"
        className="font-bold text-xl first-letter:text-[2rem] text-white text-shadow hover:text-slate-500 inline-flex"
      >
        FilmVista
      </Link>
      <AuthButton user={userLoggedIn} />
      <InputSearch />
    </nav>
  );
}
