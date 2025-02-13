// import HeroSection from "@/components/HeroSection";
// import MovieList from "@/components/MovieList";
import { getMovieResponse } from "@/libs/fetch";

import dynamic from "next/dynamic";
import Image from "next/image";

const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  // ssr: false,
  // loading:
});
const MovieList = dynamic(() => import("@/components/MovieList"), {
  // ssr: false,
});
// const { getMovieResponse } = dynamic(() => import("@/libs/fetch"));

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
  // const randomNumber = Math.floor(Math.random() * 10);
  return (
    <div className="pb-2 ">
      {/* belajar LCP yang di jadikan gambar untuk LCP disarankan untuk tidak diambil dari internet */}
      <div className="w-full h-40 md:h-[25rem] xl:h-[32rem] text-center mt-8 bg-slate-600 relative flex justify-center items-center">
        {/* <picture className="absolute top-0 right-0 w-full h-full">
          <source
            media="(max-width: 600px)"
            srcSet="/background-film-small.jpg"
          />
          <img
            fetchPriority="high"
            src="/background-film-large.jpg"
            alt="Picture of Cinema"
          />f
        </picture> */}
        <Image
          className="absolute top-0 right-0 w-full h-full"
          priority
          fetchPriority="high"
          // srcSet="/background-film-small.jpg 600w, /background-film-large.jpg 400w"
          // sizes="(max-width: 600px) 480px, "
          width={500}
          height={500}
          src={"/background-film-large.jpg"}
        ></Image>
        {/* <img
          fetchPriority="high"
          rel="preload"
          src="/background-film.avif"
          className="absolute top-0 right-0 w-full h-full"
          loading="eager"
          alt="Picture of cinema"
        ></img> */}
        <h1 className="text-2xl font-bold text-white pl-2 relative z-40">
          FILM VISTA
        </h1>
      </div>
      {/* <div className="w-full h-40 md:h-[25rem] xl:h-[32rem] mb-8 ">
        <HeroSection
          severalPopularFilms={responsePopularMovie.results.slice(0, 5)}
        />
      </div> */}
      {responsePopularMovie && (
        <MovieList
          response={responsePopularMovie.results.slice(0, 10)}
          title="Popular Movie"
          seeMore={"popular"}
        />
      )}
      <MovieList
        response={responseTopRatedMovie.results.slice(0, 10)}
        title="Top Rated Movie"
        seeMore={"top-rated"}
      />
    </div>
  );
}
