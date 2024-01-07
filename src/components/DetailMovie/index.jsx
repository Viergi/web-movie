import Image from "next/image";

export default function DetailMovie({ data }) {
  return (
    <div className="h-3/5 relative">
      {data.backdrop_path ? (
        <Image
          src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${data.backdrop_path}`}
          alt="..."
          width={500}
          height={500}
          className="object-cover object-[100%,20%]"
        />
      ) : (
        <div className="w-full h-full flex justify-center items-center bg-slate-300">
          Tidak ada Gambar
        </div>
      )}
      <div className="absolute bottom-5 left-8 font-bold text">
        {data.title}
      </div>
    </div>
  );
}
