import FormComments from "./FormComments";
import Comment from "./Comments";
import { getCurrentUser } from "@/libs/getUser";
import { db } from "@/libs/prisma";

export default async function CommentSection({ movieId, title }) {
  const user = await getCurrentUser();
  const comments = await db.comment.findMany({
    where: { movie_id: movieId },
  });

  return (
    <div className="w-full relative z-10 px-2 md:px-10 block text-white">
      <Comment comments={comments} />
      <FormComments movieId={movieId} user={user} title={title} />
    </div>
  );
}
