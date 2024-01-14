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

export const getMovieGenres = async () => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/genre/movie/list`,
    options
  );
  const data = await response.json();

  return data.genres;
};

export const getGenre = (genreID, genres) => {
  // console.log(genres);
  let genre = [];

  genreID.map((item1) => {
    genres.map((item2) => {
      if (item1 == item2.id) {
        genre.push(item2.name);
      }
    });
  });

  return genre;
};
