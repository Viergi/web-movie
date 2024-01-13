import Link from "next/link";
import InputSearch from "./InputSearch";

export default function Navbar() {
  return (
    <div className="flex flex-col md:flex-row justify-between p-4 md:items-center bg-slate-500 sticky top-0 z-50 ">
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
