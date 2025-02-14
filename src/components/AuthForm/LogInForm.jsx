"use client";

import SubmitButton from "./SubmitButton";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginForm() {
  const router = useRouter();

  const logIn = async (formData) => {
    const signInData = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (signInData?.error) {
      toast.error("Email atau Password salah");
    } else {
      router.push(`/dashboard`);
    }
  };

  return (
    <form action={logIn} className="w-full px-3 pb-3">
      <div className="w-full">
        <div>
          <label className="mt-3 mb-1 block text-sm font-bold" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <input
              className="peer shadow-lg  block w-full rounded-md border border-black py-[9px] pl-2 outline-none text-sm placeholder:text-gray-800 bg-slate-200"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>
        </div>
        <div>
          <label
            className="mt-3 mb-1 block text-sm font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="peer shadow-lg  block w-full rounded-md border border-black py-[9px] pl-2 outline-none text-sm placeholder:text-gray-800 bg-slate-200"
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-1 mt-4">
        <SubmitButton title={"Log In"} />
        <p className="text-xs font-semibold">
          Don't have account Sign Up{" "}
          <Link
            href={"/sign-up"}
            className="text-blue-700 hover:text-blue-950 hover:underline"
          >
            here
          </Link>
        </p>
      </div>
    </form>
  );
}
