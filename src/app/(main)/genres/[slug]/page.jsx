import GenreTabs from "@/components/GenreTabs";
import MovieList from "@/components/MovieList";
import Pagination from "@/components/Utilities/Pagination";
import { getMovieGenres, getMovieResponse } from "@/libs/fetch";

export default async function Page({ params, searchParams }) {
  const { slug } = await params;
  const { page } = await searchParams;
  // const page = searchParams?.page || 1;
  let decodedSlug = decodeURI(slug);
  const genres = await getMovieGenres();

  // using this find cause this api using id of genre
  const genre = await genres.find((genre) => genre.name == decodedSlug);
  const responseGenresMovie = await getMovieResponse(
    `discover/movie`,
    `include_adult=true&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre.id}`
  );
  return (
    <div className="pb-10">
      <GenreTabs genres={genres} active={genre.name} />
      <MovieList response={responseGenresMovie.results} />
      <Pagination
        page={responseGenresMovie.page}
        lastpage={responseGenresMovie.total_pages}
      />
    </div>
  );
}
