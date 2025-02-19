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
      <head>
        <link rel="icon" href="/icon.png" type="image/x-icon" />
      </head>
      <body className={`${inter.className} bg-background-primary`}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
