"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";

export default function HeroSection({ severalPopularFilms }) {
  return (
    <div className="flex relative md:h-full h-40 w-full z-2 overflow-hidden">
      <Splide
        aria-label="My Favorite Images"
        className="w-full h-full"
        options={{
          rewind: true,
          autoplay: false,
          interval: 3000,
        }}
      >
        {severalPopularFilms.map((item, index) => {
          return (
            <SplideSlide key={index}>
              <Link
                href={`/movie/${item.id}`}
                className="flex relative md:h-full h-40 w-full z-2 overflow-hidden"
              >
                <Image
                  width={500}
                  height={500}
                  src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${item.backdrop_path}`}
                  alt="Image 1"
                  priority
                />
                <h1 className="absolute bottom-5 md:bottom-[20%] lg:top-[55%] z-3 text-white left-2 md:left-10 font-bold text-sm md:text-[1.5rem] lg:text-[3rem] text-shadow">
                  {item.title}
                </h1>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
      {/* <Image
        alt="..."
        // src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${imageURL}`}
        width={500}
        height={500}
        className="object-fill bg-fixed"
        ></Image> */}
      {/* <div
        className=" bg-fixed w-full bg-[100%,100%] bg-no-repeat bg-[center_top_6rem] lg:bg-[center_top_4rem] md:bg-[100%,110%] md:bg-bottom"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_API_IMAGE_URL}${imageURL})`,
          filter: `brightness(110%)`,
        }}
      /> */}
    </div>
  );
}
