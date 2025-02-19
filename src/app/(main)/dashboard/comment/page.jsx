import { db } from "@/libs/prisma";
import { getCurrentUser } from "@/libs/getUser";
import Link from "next/link";

export default async function Page() {
  const user = await getCurrentUser();
  const commentList = await db.comment.findMany({
    where: {
      user_email: user.email,
    },
  });

  return (
    <div className="w-full min-h-screen md:pt-12">
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-10 xl:px-24 py-8 lg:pb-10">
        <h1 className="text-white text-md md:text-xl font-bold">My Comment</h1>
        <Link href={"/dashboard"} className="text-white mr-2">
          Back
        </Link>
      </div>
      {commentList.length > 0 ? (
        <div className="flex flex-col pb-8 gap-x-1 px-4 md:px-8 lg:px-10 xl:px-24 gap-y-4 gap-1 text-white">
          {commentList.slice(0, 5).map((data, index) => {
            return (
              <Link
                href={`movie/${data.movie_id}`}
                key={index}
                className="border-2 border-gray-600  rounded-lg flex py-2 flex-col"
              >
                <h1 className="text-md pl-3">{data.title}</h1>
                <p className="text-sm pl-3 italic">" {`${data.comment}`} "</p>
                <p className="text-[0.5rem] text-right pr-4">
                  {data.createAt.toString().slice(4, 15)}
                </p>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-white flex justify-center items-center w-full h-20 md:h-40 ">
          <h1 className="text-xs md:text-xl">
            Belum ada komentar yang ditambahkan...
          </h1>
        </div>
      )}
    </div>
  );
}
