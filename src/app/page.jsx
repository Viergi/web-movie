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
    <div className="pb-2 ">
      <div className="w-full h-40 md:h-[25rem] xl:h-[32rem] mb-8 ">
        <HeroSection
          severalPopularFilms={responsePopularMovie.results.slice(0, 5)}
        />
      </div>
      <MovieList
        response={responsePopularMovie.results.slice(0, 10)}
        title="Popular Movie"
        seeMore={"popular"}
      />
      <MovieList
        response={responseTopRatedMovie.results.slice(0, 10)}
        title="Top Rated Movie"
        seeMore={"top-rated"}
      />
    </div>
  );
}
