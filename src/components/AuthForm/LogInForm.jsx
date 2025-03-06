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
      toast.error("Incorrect email or password", {
        style: {
          background: "#0f172a",
          color: "white",
        },
      });
    } else {
      router.push(`/dashboard`);
    }
  };

  return (
    <form action={logIn} className="w-full h-full px-6 pb-3">
      <div className="w-full">
        <div>
          <label className="mt-3 mb-1 block text-sm font-bold" htmlFor="email">
            Email
          </label>
          <input
            className="peer 9px shadow-xs block w-full rounded-md shadow-white  py-[9px] pl-2 outline-hidden text-sm placeholder:text-text-primary bg-background-secondary"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div>
          <label
            className="mt-3 mb-1 block text-sm font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="peer shadow-xs  block w-full rounded-md shadow-white py-[9px] pl-2 outline-hidden text-sm placeholder:text-text-primary bg-background-secondary"
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            required
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-1 mt-4">
        <SubmitButton title={"Log In"} />
        <p className="text-xs md:text-base font-semibold">
          Don't have account Sign Up{" "}
          <Link
            href={"/sign-up"}
            className="text-accent hover:text-accent-hover hover:underline"
          >
            here
          </Link>
        </p>
      </div>
    </form>
  );
}
