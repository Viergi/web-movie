import GenreTabs from "@/components/GenreTabs";
import { getMovieGenres } from "@/libs/fetch";
import { redirect } from "next/navigation";

export default async function Page() {
  const genres = await getMovieGenres();
  // function getRandomObject(array) {
  //   const randomIndex = Math.floor(Math.random() * array.length);
  //   return array[randomIndex];
  // }
  redirect(`/genres/Action?page=1`);
  // return null
  // return (
  //   <section className="pt-5 h-screen">
  //     <GenreTabs genres={genres} />
  //     <div className=" flex items-center justify-center bg-red-700 h-[calc(100%-5.75rem)]">
  //       <h3 className="text-xl font-bold bg-blue-900">Select a Genre</h3>
  //     </div>
  //   </section>
  // );
}
