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
    // <form
    //   className="relative w-full col-span-2 md:order-2 md:w-80 mr-4 h-8 border-2 overflow-hidden rounded-lg border-white flex items-center"
    //   onSubmit={handleSearch}
    // >
    //   <input
    //     placeholder="Cari Film"
    //     className="w-4/5 h-8 indent-2 text-sm outline-none text-gray-200 placeholder:text-gray-600 bg-slate-950"
    //     ref={searchRef}
    //     minLength={3}
    //   />
    //   <button
    //     type="submit"
    //     className="w-1/5 h-full bg-slate-950 flex justify-center items-center hover:bg-white hover:text-black transition-all text-white border-l-2"
    //     aria-label="Search"
    //   >
    //     <MagnifyingGlass size={18} />
    //   </button>
    // </form>
    <form
      className="relative w-full col-span-2 md:order-2 md:w-80 lg:w-96"
      onSubmit={handleSearch}
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-text-primary sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm border border-white/15 rounded-lg bg-background-secondary text-text-primary"
          ref={searchRef}
          placeholder="Search Movie"
          minLength={3}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-accent hover:bg-accent-hover  outline-none font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
}
