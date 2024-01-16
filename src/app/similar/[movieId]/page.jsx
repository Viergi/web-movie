"use client";

import MovieList from "@/components/MovieList";
import Pagination from "@/components/Utilities/Pagination";
import { getMovieResponse } from "@/libs/fetch";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [page, setPage] = useState(1);
  const [dataMovie, setDataMovie] = useState({
    title: "",
    similarMovieWithTheTitle: [],
  });
  const { movieId } = params;

  const fetchData = async () => {
    const responseSimilarMovie = await getMovieResponse(
      `movie/${movieId}/similar`,
      `language=en-US&page=${page}`
    );
    const titleMovie = await getMovieResponse(
      `movie/${movieId}`,
      "language=en-US"
    );
    setDataMovie({
      title: titleMovie.title,
      similarMovieWithTheTitle: responseSimilarMovie,
    });
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
    if (page == dataMovie.similarMovieWithTheTitle.total_pages) return;
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
    <div>
      <MovieList
        response={dataMovie.similarMovieWithTheTitle.results}
        title={`Similar movie with ${dataMovie.title}`}
      />
      <Pagination
        page={page}
        lastpage={dataMovie.similarMovieWithTheTitle.total_pages}
        handleNextButton={handleNextButton}
        handlePrevButton={handlePrevButton}
        handleFirstPageButton={handleFirstPageButton}
        handleLastPageButton={handleLastPageButton}
      />
    </div>
  );
}
