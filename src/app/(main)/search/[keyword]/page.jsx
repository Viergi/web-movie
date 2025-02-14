import { getMovieResponse } from "@/libs/fetch";
import MovieList from "@/components/MovieList";
import Pagination from "@/components/Utilities/Pagination";

export default async function Page(props) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const page = searchParams?.page || 1;
  const { keyword } = params;
  let decodedKeyword = decodeURI(keyword);

  const searchedMovie = await getMovieResponse(
    "search/movie",
    `query=${decodedKeyword}&language=en-US&page=${page}`
  );

  if (searchedMovie.results?.length < 1) {
    return (
      <div className="p-4 bg-slate-950 flex justify-center items-center">
        <h1 className="text-white font-bold text-2xl">{`${decodedKeyword} Not Found`}</h1>
      </div>
    );
  }

  return (
    <div className="p-4">
      <MovieList
        response={searchedMovie.results}
        title={`Pencarian untuk ${decodedKeyword}`}
      />
      <Pagination page={page} lastpage={searchedMovie.total_pages} />
    </div>
  );
}
