export const convertUSD = (number) => {
  return new Intl.NumberFormat("un-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};
