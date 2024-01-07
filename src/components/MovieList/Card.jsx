"use client";

import Image from "next/image";
import Link from "next/link";

export default function Card({ title, imageURL, id }) {
  const scrollTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      onClick={scrollTop}
      href={`/detail/${id}`}
      className="relative h-40 lg:h-64 xl:h-72 rounded-lg overflow-hidden shadow-md shadow-black w-[95%]"
    >
      {imageURL ? (
        <Image
          src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${imageURL}`}
          alt="..."
          width={350}
          height={350}
          className="w-full h-full hover:scale-[1.10] transition-all duration-700 object-fill bg-slate-600"
        ></Image>
      ) : (
        <div className="w-full h-full flex justify-center items-center bg-slate-600">
          Tidak ada Gambar
        </div>
      )}
      <h1 className="absolute bottom-2 left-3 font-bold truncate h-6 w-[80%] text-white text-shadow ">
        {title}
      </h1>
    </Link>
  );
}
