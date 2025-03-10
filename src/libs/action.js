"use server";

import { signIn } from "next-auth/react";
import { AuthError } from "next-auth";
import { db } from "./prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";

// export async function authenticate(prevState, formData) {
//   try {
//     await signIn("credentials", formData);
//   } catch (error) {
//     if (error == AuthError) {
//       switch (error.type) {
//         case "CredentialsSignin":
//           return "Invalid credentials.";
//         default:
//           return "Something went wrong.";
//       }
//     }
//     throw error;
//   }
// }

//hash password
export async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

//verify password with bcrypt compare
export async function verifyPassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

export async function createUser(formData) {
  const email = formData?.get("email");
  const username = formData?.get("username");
  const password = formData?.get("password");
  const hashedPassword = await hashPassword(password);

  const existingEmail = await db.user.findUnique({
    where: { email: email },
  });
  if (existingEmail) return { error: "Email has been used", status: 409 };

  const existingUsername = await db.user.findUnique({
    where: { username: username },
  });
  if (existingUsername) return { error: "Username has been used", status: 409 };

  const newUser = await db.user.create({
    data: {
      email,
      username,
      password: hashedPassword,
    },
  });

  return { succes: "Successfully created an account" };
}

export async function addToFavorite(
  movie_id,
  user_email,
  poster,
  title,
  genre,
  release_date
) {
  await db.favorite.create({
    data: {
      movie_id,
      user_email,
      poster,
      title,
      genre,
      release_date,
    },
  });
  revalidatePath(`/movie/${movie_id}`);
  return {
    success: "Added successfully",
  };
}

export async function deleteFromFavorite(movie_id, user_email) {
  await db.favorite.delete({
    where: {
      user_email_movie_id: { movie_id, user_email },
    },
  });

  revalidatePath(`/movie/${movie_id}`);
  return {
    success: "Successfully deleted",
  };
}

export async function addComment(
  user_email,
  title,
  movie_id,
  comment,
  username
) {
  await db.comment.create({
    data: {
      user_email: user_email,
      title: title,
      movie_id: movie_id,
      comment: comment,
      username: username,
    },
  });

  revalidatePath(`/movie/${movie_id}`);
  return {
    success: "Comment successful",
  };
}
