import { getMovieResponse } from "@/libs/fetch";
import DetailMovie from "@/components/DetailMovie";
import MovieList from "@/components/MovieList";
import Comments from "@/components/Comments";

export default async function Page(props) {
  const params = await props.params;
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
  // console.log(responseSimilarMovie);
  return (
    <div className="pt-4">
      <DetailMovie data={responseDetailMovie} />
      <Comments movieId={movieId} title={responseDetailMovie.title} />
      {responseSimilarMovie.results.length > 1 ? (
        <MovieList
          response={responseSimilarMovie.results.slice(0, 5)}
          title={"Similar Movie"}
          seeMore={"similar"}
          movieId={movieId}
          movieTitle={responseDetailMovie.title}
        />
      ) : null}
      <MovieList
        response={responsePopularMovie.results.slice(0, 5)}
        title={"Popular Movie"}
        seeMore={"popular"}
      />
      <MovieList
        response={responseTopRatedMovie.results.slice(0, 5)}
        title={"Top Rated Movie"}
        seeMore={"top-rated"}
      />
    </div>
  );
}
