import Link from "next/link";
import { db } from "@/libs/db";
import Image from "next/image";
import GenreMovie from "./GenreMovie";

export default async function FavoriteMovie({ user }) {
  const favoriteMovieList = await db.favorite.findMany({
    where: {
      user_email: user.email,
    },
  });

  return (
    <>
      <Link href="dashboard/favorite-movie" className="text-xl text-white mb-4">
        Favorite Movie
      </Link>
      {favoriteMovieList.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-8 gap-x-1 md:px-8 lg:px-10 xl:px-24 gap-y-4 gap-1">
          {favoriteMovieList.slice(0, 5).map((data, index) => {
            if (index + 1 === 5) {
              return (
                <div
                  className="flex justify-center h-72 lg:h-90 xl:h-96"
                  key={data.movie_id}
                >
                  <Link
                    href={"dashboard/favorite-movie"}
                    className="h-full w-[95%]"
                  >
                    <div className="flex justify-center items-center h-[80%] text-white rounded-lg border-white border-2 hover:bg-slate-200 transition-all duration-300 hover:text-black">
                      See more ...
                    </div>
                  </Link>
                </div>
              );
            } else {
              return (
                <div
                  className="flex justify-center h-72 lg:h-90 xl:h-96"
                  key={data.movie_id}
                >
                  <Link
                    href={`/movie/${data.movie_id}`}
                    className="h-full w-[95%] hover:-translate-y-4 transition-all duration-300"
                  >
                    {data.poster ? (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${data.poster}`}
                        alt="..."
                        width={350}
                        height={350}
                        className="h-[80%] rounded-lg object-fill bg-slate-600"
                      ></Image>
                    ) : (
                      <div className="flex justify-center items-center h-[80%] rounded-lg bg-slate-600">
                        No Picture
                      </div>
                    )}
                    <h1 className="font-bold truncate pt-2 w-[80%] text-white">
                      {data.title}
                    </h1>
                    <h3 className="font-bold text-[0.7rem] w-full text-gray-600 flex justify-between">
                      <span>{data.release_date.slice(0, 4)}</span>
                      <GenreMovie genre={JSON.parse(data.genre)} />
                    </h3>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <div className="text-white flex justify-center items-center w-full h-20 md:h-40 border md:border-0">
          <h1 className="text-xs md:text-xl">
            Belum ada yang ditambahkan ke favorite ...
          </h1>
        </div>
      )}
    </>
  );
}
