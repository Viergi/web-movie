"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function InputSearch() {
  const serachRef = useRef();
  const route = useRouter();

  function handleSearch(event) {
    const keyword = serachRef.current.value;

    if (!keyword) return;

    event.preventDefault();
    route.push(`/search/${keyword}`);
  }

  return (
    <form
      className="relative w-40 mr-4 h-8 border-2 overflow-hidden rounded-lg border-black flex items-center"
      onSubmit={handleSearch}
    >
      <input
        placeholder="Cari Film"
        className="w-32 h-8 indent-2 text-sm outline-none"
        ref={serachRef}
        type="text"
        minLength={3}
      />
      <button
        type="submit"
        className="w-full h-full bg-slate-100 flex justify-center items-center hover:bg-slate-500 transition-all border-l-black border-l"
      >
        <MagnifyingGlass size={18} />
      </button>
    </form>
  );
}
