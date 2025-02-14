import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

export default function AuthLayout({ children }) {
  return (
    <section className="relative flex justify-center items-center h-screen text-shadow-white">
      <Image
        className="w-full h-full object-cover absolute -z-10"
        src={"/background-login-page.webp"}
        width={500}
        height={500}
        alt="..."
        priority={true}
      />
      {children}
    </section>
  );
}
