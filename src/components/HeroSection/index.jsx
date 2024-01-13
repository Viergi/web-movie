import Image from "next/image";
import Link from "next/link";

export default function HeroSection({ title, imageURL, movieID }) {
  return (
    <Link
      href={`/movie/${movieID}`}
      className="flex relative md:h-full h-40 w-full z-[2] overflow-hidden"
    >
      {/* <Image
        alt="..."
        // src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${imageURL}`}
        width={500}
        height={500}
        className="object-fill bg-fixed"
        ></Image> */}
      <div
        className=" bg-fixed w-full bg-[100%,100%] bg-no-repeat bg-[center_top_6rem] lg:bg-[center_top_4rem] md:bg-[100%,110%] md:bg-bottom"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_API_IMAGE_URL}${imageURL})`,
          filter: `brightness(110%)`,
        }}
      />
      <h1 className="absolute bottom-2 md:bottom-4 text-white left-2 md:left-10 font-bold text-md md:text-[2rem] lg:text-[3rem] text-shadow">
        {title}
      </h1>
    </Link>
  );
}
