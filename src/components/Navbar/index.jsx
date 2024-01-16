import Link from "next/link";
import InputSearch from "./InputSearch";
import Script from "next/script";

export default function Navbar() {
  return (
    <div className="flex flex-col md:flex-row justify-between p-4 md:items-center bg-slate-500 fixed w-full top-0 z-50 navbar transition-all duration-300">
      <Script>
        {`let prevScrollpos = window.pageYOffset;
          window.onscroll = function () {
            console.log(window.pageYOffset);
            let currentScrollPos = window.pageYOffset;
            if (window.pageYOffset < 100) {
              document.querySelector(".navbar").style.top = "0";
            } else if (prevScrollpos > currentScrollPos) {
              document.querySelector(".navbar").style.top = "0";
            } else {
              document.querySelector(".navbar").style.top = "-4rem";
            }
            prevScrollpos = currentScrollPos;
          };
          `}
      </Script>
      <Link
        href="/"
        className="font-bold px-1 text-xl first-letter:text-[2rem] text-white text-shadow"
      >
        FilmVista
      </Link>
      <InputSearch />
    </div>
  );
}
