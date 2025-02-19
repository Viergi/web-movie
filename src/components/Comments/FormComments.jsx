"use client";

import { addComment } from "@/libs/action";
import SubmitComment from "./SubmitComment";
import { useRef, useState } from "react";
import { z } from "zod";
import toast from "react-hot-toast";

const commentSchema = z.string().trim().min(1, { message: "Required" });

export default function FormComments({ user, movieId, title }) {
  // bikin validasi coy
  const [error, setError] = useState("");
  const ref = useRef(null);
  const postComment = async (formData) => {
    if (!user) {
      toast.error("Silahkan login terlebih dahulu", {
        style: {
          background: `#0f172a`,
          color: `white`,
        },
      });
      return;
    }
    setError("");
    const comment = formData.get("comment");
    const validateComment = commentSchema.safeParse(comment);

    if (!validateComment.success) {
      validateComment.error.issues.forEach((issues) => {
        setError(`${issues.message}`);
      });
      return;
    }

    ref.current?.reset();
    await addComment(user.email, title, movieId, comment, user.username);
  };

  return (
    <form action={postComment} ref={ref} autoComplete="off">
      <input
        placeholder="Tambahkan komentar..."
        autoComplete="off"
        name="comment"
        type="text"
        className="w-full h-10 pl-3 text-gray-200 placeholder:text-gray-600 border outline-none bg-background-primary"
      />
      {error && (
        <h3 className="text-red-700 text-xs font-semibold pl-2">{error}</h3>
      )}
      <SubmitComment />
    </form>
  );
}
