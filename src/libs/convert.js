export const convertUSD = (number) => {
  return new Intl.NumberFormat("un-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
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
