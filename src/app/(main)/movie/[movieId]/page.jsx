import { getMovieResponse } from "@/libs/fetch";
import DetailMovie from "@/components/DetailMovie";
import MovieList from "@/components/MovieList";
import CommentSection from "@/components/CommentSection";

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

  return (
    <div>
      <DetailMovie data={responseDetailMovie} />
      <CommentSection movieId={movieId} title={responseDetailMovie.title} />
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
