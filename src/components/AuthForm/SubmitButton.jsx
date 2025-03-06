"use client";

import { CircleNotch } from "@phosphor-icons/react";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ title }) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`${
        pending && "bg-accent text-white/40"
      } px-10 py-2 bg-accent rounded-lg w-full hover:bg-accent-hover hover:text-white/60 flex gap-2 justify-center items-center`}
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
