import DetailMovie from "@/components/DetailMovie";

export default async function Page({ params }) {
  const { movieId } = params;
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/movie/${movieId}?language=en-US`,
    options
  );
  const data = await response.json();

  return (
    <div className="h-screen">
      <DetailMovie data={data} />
    </div>
  );
}
