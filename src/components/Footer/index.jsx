import Link from "next/link";

const contents = [
  {
    title: "Home",
    links: [
      { name: "Categories", path: "/" },
      { name: "Devices", path: "/" },
      { name: "Pricing", path: "/" },
      { name: "FAQ", path: "/" },
    ],
  },
  {
    title: "Movies",
    links: [
      { name: "Genres", path: "/genres" },
      { name: "Trending", path: "/trending" },
      { name: "Now Playing", path: "/now-playing?page=1" },
      { name: "Popular", path: "/popular?page=1" },
    ],
  },
  // {
  //   title: "Shows",
  //   links: [
  //     { name: "Genres", path: "/" },
  //     { name: "Trending", path: "/" },
  //     { name: "New Release", path: "/" },
  //     { name: "Popular", path: "/" },
  //   ],
  // },
  {
    title: "Support",
    links: [{ name: "Contact Us", path: "/" }],
  },
  {
    title: "Subscription",
    links: [
      { name: "Plans", path: "/" },
      { name: "Features", path: "/" },
    ],
  },
  {
    title: "Connect with us",
    links: [
      { name: "Facebook", path: "/" },
      { name: "X", path: "/" },
      { name: "Linkedin", path: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex justify-center flex-col items-center text-white w-full bg-background-third">
      <div className="w-full grid grid-cols-2 grid-rows-3 gap-2 gap-y-4 px-3 pt-8 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-5 lg:grid-rows-none lg:pb-4 xl:w-4/5 ">
        {contents.map((item, index) => {
          return (
            <div key={index} className="ml-2 md:ml-4">
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
                        href={link.path}
                        className="h-full inline-flex text-xs md:text-sm items-center hover:text-text-primary"
                      >
                        {link.name}
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
          &copy; 2025 FilmVista, All Right Reserved
        </span>
        <div className="text-xs xl:text-base grid grid-cols-3 w-full text-center md:w-2/5">
          <span>
            <Link href={""} className="hover:text-text-primary">
              Term of use
            </Link>
          </span>
          <span className="border-x border-text-secondary">
            <Link href={""} className="hover:text-text-primary">
              Privacy Policy
            </Link>
          </span>
          <span>
            <Link href={""} className="hover:text-text-primary">
              Cookie Policy
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
