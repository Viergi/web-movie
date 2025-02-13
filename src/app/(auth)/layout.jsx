import Navbar from "@/components/Navbar";
import React from "react";

export default function AuthLayout({ children }) {
  return (
    <section className="flex justify-center items-center h-screen bg-slate-300">
      {children}
    </section>
  );
}
