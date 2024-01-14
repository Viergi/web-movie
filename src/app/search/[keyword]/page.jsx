import { getGenre, getMovieGenres, getMovieResponse } from "@/libs/fetch";
import MovieList from "@/components/MovieList";

export default async function Page({ params }) {
  const { keyword } = params;
  let decodedKeyword = decodeURI(keyword);

  const searchedMovie = await getMovieResponse(
    "search/movie",
    `query=${decodedKeyword}&language=en-US&include_adult=true`
  );

  const dataGenreMovie = await getMovieGenres();

  if (searchedMovie.results.length < 1) {
    return (
      <div className="p-4 bg-slate-950 flex justify-center items-center">
        <h1 className="text-white font-bold text-2xl">{`${decodedKeyword} Not Found`}</h1>
      </div>
    );
  }
  return (
    <div className="p-4 bg-slate-950">
      <MovieList
        response={searchedMovie.results}
        title={`Pencarian untuk ${decodedKeyword}`}
        genres={dataGenreMovie.genres}
      />
    </div>
  );
}
