import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";

export default async function Page({ params }) {
  const { keyword } = params;
  let decodedKeyword = decodeURI(keyword);

  const options = {
    headers: {
      accept: "application/json",
      Authorization: `${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/search/movie?query=${decodedKeyword}&language=en-US&include_adult=true`,
    options
  );
  const data = await response.json();

  if (data.results.length < 1) {
    return (
      <div className="p-4 bg-blue-400 flex justify-center items-center">
        <h1>{`${decodedKeyword} Tidak Ditemukan`}</h1>
      </div>
    );
  }
  return (
    <div className="p-4 bg-blue-400">
      <MovieList
        api={data.results}
        title={`Pencarian untuk ${decodedKeyword}`}
      />
    </div>
  );
}
