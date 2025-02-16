import Link from "next/link";
import InputSearch from "./InputSearch";
import Script from "next/script";
import AuthButton from "./AuthButton";
import { getCurrentUser } from "@/libs/getUser";

export default async function Navbar() {
  const user = await getCurrentUser();
  let prevScrollpos;

  return (
    <div className="grid grid-cols-2 md:flex md:flex-row md:justify-between p-4 bg-slate-900 bg-opacity-80 backdrop-blur-sm md:items-center border-b fixed w-full top-0 z-50 navbar transition-all duration-300 gap-2 md:gap-0">
      <Script>
        {/* script buat navbar hilang */}
        {`prevScrollpos = window.pageYOffset;
          window.onscroll = function () {
            let currentScrollPos = window.pageYOffset;
            if (window.pageYOffset < 100 || prevScrollpos > currentScrollPos) {
              document.querySelector(".navbar").style.top = "0";
            } else {
              if(window.innerWidth < 426) {
                document.querySelector(".navbar").style.top = "-129px";
              } else {
                document.querySelector(".navbar").style.top = "-65px";
              }
            }
            prevScrollpos = currentScrollPos;
          };
          `}
      </Script>
      <Link
        href="/"
        className="font-bold text-xl first-letter:text-[2rem] text-white text-shadow hover:text-slate-500"
      >
        FilmVista
      </Link>
      <AuthButton user={user} />
      <InputSearch />
    </div>
  );
}
