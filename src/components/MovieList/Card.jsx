"use client";

import { ImageSquare } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Card({ title, imageURL, id, releaseDate }) {
  const scrollTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      onClick={scrollTop}
      href={`/movie/${id}`}
      className="h-full w-[95%] hover:-translate-y-4 transition-all duration-300"
    >
      {imageURL ? (
        <Image
          src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${imageURL}`}
          alt="..."
          width={350}
          height={350}
          className="h-[80%] rounded-lg object-fill bg-slate-600"
        ></Image>
      ) : (
        <div className="flex justify-center items-center h-[80%] rounded-lg bg-slate-600">
          <ImageSquare size={32} color="black" weight="fill" />
          No Picture
        </div>
      )}
      <h1 className="font-bold truncate pt-2 w-[80%] text-white">{title}</h1>
      <h3 className="font-bold truncate text-[0.7rem] w-[80%] text-gray-600 ">
        {releaseDate.slice(0, 4)}
      </h3>
    </Link>
  );
}
