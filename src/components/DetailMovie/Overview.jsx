"use client";

import { ImageSquare } from "@phosphor-icons/react";
import Image from "next/image";
import Rating from "./Rating";
import TitleMovie from "./TitleMovie";
import AboutMovie from "./AboutMovie";

export default function Overview({ data }) {
  return (
    <div className="flex flex-col md:flex-row w-full relative p-10 md:p-0 z-10">
      <div className="w-full md:w-[25%] pb-10 md:pb-0 md:pl-5 md:pt-5 xl:pl-10 xl:pt-10">
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
      <div className="md:pl-4 md:pt-5 lg:py-4 lg:pt-10 w-full md:w-[75%]">
        <div>
          <TitleMovie
            releaseDate={data.release_date}
            title={data.title}
            genres={data.genres}
          />
          <Rating voteAverage={data.vote_average} voteCount={data.vote_count} />
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
  );
}
