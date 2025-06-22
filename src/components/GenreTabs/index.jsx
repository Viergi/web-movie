import Link from "next/link";
import HorizontalScroll from "./HorizontalScroll";

export default function GenreTabs({ genres, active }) {
  return (
    <HorizontalScroll>
      {genres.map((item, index) => {
        return (
          <Link
            draggable={false}
            scroll={true}
            key={index}
            href={`/genres/${item.name}?page=1`}
            className={` text-sm text-nowrap  px-3 py-2 xl:px-6 xl:py-4 xl:text-xl rounded-lg duration-300 transition-all text-white ${
              item.name == active
                ? "bg-accent "
                : "bg-background-third hover:bg-accent-hover "
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </HorizontalScroll>
    // <HorizontalScroll genres={genres} active={active}>
    //   {genres.map((item, index) => {
    //     return (
    //       <Link
    //         draggable={false}
    //         scroll={true}
    //         key={index}
    //         href={`/genres/${item.name}?page=1`}
    //         className={` text-sm text-nowrap  px-3 py-2 rounded-lg duration-300 transition-all text-white ${
    //           item.name == active
    //             ? "bg-accent "
    //             : "bg-background-third hover:bg-accent-hover "
    //         }`}
    //       >
    //         {item.name}
    //       </Link>
    //     );
    //   })}
    // </HorizontalScroll>
  );
}
