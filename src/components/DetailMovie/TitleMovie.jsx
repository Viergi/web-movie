export default function TitleMovie({ releaseDate, title, genres }) {
  return (
    <>
      <h1 className="text-sm md:text-lg lg:text-2xl font-bold text-white text-shadow">
        {releaseDate.slice(0, 4)}
      </h1>
      <h1 className="text-xl md:text-2xl lg:text-[2.3rem] font-bold text-white text-shadow">
        {title}
      </h1>
      <h1 className="text-sm md:text-lg lg:text-2xl font-bold text-white text-shadow">
        {genres.map((genre, index, row) => {
          if (index + 1 === row.length) {
            return genre.name;
          }
          return `${genre.name}, `;
        })}
      </h1>
    </>
  );
}
