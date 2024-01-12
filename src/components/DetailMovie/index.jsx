"use client";

import { convertUSD } from "@/libs/convert";
import { ImageSquare, Star } from "@phosphor-icons/react";
import Image from "next/image";

export default function DetailMovie({ data }) {
  const Rating = Math.floor(data.vote_average * 10) / 10;

  let jumlahBintang = [0, 0, 0, 0, 0];
  let bintang = [0, 0, 0, 0, 0];

  if (Rating < 3) {
    jumlahBintang.splice(0, 4);
    bintang.splice(0, 1);
  } else if (Rating < 6 && Rating >= 3) {
    jumlahBintang.splice(0, 3);
    bintang.splice(0, 2);
  } else if (Rating < 8 && Rating >= 6) {
    jumlahBintang.splice(0, 2);
    bintang.splice(0, 3);
  } else if (Rating <= 9 && Rating >= 8) {
    jumlahBintang.splice(0, 1);
    bintang.splice(0, 4);
  } else {
    bintang.splice(0, 5);
  }

  return (
    <div className="h-[80%] w-full relative ">
      <div className="absolute  w-full h-3/4 -bottom-[5.5rem] z-[0] border-t backdrop-blur-sm bg-gradient-to-b from-white/10 to-slate-950 via-slate-950"></div>
      {data.backdrop_path ? (
        <Image
          src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${data.backdrop_path}`}
          alt="..."
          width={500}
          height={500}
          className="absolute top-0 -z-10 object-cover object-[100%,30%] "
        />
      ) : (
        <div className="absolute -z-10 left-0 top-0 w-full h-full flex  items-center bg-slate-300">
          No Picture
        </div>
      )}
      <div className="flex w-full relative z-10">
        <div className="w-[25%] pl-10 pt-10">
          {data.poster_path ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${data.poster_path}`}
              alt="..."
              width={500}
              height={500}
              className="h-96 w-72"
            ></Image>
          ) : (
            <div className="h-96 bg-slate-300 flex justify-center items-center ">
              <ImageSquare size={32} color="black" weight="fill" />
              No Picture
            </div>
          )}
        </div>
        <div className="px-10 py-4 pt-10 w-[75%]">
          <div>
            <h1 className="text-2xl font-bold text-white text-shadow">
              {data.release_date.slice(0, 4)}
            </h1>
            <h1 className="text-[2.3rem] font-bold text-white text-shadow">
              {data.title}
            </h1>
            <h1 className="text-2xl font-bold text-white text-shadow">
              {data.genres.map((genre, index, row) => {
                if (index + 1 === row.length) {
                  return genre.name;
                }
                return `${genre.name}, `;
              })}
            </h1>
            <div className="flex items-center gap-1">
              <h2 className="text-yellow-500 flex ">
                {jumlahBintang.map((_, index) => {
                  return (
                    <Star
                      size={20}
                      weight="fill"
                      className="text-shadow"
                      key={index}
                    />
                  );
                })}
                {bintang.map((_, index) => {
                  return (
                    <Star
                      size={20}
                      className="text-white text-shadow"
                      key={index}
                    />
                  );
                })}
              </h2>
              <h2 className="font-bold text-white text-shadow">
                {Rating}
                {` (${data.vote_count})`}
              </h2>
            </div>
          </div>
          <div className="flex pt-10 ">
            <div className="w-1/2">
              <h1 className="pb-5 text-2xl font-bold text-white text-shadow">
                About Movie
              </h1>
              <p className="pr-7 text-white text-justify  h-56 overflow-auto scroll text-shadow">
                {data.overview}
              </p>
            </div>
            <div className="text-white w-1/2 h-full ">
              <h1 className="pb-5 text-2xl font-bold text-white text-shadow">
                Movie Detail
              </h1>
              <div className="flex ">
                <h1 className="w-1/2">Release date</h1>
                <p className="w-1/2">
                  : {data.release_date ? data.release_date : "Not Known"}
                </p>
              </div>
              <div className="flex ">
                <h1 className="w-1/2 ">Production Countries</h1>
                <p classname="">
                  :{" "}
                  {data.production_countries[0] == null
                    ? "Not Known"
                    : data.production_countries[0].name}
                </p>
              </div>
              <div className="flex">
                <h1 className="w-1/2">Production Companies</h1>
                <p className="w-1/2">
                  :{" "}
                  {data.production_companies[0] == null
                    ? "Not Known"
                    : data.production_companies.map((company, index, row) => {
                        if (index + 1 === row.length) {
                          return company.name;
                        }
                        return `${company.name}, `;
                      })}
                </p>
              </div>
              <div className="flex">
                <h1 className="w-1/2">Budget</h1>
                <p classname="w-1/2">
                  : {data.budget == 0 ? "Not Known" : convertUSD(data.budget)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white font-bold"></div>
    </div>
  );
}
