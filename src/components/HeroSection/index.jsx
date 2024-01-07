import Image from "next/image";

export default function HeroSection({ title, imageURL }) {
  return (
    <div className="flex relative h-full w-full z-[2] overflow-hidden">
      {/* <Image
        alt="..."
        // src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${imageURL}`}
        width={500}
        height={500}
        className="object-fill bg-fixed"
        ></Image> */}
      <div
        className="object-fill bg-fixed w-full h-full bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_API_IMAGE_URL}${imageURL})`,
        }}
      />
      <h1 className="absolute bottom-4 text-white left-10 font-bold text-[3rem] text-shadow">
        {title}
      </h1>
    </div>
  );
}
