"use client";

import { Star } from "@phosphor-icons/react";

export default function Rating({ voteAverage, voteCount }) {
  const Rating = Math.floor(voteAverage * 10) / 10;

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
    <div className="flex items-center gap-1 pt-2 md:pt-0">
      <h2 className="text-yellow-500 flex ">
        {jumlahBintang.map((_, index) => {
          return (
            <Star size={20} weight="fill" className="text-shadow" key={index} />
          );
        })}
        {bintang.map((_, index) => {
          return (
            <Star size={20} className="text-white text-shadow" key={index} />
          );
        })}
      </h2>
      <h2 className="font-bold text-white text-shadow">
        {Rating}
        {` (${voteCount})`}
      </h2>
    </div>
  );
}
