import MovieList from "@/components/MovieList";
import Pagination from "@/components/Utilities/Pagination";
import { getMovieResponse } from "@/libs/fetch";

export default async function Page({ params, searchParams }) {
  let page = searchParams?.page || 1;
  let movieTitle = searchParams.title;
  const { movieId } = params;
  const responseSimilarMovie = await getMovieResponse(
    `movie/${movieId}/similar`,
    `language=en-US&page=${page}`
  );

  return (
    <div>
      <MovieList
        response={responseSimilarMovie.results}
        title={`Similar movie with ${movieTitle}`}
      />
      <Pagination page={page} lastpage={responseSimilarMovie.total_pages} />
    </div>
  );
}
