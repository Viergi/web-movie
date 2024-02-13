"use client";

export default function GenreMovie({ genre }) {
  return (
    <span>
      {genre.slice(0, 2).map((genre, index, row) => {
        if (window.innerWidth <= 320) {
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
