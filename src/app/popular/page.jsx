"use client";

import MovieList from "@/components/MovieList";
import Pagination from "@/components/Utilities/Pagination";
import { getMovieResponse } from "@/libs/fetch";
import { Suspense, useEffect, useState } from "react";

export default function Page() {
  // * Max Page = 500 in api

  // const responsePopularMovie = await getMovieResponse(
  //   "movie/popular",
  //   `language=en-US&page=1`
  // );
  const [page, setPage] = useState(1);
  const [movieList, SetMovieList] = useState([]);

  const fetchData = async () => {
    const responsePopularMovie = await getMovieResponse(
      "movie/popular",
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

  const handlePrevButton = () => {
    if (page == 1) return;
    setPage((prev) => prev - 1);
    scrollTop();
  };

  const handleNextButton = () => {
    if (page == 500) return;
    setPage((prev) => prev + 1);
    scrollTop();
  };

  const handleFirstPageButton = () => {
    if (page == 1) return;
    setPage(1);
    scrollTop();
  };
  const handleLastPageButton = () => {
    if (page == 500) return;
    setPage(500);
    scrollTop();
  };
  return (
    <div className="h-screen">
      <MovieList response={movieList.results} />
      <Pagination
        page={page}
        lastpage={movieList.total_pages}
        handleNextButton={handleNextButton}
        handlePrevButton={handlePrevButton}
        handleFirstPageButton={handleFirstPageButton}
        handleLastPageButton={handleLastPageButton}
      />
    </div>
  );
}
