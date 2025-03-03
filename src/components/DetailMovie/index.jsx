import Image from "next/image";
import Overview from "./Overview";
import { getCurrentUser } from "@/libs/getUser";
import { db } from "@/libs/prisma";

export default async function DetailMovie({ data }) {
  const user = await getCurrentUser();
  const alreadyAdd = await db.favorite.findFirst({
    where: {
      movie_id: data.id.toString(),
      user_email: user?.email,
    },
  });

  return (
    <div className="h-auto w-full relative z-10 ">
      <div className="absolute  w-full md:h-[85%] lg:h-[80%] h-3/4 -bottom-[7rem] z-0 border-t backdrop-blur-xs bg-linear-to-b from-white/10 to-background-primary via-background-primary"></div>
      {data.backdrop_path ? (
        <Image
          src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${data.backdrop_path}`}
          alt="..."
          width={500}
          height={500}
          loading="eager"
          priority
          className="absolute top-0 -z-10 object-cover object-[100%_30%] "
        />
      ) : (
        <div className="absolute -z-10 left-0 top-0 w-full h-full flex  items-center bg-slate-950">
          No Picture
        </div>
      )}
      <Overview data={data} user={user} alreadyAdd={alreadyAdd} />
    </div>
  );
}
