"use client";

import { authenticate, createUser } from "@/libs/action";
import { useFormState, useFormStatus } from "react-dom";
import LoginButton from "./SubmitButton";
import SubmitButton from "./SubmitButton";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";

const schema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Masukan email yang benar"),
    username: z
      .string()
      .min(6, {
        message: "Username minimal harus terdiri dari 6 karakter",
      })
      .refine((data) => !data.includes(" "), {
        message: "Username tidak boleh ada spasi",
      }),
    password: z
      .string()
      .regex(new RegExp("[0-9]"), {
        message: "Password harus mengandung angka",
      })
      .min(8, {
        message: "Password minimal 8 karakter",
      })
      .refine((data) => !data.includes(" "), {
        message: "Password tidak boleh ada spasi",
      }),
    confirmPassword: z.string().min(1, {
      message: "Password konfirmasi harus diisi",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password tidak cocok",
  });

export default function SignUpForm() {
  // const [errorMessage, formAction] = useFormState(createUser, undefined);
  const router = useRouter();
  const [error, setError] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = async (formData) => {
    setError({
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });

    const validateForm = schema.safeParse({
      email: formData.get("email"),
      username: formData.get("username"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });

    if (!validateForm.success) {
      validateForm.error.issues.forEach((issues) => {
        setError((prevState) => ({
          ...prevState,
          [issues.path[0]]: issues.message,
        }));
      });
      return;
    }

    const result = await createUser(formData);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success(result.succes);
      router.push("/login");
    }
  };

  return (
    <form action={handleSubmit} className="w-full px-3 pb-3 ">
      <div className="w-full">
        <div>
          <label className="mt-3 mb-1 block text-sm font-bold" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <input
              className="peer shadow-lg  block w-full rounded-md border border-black py-[9px] pl-2 outline-none text-sm placeholder:text-gray-800 bg-slate-200"
              id="email"
              type="text"
              name="email"
              placeholder="Enter your email address"
            />
            {error.email && (
              <h3 className="text-red-700 text-xs font-semibold pl-2">
                {error.email}
              </h3>
            )}
          </div>
        </div>
        <div>
          <label className="mt-3 mb-1 block text-sm font-bold " htmlFor="email">
            Username
          </label>
          <div className="relative">
            <input
              className="peer shadow-lg  block w-full rounded-md border border-black py-[9px] pl-2 outline-none text-sm placeholder:text-gray-800 bg-slate-200"
              id="username"
              type="text"
              name="username"
              placeholder="Enter your username"
            />
            {error.username && (
              <h3 className="text-red-700 text-xs font-semibold pl-2">
                {error.username}
              </h3>
            )}
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
            />
            {error.password && (
              <h3 className="text-red-700 text-xs font-semibold pl-2">
                {error.password}
              </h3>
            )}
          </div>
        </div>
        <div>
          <label
            className="mt-3 mb-1 block text-sm font-bold"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              className="peer shadow-lg  block w-full rounded-md border border-black py-[9px] pl-2 outline-none text-sm placeholder:text-gray-800 bg-slate-200"
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Re-Enter password"
            />
            {error.confirmPassword && (
              <h3 className="text-red-700 text-xs font-semibold pl-2">
                {error.confirmPassword}
              </h3>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-1 mt-4">
        <SubmitButton title={"Sign In"} />
        <p className="text-xs font-semibold">
          Already have account ? Log In{" "}
          <Link
            href={"/login"}
            className="text-blue-700 hover:text-blue-950 hover:underline"
          >
            here
          </Link>
        </p>
      </div>
    </form>
  );
}
