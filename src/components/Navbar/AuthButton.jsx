"use client";

import { UserCircle } from "@phosphor-icons/react";
import Link from "next/link";

export default function AuthButton({ user }) {
  return (
    <>
      {user ? (
        <Link
          href={"/dashboard"}
          className="md:mx-4 mt-2 md:mt-0 flex items-center gap-2"
        >
          {user.image ? (
            <Image
              src={user.image}
              width={24}
              height={24}
              className="rounded-full"
            ></Image>
          ) : (
            <UserCircle size={24} color="#d4d3d5" />
          )}
          <h1 className="text-white">{user.username}</h1>
        </Link>
      ) : (
        <Link
          href={"/login"}
          className="md:mx-4 mt-2 md:mt-0 hover:text-slate-900 text-white"
        >
          Log In
        </Link>
      )}
    </>
  );
}
