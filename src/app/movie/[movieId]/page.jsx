import { getMovieResponse } from "@/app/libs/fetch";
import DetailMovie from "@/components/DetailMovie";
import MovieList from "@/components/MovieList";

export default async function Page({ params }) {
  const { movieId } = params;

  const responseDetailMovie = await getMovieResponse(
    `movie/${movieId}`,
    "language=en-US"
  );
  const responseSimilarMovie = await getMovieResponse(
    `movie/${movieId}/similar`,
    "language=en-US&page=1"
  );
  const responsePopularMovie = await getMovieResponse(
    "movie/popular",
    "language=en-US&page=1"
  );
  const responseTopRatedMovie = await getMovieResponse(
    "movie/top_rated",
    "language=en-US&page=1"
  );

  return (
    <div className="h-screen">
      <DetailMovie data={responseDetailMovie} />
      <MovieList
        api={responseSimilarMovie.results.slice(0, 5)}
        title={"Similar Movie"}
      />
      <MovieList
        api={responsePopularMovie.results.slice(0, 5)}
        title={"Popular Movie"}
      />
      <MovieList
        api={responseTopRatedMovie.results.slice(0, 5)}
        title={"Top Rated Movie"}
      />
    </div>
  );
}
