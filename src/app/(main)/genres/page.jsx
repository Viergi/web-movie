import GenreTabs from "@/components/GenreTabs";
import { getMovieGenres } from "@/libs/fetch";
import { redirect } from "next/navigation";

export default async function Page() {
  const genres = await getMovieGenres();
  function getRandomObject(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  redirect(`/genres/${getRandomObject(genres).name}?page=1`);
  // return null
  // return (
  //   <section className="pt-5 h-screen">
  //     <GenreTabs genres={genres} />
  //     <h1 className="text-xl font-bold p-4">Select a Genre</h1>
  //   </section>
  // );
}
