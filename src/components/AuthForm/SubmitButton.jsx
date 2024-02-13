"use client";

import { CircleNotch } from "@phosphor-icons/react";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ title }) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`${
        pending ? "bg-blue-800 text-white/40" : null
      } px-10 py-2 bg-blue-600 rounded-lg w-full hover:bg-blue-800 hover:text-white/40 flex gap-2 justify-center items-center`}
      aria-disabled={pending}
      disabled={pending}
    >
      <div className="relative">
        <span className="absolute top-[10%] -left-[50%] w-5 h-5">
          {pending ? (
            <CircleNotch size={20} color="#d4d3d5" className="animate-spin" />
          ) : null}
        </span>
        {title}
      </div>
    </button>
  );
}
