import MovieList from "@/components/MovieList";
import Pagination from "@/components/Utilities/Pagination";
import { getMovieResponse } from "@/libs/fetch";

export default async function Page({ searchParams }) {
  const page = searchParams?.page || 1;
  const responsePopularMovie = await getMovieResponse(
    "movie/top_rated",
    `language=en-US&page=${page}`
  );

  return (
    <div className="p-4">
      <MovieList
        response={responsePopularMovie.results}
        title={"Top Rated Movie"}
      />
      <Pagination page={page} lastpage={responsePopularMovie.total_pages} />
    </div>
  );
}
