"use client";

import MovieList from "@/components/MovieList";
import Pagination from "@/components/Utilities/Pagination";
import { getMovieResponse } from "@/libs/fetch";
import { useEffect, useState } from "react";

export default function Page() {
  const [page, setPage] = useState(1);
  const [movieList, SetMovieList] = useState([]);

  const fetchData = async () => {
    const responsePopularMovie = await getMovieResponse(
      "movie/top_rated",
      `language=en-US&page=${page}`
    );
    SetMovieList(responsePopularMovie);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const scrollTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNPrevButton = () => {
    if (page == 1) return;
    setPage((prev) => prev - 1);
    scrollTop();
  };

  const handleNextButton = () => {
    if (page == movieList.total_pages) return;
    setPage((prev) => prev + 1);
    scrollTop();
  };

  return (
    <div>
      <MovieList api={movieList.results} title={"Top Rated Movie"} />
      <Pagination
        page={page}
        lastpage={movieList.total_pages}
        handleNextButton={handleNextButton}
        handleNPrevButton={handleNPrevButton}
      />
    </div>
  );
}
