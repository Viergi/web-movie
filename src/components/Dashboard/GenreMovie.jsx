"use client";

import { useEffect, useState } from "react";

export default function GenreMovie({ genre }) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Semua kode yang menggunakan window HARUS di sini
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial width
    return () => window.removeEventListener("resize", handleResize); // Clean up
  }, []);

  return (
    <span>
      {genre.slice(0, 2).map((genre, index, row) => {
        if (windowWidth <= 425) {
          return;
        } else {
          if (index + 1 == row.length) {
            return genre.name;
          }
          return `${genre.name}, `;
        }
      })}
    </span>
  );
}
