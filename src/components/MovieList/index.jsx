import Link from "next/link";
import { getMovieGenres } from "@/libs/fetch";
import Card from "./Card";
import dynamic from "next/dynamic";
import { getGenre } from "@/libs/convert";

export default async function MovieList({
  response,
  title,
  seeMore,
  movieId,
  movieTitle,
}) {
  const genres = await getMovieGenres();

  return (
    <div className="px-4 pt-8 relative z-10 ">
      <div className="flex justify-between items-center md:px-8 lg:px-10 xl:px-24">
        <h1 className="font-bold py-2 pb-4 text-lg md:text-2xl text-white pl-3">
          {title ? title : null}
        </h1>
        {seeMore && (
          <Link
            scroll={true}
            href={
              movieId
                ? `/${seeMore}/${movieId}/?title=${movieTitle}&page=1`
                : `/${seeMore}/?page=1`
            }
            className="text-white py-2 pb-4 text-sm md:text-lg hover:text-slate-600"
          >
            See More...
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-8 gap-x-1 md:px-8 lg:px-10 xl:px-24 gap-y-4 gap-1">
        {response?.map((data) => {
          return (
            <div
              className="flex justify-center h-72 lg:h-90 xl:h-96"
              key={data.id}
            >
              <Card
                title={data.title}
                id={data.id}
                imageURL={data.poster_path}
                releaseDate={data.release_date}
                genre={getGenre(data.genre_ids, genres)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
