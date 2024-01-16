"use client";

import { getMovieResponse } from "@/libs/fetch";
import MovieList from "@/components/MovieList";
import { Suspense, useEffect, useState } from "react";
import Pagination from "@/components/Utilities/Pagination";

export default function Page({ params }) {
  const [page, setPage] = useState(1);
  const [dataMovie, setDataMovie] = useState([]);

  const { keyword } = params;
  let decodedKeyword = decodeURI(keyword);

  const fetchData = async () => {
    const searchedMovie = await getMovieResponse(
      "search/movie",
      `query=${decodedKeyword}&language=en-US&page=${page}`
    );
    setDataMovie(searchedMovie);
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
    if (page == dataMovie.total_pages) return;
    setPage((prev) => prev + 1);
    scrollTop();
  };

  const handleFirstPageButton = () => {
    if (page == 1) return;
    setPage(1);
    scrollTop();
  };
  const handleLastPageButton = () => {
    if (page == dataMovie.total_pages) return;
    setPage(dataMovie.total_pages);
    scrollTop();
  };

  if (dataMovie.results?.length < 1) {
    return (
      <div className="p-4 bg-slate-950 flex justify-center items-center">
        <h1 className="text-white font-bold text-2xl">{`${decodedKeyword} Not Found`}</h1>
      </div>
    );
  }

  return (
    <div className="p-4 bg-slate-950">
      <MovieList
        response={dataMovie.results}
        title={`Pencarian untuk ${decodedKeyword}`}
      />
      <Pagination
        page={page}
        lastpage={dataMovie.total_pages}
        handleNextButton={handleNextButton}
        handlePrevButton={handlePrevButton}
        handleFirstPageButton={handleFirstPageButton}
        handleLastPageButton={handleLastPageButton}
      />
    </div>
  );
}
