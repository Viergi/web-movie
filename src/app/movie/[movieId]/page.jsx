import { getMovieResponse } from "@/libs/fetch";
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
      {responseSimilarMovie.results.length > 1 ? (
        <MovieList
          api={responseSimilarMovie.results.slice(0, 5)}
          title={"Similar Movie"}
        />
      ) : null}
      <MovieList
        api={responsePopularMovie.results.slice(0, 5)}
        title={"Popular Movie"}
        seeMore={"popular"}
      />
      <MovieList
        api={responseTopRatedMovie.results.slice(0, 5)}
        title={"Top Rated Movie"}
        seeMore={"top-rated"}
      />
    </div>
  );
}
