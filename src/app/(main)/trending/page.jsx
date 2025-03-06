// "use client";

import MovieList from "@/components/MovieList";
import Pagination from "@/components/Utilities/Pagination";
import { getMovieResponse } from "@/libs/fetch";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useCallback, useEffect, useState } from "react";

export default async function Page() {
  const responsePopularMovie = await getMovieResponse(
    "trending/movie/week",
    `language=en-US`
  );

  return (
    <div className="p-4">
      <MovieList
        response={responsePopularMovie.results}
        title={"Trending Movie"}
      />
    </div>
  );
}
