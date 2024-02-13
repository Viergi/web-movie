"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function Pagination({ page, lastpage }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handlePrevButton = () => {
    if (page == 1) return;
    router.push(
      pathname + "?" + createQueryString("page", `${Number(page) - 1}`)
    );
  };

  const handleNextButton = () => {
    if (page == 500) return;
    router.push(
      pathname + "?" + createQueryString("page", `${Number(page) + 1}`)
    );
  };

  const handleFirstPageButton = () => {
    if (page == 1) return;
    router.push(pathname + "?" + createQueryString("page", `1`));
  };
  const handleLastPageButton = () => {
    if (page == 500 || lastpage == page) return;
    router.push(
      pathname +
        "?" +
        createQueryString("page", `${lastpage > 500 ? "500" : lastpage}`)
    );
  };

  return (
    <div className="flex justify-center items-center text-white gap-4 pb-4">
      {/* // ! ini make validasi supaya tidak muncul duluan sebelum card
       */}
      {lastpage ? (
        <div className="flex gap-2 md:gap-10">
          <div className="flex gap-3 md:gap-6">
            <button
              onClick={handleFirstPageButton}
              className="hover:text-slate-600 text-xs md:text-lg "
            >
              First Page
            </button>
            <button
              onClick={handlePrevButton}
              className="hover:text-slate-600 text-xs md:text-lg"
            >
              Prev
            </button>
          </div>
          <h1 className="text-xs md:text-lg">{`${page} of ${
            lastpage > 500 ? "500" : lastpage
          }`}</h1>
          <div className="flex gap-3 md:gap-6">
            <button
              onClick={handleNextButton}
              className="hover:text-slate-600 text-xs md:text-lg"
            >
              Next
            </button>
            <button
              onClick={handleLastPageButton}
              className="hover:text-slate-600 text-xs md:text-lg"
            >
              Last Page
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
