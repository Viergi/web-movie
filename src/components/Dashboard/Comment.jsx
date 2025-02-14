import Link from "next/link";
import { db } from "@/libs/prisma";

export default async function Comment({ user }) {
  const commentList = await db.comment.findMany({
    where: {
      user_email: user.email,
    },
  });

  return (
    <>
      <Link href="dashboard/comment" className="text-xl mt-2 text-white mb-4">
        Comment
      </Link>
      {commentList.length > 0 ? (
        <div className="flex flex-col pb-8 gap-x-1 md:px-8 lg:px-10 xl:px-24 gap-y-4 gap-1 text-white">
          {commentList.slice(0, 5).map((data, index) => {
            if (index + 1 === 5) {
              return (
                <div className="flex justify-center" key={index}>
                  <Link href={"dashboard/comment"} className="h-full w-[95%]">
                    <div>See more...</div>
                  </Link>
                </div>
              );
            } else {
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
            }
          })}
        </div>
      ) : (
        <div className="text-white flex justify-center items-center w-full h-20 md:h-40 ">
          <h1 className="text-xs md:text-xl">
            Belum ada komentar yang ditambahkan...
          </h1>
        </div>
      )}
    </>
  );
}
