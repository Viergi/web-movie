"use client";

import { ImageSquare } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Card({ title, imageURL, id, releaseDate, genre }) {
  const [filteredGenres, setFilteredGenres] = useState([]);

  useEffect(() => {
    const updateGenres = () => {
      if (typeof window !== "undefined" && window.innerWidth > 320) {
        setFilteredGenres(
          genre
            .slice(0, 2)
            .map((item, index, row) =>
              index + 1 === row.length ? item : `${item}, `
            )
        );
      } else {
        setFilteredGenres([]);
      }
    };

    updateGenres(); // Initial call
    window.addEventListener("resize", updateGenres);
    return () => window.removeEventListener("resize", updateGenres);
  }, [genre]);

  return (
    <Link
      scroll={true}
      href={`/movie/${id}`}
      className="h-[80%] w-[95%] hover:-translate-y-4 transition-all duration-300"
    >
      {imageURL ? (
        <Image
          src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL_CARD}${imageURL}`}
          alt="..."
          height={500}
          width={500}
          className="h-[80%] rounded-lg object-fill bg-slate-600"
        ></Image>
      ) : (
        <div className="flex justify-center items-center h-full rounded-lg bg-slate-600">
          <ImageSquare size={32} color="black" weight="fill" />
          No Picture
        </div>
      )}
      <h1 className="font-bold truncate pt-2 w-[80%] text-white">{title}</h1>
      <h2 className="font-bold text-[0.7rem] w-full text-gray-400 flex justify-between">
        <span>{releaseDate.slice(0, 4)}</span>
        <span>{filteredGenres}</span>
      </h2>
    </Link>
  );
}
