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
      .email("Enter the correct email"),
    username: z
      .string()
      .min(6, {
        message: "Username must consist of at least 6 characters",
      })
      .refine((data) => !data.includes(" "), {
        message: "The username cannot contain spaces",
      }),
    password: z
      .string()
      .regex(new RegExp("[0-9]"), {
        message: "The password must contain numbers",
      })
      .min(8, {
        message: "Password must be at least 8 characters",
      })
      .refine((data) => !data.includes(" "), {
        message: "The password must not contain spaces",
      }),
    confirmPassword: z.string().min(1, {
      message: "Confirmation password must be entered",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
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
    <form
      action={handleSubmit}
      className="w-full px-3  pb-3 text-tiny md:text-xs lg:text-sm"
    >
      <div className="w-full pt-4">
        <div className="grid xl:grid-rows-[1.5rem_1fr_1.5rem] gap-1">
          <label className=" block font-bold" htmlFor="email">
            Email
          </label>
          <input
            className="peer shadow-white shadow-xs block w-full rounded-md  bg-background-secondary py-[9px] pl-2 outline-hidden placeholder:text-text-primary"
            id="email"
            type="text"
            name="email"
            placeholder="Enter your email address"
          />
          {error.email && (
            <span className="text-accent flex items-center font-semibold pl-2">
              {error.email}
            </span>
          )}
        </div>
        <div className="grid xl:grid-rows-[1.5rem_1fr_1.5rem] gap-1">
          <label className=" block font-bold " htmlFor="email">
            Username
          </label>

          <input
            className="peer shadow-white shadow-xs block w-full rounded-md py-[9px] pl-2 outline-hidden placeholder:text-text-primary bg-background-secondary"
            id="username"
            type="text"
            name="username"
            placeholder="Enter your username"
          />
          {error.username && (
            <span className="text-accent flex items-center font-semibold pl-2">
              {error.username}
            </span>
          )}
        </div>
        <div className="grid xl:grid-rows-[1.5rem_1fr_1.5rem] gap-1">
          <label className=" block font-bold" htmlFor="password">
            Password
          </label>

          <input
            className="peer shadow-xs shadow-white  block w-full rounded-md py-[9px] pl-2 outline-hidden placeholder:text-text-primary bg-background-secondary"
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            autoComplete="new-password"
          />
          {error.password && (
            <span className="text-accent flex items-center font-semibold pl-2">
              {error.password}
            </span>
          )}
        </div>
        <div className="grid xl:grid-rows-[1.5rem_1fr_1.5rem] gap-1">
          <label className=" block font-bold" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="peer shadow-xs shadow-white  block w-full rounded-md py-[9px] pl-2 outline-hidden placeholder:text-text-primary bg-background-secondary"
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Re-Enter password"
            autoComplete="new-password"
          />
          {error.confirmPassword && (
            <span className="text-accent flex items-center font-semibold pl-2">
              {error.confirmPassword}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-1 mt-1">
        <SubmitButton title={"Sign In"} />
        <p className="text-tiny md:text-base font-semibold">
          Already have account ? Log In{" "}
          <Link
            href={"/login"}
            className="text-accent hover:text-accent-hover hover:underline"
          >
            here
          </Link>
        </p>
      </div>
    </form>
  );
}
