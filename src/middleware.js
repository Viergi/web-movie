// export { default } from "next-auth/middleware";
// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";
export { default } from "next-auth/middleware";

// This function can be marked `async` if using `await` inside
// export async function middleware(request) {
//   const headers = new Headers(request.headers);
//   const currentEnv = process.env.NODE_ENV;
//   const isHttps = headers.get("x-forwarded-proto")?.split(",")[0] === "https";
//   const isLocalhost = request.headers.get("host")?.includes("localhost");

//   if (currentEnv === "production" && !isHttps && !isLocalhost) {
//     const newUrl = new URL(`http://${headers.get("host")}` || "");
//     newUrl.protocol = "https:";
//     return NextResponse.redirect(newUrl.href, 301);
//   }
//   return NextResponse.redirect("http://localhost:3000");
// }

// import { withAuth } from "next-auth/middleware"

// export default withAuth(
// `withAuth` augments your `Request` with the user's token.
//   function middleware(req) {
//     return NextResponse.redirect("http:localhost:3000/");
//   },
//   {
//     callbacks: {
//cek apa sudah auth
//       authorized({ user }) {
//         if (user) return true;
//       },
//     },
//   }
// );

export const config = {
  matcher: ["/dashboard/:path*"],
};
