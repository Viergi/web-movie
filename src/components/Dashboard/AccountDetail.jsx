"use client";

import { UserCircle } from "@phosphor-icons/react";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function AccountDetail({ user }) {
  return (
    <div className="flex md:gap-5 gap-2 pt-6 mb-4 md:pt-0 justify-between flex-col md:flex-row md:h-40 items-center">
      <div className="flex flex-col md:flex-row items-center">
        {user.image ? (
          <Image
            src={user.image}
            width={200}
            height={200}
            className="rounded-full h-32 w-32"
          ></Image>
        ) : (
          <UserCircle color="#d4d3d5" className="text-5xl md:text-9xl" />
        )}
        <h1 className="text-white text-lg md:text-5xl">{user.username}</h1>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          signOut({
            callbackUrl: "/",
          });
        }}
        className="text-white hover:text-slate-800 px-2 py-1 md:px-4 md:py-2 bg-black rounded-lg border"
      >
        Log out
      </button>
    </div>
  );
}
