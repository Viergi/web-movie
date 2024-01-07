import HeroSection from "@/components/HeroSection";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";

export default async function Home() {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/movie/popular?language=en-US&page=1`,
    options
  );
  const data = await response.json();

  /*
    ? ini randomnumber ganti/ hapus ntar
  */
  const randomNumber = Math.floor(Math.random() * 10);
  return (
    <div className="pb-2">
      <div className="w-full h-[30rem]">
        <HeroSection
          title={data.results[randomNumber].title}
          imageURL={data.results[randomNumber].backdrop_path}
        />
      </div>
      <MovieList api={data.results} title="Popular Movie" />
    </div>
  );
}
