"use client";

import { ImageSquare, Plus } from "@phosphor-icons/react";
import Image from "next/image";
import Rating from "./Rating";
import TitleMovie from "./TitleMovie";
import AboutMovie from "./AboutMovie";
import { addToFavorite, deleteFromFavorite } from "@/libs/action";
import toast from "react-hot-toast";
import { revalidatePath } from "next/cache";

export default function Overview({ data, user, alreadyAdd }) {
  const { id, poster_path, title, genres, release_date } = data;

  const handleAddButton = async () => {
    if (user) {
      const p = await addToFavorite(
        id.toString(),
        user.email,
        poster_path,
        title,
        JSON.stringify(genres),
        release_date
      );
      toast.success(p.success);
    } else {
      toast.error("Login terlebih dahulu", {
        style: {
          background: `#0f172a`,
          color: `white`,
        },
      });
    }
  };

  const handleDeleteButton = async () => {
    const p = await deleteFromFavorite(id.toString(), user.email);
    toast.success(p.success, {
      style: {
        background: `#0f172a`,
        color: `white`,
      },
    });
  };
  return (
    <div className="w-full relative p-10 pt-16 md:p-0 md:pt-2 xl:pt-5 z-10">
      {alreadyAdd && user ? (
        <button
          onClick={handleDeleteButton}
          className="bg-slate-950 p-1 flex items-center gap-1 text-white md:ml-5 mb-2 md:mb-2 xl:ml-10 border-white border-2 text-sm "
        >
          Delete from Favorite
        </button>
      ) : (
        <button
          className="bg-slate-950 p-1 flex items-center gap-1 text-white md:ml-5 md:mb-2 xl:ml-10 border-white border-2 text-sm"
          onClick={handleAddButton}
        >
          Add To Favorite <Plus width={15} />
        </button>
      )}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[25%] md:pl-5 pb-10 md:pb-0 xl:pl-10 ">
          {data.poster_path ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${data.poster_path}`}
              alt="..."
              width={500}
              height={500}
              className="md:h-80 lg:h-96 md:w-72"
            ></Image>
          ) : (
            <div className="md:h-80 lg:h-96 bg-slate-300 flex justify-center items-center ">
              <ImageSquare size={32} color="black" weight="fill" />
              No Picture
            </div>
          )}
        </div>
        <div className="md:pl-4 lg:py-4 w-full md:w-[75%]">
          <div>
            <TitleMovie
              releaseDate={data.release_date}
              title={data.title}
              genres={data.genres}
            />
            <Rating
              voteAverage={data.vote_average}
              voteCount={data.vote_count}
            />
          </div>
          <AboutMovie
            overview={data.overview}
            releaseDate={data.release_date}
            productionCountries={data.production_countries}
            productionCompanies={data.production_companies}
            budget={data.budget}
          />
        </div>
      </div>
    </div>
  );
}
