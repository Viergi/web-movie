import Link from "next/link";

const contents = [
  {
    title: "Home",
    links: ["Categories", "Devices", "Pricing", "FAQ"],
  },
  {
    title: "Movies",
    links: ["Genres", "Trending", "New Release", "Popular"],
  },
  {
    title: "Shows",
    links: ["Genres", "Trending", "New Release", "Popular"],
  },
  {
    title: "Support",
    links: ["Contact Us"],
  },
  {
    title: "Subscription",
    links: ["Plans", "Features"],
  },
  {
    title: "Connect with us",
    links: ["Facebook", "X", "Linkedin"],
  },
];

export default function Footer() {
  return (
    <footer className="flex justify-center flex-col items-center text-white w-full bg-background-primary">
      <div className="w-full grid grid-cols-2 grid-rows-3 gap-2 gap-y-4 px-3 pt-8 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-none lg:pb-4 xl:w-4/5 ">
        {contents.map((item, index) => {
          return (
            <div key={index}>
              <h3 className="text-text-primary text-lg text-nowrap">
                {item.title}
              </h3>
              <ul>
                {item.links.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className="text-text-secondary text-sm xl:text-base h-[30px] py-2 pl-0 "
                    >
                      <Link
                        href={""}
                        className="h-full inline-flex text-xs md:text-sm items-center hover:text-text-primary"
                      >
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="w-full px-3 flex flex-col gap-2 md:flex-row md:justify-between p-2 xl:w-4/5 xl:py-8 text-text-secondary">
        <span className="text-xs xl:text-base">
          @2025 FilmVista, All Right Reserved
        </span>
        <div className="text-xs xl:text-base grid grid-cols-3 w-full text-center md:w-2/5">
          <span>
            <Link href={""}>Term of use</Link>
          </span>
          <span className="border-x border-text-secondary">
            <Link href={""}>Privacy Policy</Link>
          </span>
          <span>
            <Link href={""}>Cookie Policy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
