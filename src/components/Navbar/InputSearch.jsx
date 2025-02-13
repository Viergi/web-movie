"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function InputSearch() {
  const searchRef = useRef();
  const route = useRouter();
  function handleSearch(event) {
    event.preventDefault();

    const keyword = searchRef.current.value;
    if (!keyword || keyword.trim() == "") return;

    route.push(`/search/${keyword}?page=1`);
  }

  return (
    <form
      className="relative w-full md:w-80 mr-4 h-8 border-2 overflow-hidden rounded-lg border-white flex items-center"
      onSubmit={handleSearch}
    >
      <input
        placeholder="Cari Film"
        className="w-4/5 h-8 indent-2 text-sm outline-none text-gray-200 placeholder:text-gray-600 bg-slate-950"
        ref={searchRef}
        minLength={3}
      />
      <button
        type="submit"
        className="w-1/5 h-full bg-slate-950 flex justify-center items-center hover:bg-white hover:text-black transition-all text-white border-l-2"
        aria-label="Search"
      >
        <MagnifyingGlass size={18} />
      </button>
    </form>
  );
}
