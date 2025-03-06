import Link from "next/link";

export default function GenreTabs({ genres, active }) {
  return (
    <div className="flex items-center w-full space-x-4 p-4 pt-6 md:pt-14 lg:pl-[5%] scroll-genres overflow-x-auto ">
      {genres.map((item, index) => {
        return (
          <Link
            draggable={false}
            scroll={true}
            key={index}
            href={`/genres/${item.name}?page=1`}
            className={` text-sm text-nowrap  px-3 py-2 rounded-lg duration-300 transition-all text-white ${
              item.name == active
                ? "bg-accent "
                : "bg-background-third hover:bg-accent-hover "
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
