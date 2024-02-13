import Link from "next/link";
import InputSearch from "./InputSearch";
import Script from "next/script";
import AuthButton from "./AuthButton";
import { getCurrentUser } from "@/libs/getUser";

export default async function Navbar() {
  const user = await getCurrentUser();
  let prevScrollpos;

  return (
    <div className="flex flex-col md:flex-row justify-between p-4 bg-slate-900 bg-opacity-80 backdrop-blur-sm md:items-center border-b fixed w-full top-0 z-50 navbar transition-all duration-300">
      <Script>
        {`prevScrollpos = window.pageYOffset;
          window.onscroll = function () {
            let currentScrollPos = window.pageYOffset;
            if (window.pageYOffset < 100 || prevScrollpos > currentScrollPos) {
              document.querySelector(".navbar").style.top = "0";
            } else {
              if(window.innerWidth < 426) {
                document.querySelector(".navbar").style.top = "-8rem";
              } else {
                document.querySelector(".navbar").style.top = "-4rem";
              }
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
      <AuthButton user={user} />
    </div>
  );
}
