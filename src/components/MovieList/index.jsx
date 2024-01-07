import Card from "./Card";

export default function MovieList({ api, title }) {
  return (
    <div className="px-4 relative z-10">
      <h1 className="font-bold py-2 text-lg">{title ? title : null}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-8 gap-x-1 px-1 gap-y-4 gap-1">
        {api.map((data) => {
          return (
            <div className="flex justify-center items-center" key={data.id}>
              <Card
                title={data.title}
                id={data.id}
                imageURL={data.poster_path}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
