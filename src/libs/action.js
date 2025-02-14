"use server";

import { signIn } from "next-auth/react";
import { AuthError } from "next-auth";
import { db } from "./prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";

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

export async function createUser(formData) {
  const email = formData?.get("email");
  const username = formData?.get("username");
  const password = formData?.get("password");

  const existingEmail = await db.user.findUnique({
    where: { email: email },
  });
  if (existingEmail) return { error: "Email telah digunakan", status: 409 };

  const existingUsername = await db.user.findUnique({
    where: { username: username },
  });
  if (existingUsername)
    return { error: "Username telah digunakan", status: 409 };

  const newUser = await db.user.create({
    data: {
      email,
      username,
      password,
    },
  });

  return { succes: "Berhasil membuat akun" };
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
    success: "Berhasil menambahkan",
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
    success: "Berhasil menghapus",
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

  revalidatePath("/movie/movie_id");
  return {
    success: "Berhasil Comment",
  };
}
