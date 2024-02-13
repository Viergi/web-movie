"use client";

import { CircleNotch } from "@phosphor-icons/react";
import { useFormStatus } from "react-dom";

export default function SubmitComment() {
  const { pending } = useFormStatus();

  return (
    <button
      className={`${
        pending ? "text-white/40" : null
      } px-5 border mt-2 py-2 rounded-lg  flex gap-2 justify-center items-center`}
      aria-disabled={pending}
      disabled={pending}
    >
      <div className="relative flex ">
        {pending ? "Commenting..." : "Comment"}
      </div>
    </button>
  );
}
