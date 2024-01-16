import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "@splidejs/react-splide/css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FilmVista",
  description: "The best and easiest movie watching application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={"true"}>
      <body className={`${inter.className} relative bg-slate-950`}>
        <Navbar />
        <div className="pt-20 md:pt-16">{children}</div>
      </body>
    </html>
  );
}
