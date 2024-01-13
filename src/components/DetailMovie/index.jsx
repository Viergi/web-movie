import Image from "next/image";
import Overview from "./Overview";

export default function DetailMovie({ data }) {
  return (
    <div className="h-auto w-full relative z-10 ">
      <div className="absolute  w-full md:h-[85%] lg:h-[80%] h-3/4 -bottom-[5.5rem] z-[0] border-t backdrop-blur-sm bg-gradient-to-b from-white/10 to-slate-950 via-slate-950"></div>
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
      <Overview data={data} />
    </div>
  );
}
