import { convertUSD } from "@/libs/convert";

export default function AboutMovie({
  overview,
  releaseDate,
  productionCountries,
  productionCompanies,
  budget,
}) {
  return (
    <div className="flex flex-col md:flex-row pt-10 ">
      <div className="mb-10 md:mb-0 md:w-1/2">
        <h1 className="pb-5 text-2xl font-bold text-white text-shadow">
          About Movie
        </h1>
        <p className=" md:pr-7 text-white text-justify text-sm h-56 overflow-auto scroll text-shadow">
          {overview}
        </p>
      </div>
      <div className="text-white md:w-1/2 h-full ">
        <h1 className="pb-5 text-2xl font-bold text-white text-shadow">
          Movie Details
        </h1>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex flex-col lg:flex-row ">
            <h1 className="lg:w-1/2 flex gap-1 lg:gap-0 lg:justify-between">
              Release date
              <span>: &nbsp;</span>
            </h1>
            <p className="lg:w-1/2">
              {releaseDate ? releaseDate : "Not Known"}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <h1 className="lg:w-1/2 flex gap-1 lg:gap-0 lg:justify-between ">
              Production Countries <span>: &nbsp;</span>
            </h1>
            <p className="lg:w-1/2">
              {productionCountries[0] == null
                ? "Not Known"
                : // productionCountries[0].name
                  productionCountries.map((country, index, row) => {
                    if (index + 1 === row.length) {
                      return country.name;
                    }
                    return `${country.name}, `;
                  })}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <h1 className="lg:w-1/2 flex gap-1 lg:gap-0 lg:justify-between">
              Production Companies <span>: &nbsp;</span>
            </h1>
            <p className="lg:w-1/2">
              {productionCompanies[0] == null
                ? "Not Known"
                : productionCompanies.map((company, index, row) => {
                    if (index + 1 === row.length) {
                      return company.name;
                    }
                    return `${company.name}, `;
                  })}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <h1 className="lg:w-1/2 flex gap-1 lg:gap-0 lg:justify-between">
              Budget <span>: &nbsp;</span>
            </h1>
            <p className="lg:w-1/2">
              {budget == 0 ? "Not Known" : convertUSD(budget)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
