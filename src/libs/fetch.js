export const getMovieResponse = async (resource, query) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`,
    options
  );
  const data = await response.json();
  return data;
};
