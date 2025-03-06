import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { db } from "./libs/prisma";
import Credentials from "@auth/core/providers/credentials";
// import { verifyPassword } from "./libs/action";
import bcrypt from "bcryptjs";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // I use negation branch
        //check email and password is true
        if (!credentials.email || !credentials.password) {
          return null;
        }
        // check user exist or not in database and return false if not exist and return user object {email,password} if exist
        const existingUser = await db.user.findUnique({
          where: { email: credentials.email },
        });
        //check if user not exist, negasi false value so return the null value
        if (!existingUser) {
          return null;
        }
        //check existing user password with input password
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          existingUser.password
        );
        //
        if (!passwordMatch) {
          return null;
        }
        return {
          id: `${existingUser.id}`,
          username: existingUser.username,
          email: existingUser.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          username: user.username,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
        },
      };
    },
  },
});
