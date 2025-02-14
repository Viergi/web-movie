// "use client";

import MovieList from "@/components/MovieList";
import Pagination from "@/components/Utilities/Pagination";
import { getMovieResponse } from "@/libs/fetch";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useCallback, useEffect, useState } from "react";

export default async function Page(props) {
  const searchParams = await props.searchParams;
  // ! Max Page = 500 in api

  const page = searchParams?.page || 1;
  const responsePopularMovie = await getMovieResponse(
    "movie/popular",
    `language=en-US&page=${page}`
  );

  return (
    <div className="p-4">
      <MovieList
        response={responsePopularMovie.results}
        title={"Popular Movie"}
      />
      <Pagination page={page} lastpage={responsePopularMovie.total_pages} />
    </div>
  );
}
