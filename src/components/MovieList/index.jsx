import Card from "./Card";

export default function MovieList({ api, title }) {
  return (
    <div className="px-4 relative z-10">
      <h1 className="font-bold py-2 pb-4 text-2xl text-white">
        {title ? title : null}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-8 gap-x-1 md:px-8 lg:px-10 xl:px-24 gap-y-4 gap-1">
        {api.map((data) => {
          return (
            <div
              className="flex justify-center h-72 lg:h-90 xl:h-96"
              key={data.id}
            >
              <Card
                title={data.title}
                id={data.id}
                imageURL={data.poster_path}
                releaseDate={data.release_date}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
