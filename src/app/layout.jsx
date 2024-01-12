import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FilmVista",
  description: "The best and easiest movie watching application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative bg-slate-950`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
