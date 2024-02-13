import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "@splidejs/react-splide/css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FilmVista",
  description: "The best and easiest movie watching application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={"true"}>
      <body className={`${inter.className} bg-slate-950`}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
