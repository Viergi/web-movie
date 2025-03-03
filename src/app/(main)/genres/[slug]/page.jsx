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
      {/* <h1 className="text-xl font-bold p-4 capitalize">{params.slug} Videos</h1> */}
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {videos.map((video) => (
            <div key={video.id} className="bg-gray-800 p-2 rounded-lg">
              <Image src={video.thumbnail} alt={video.title} width={300} height={200} className="rounded-md" />
              <h3 className="mt-2">{video.title}</h3>
            </div>
          ))}
        </div> */}
      <Pagination
        page={responseGenresMovie.page}
        lastpage={responseGenresMovie.total_pages}
      />
    </div>
  );
}
