import HeroSection from "@/components/HeroSection";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import { getMovieResponse } from "../libs/fetch";

export default async function Home() {
  const responsePopularMovie = await getMovieResponse(
    "movie/popular",
    "language=en-US&page=1"
  );
  const responseTopRatedMovie = await getMovieResponse(
    "movie/top_rated",
    "language=en-US&page=1"
  );

  /*
    ? ini randomnumber ganti/ hapus ntar
  */
  const randomNumber = Math.floor(Math.random() * 10);
  return (
    <div className="pb-2">
      <div className="w-full h-[25rem] mb-8">
        <HeroSection
          title={responsePopularMovie.results[randomNumber].title}
          // imageURL={data.results[randomNumber].backdrop_path }
          imageURL={responsePopularMovie.results[1].backdrop_path}
        />
      </div>
      <MovieList
        api={responsePopularMovie.results.slice(0, 10)}
        title="Popular Movie"
      />
      <MovieList
        api={responseTopRatedMovie.results.slice(0, 10)}
        title="Top Rated Movie"
      />
    </div>
  );
}
