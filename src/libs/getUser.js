"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { auth } from "@/auth";
import { getServerSession } from "next-auth";

export async function getCurrentUser() {
  // const session = await getServerSession(authOptions);
  const session2 = await auth();
  return session2?.user;
}
