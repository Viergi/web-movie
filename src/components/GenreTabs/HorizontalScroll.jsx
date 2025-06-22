"use client";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";

export default function HorizontalScroll({ children }) {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollKey = "horizontalScrollPosition"; // Key untuk localStorage

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    // Kembalikan posisi scroll dari sessionStorage saat komponen mount
    if (scrollContainer) {
      const savedPosition = sessionStorage.getItem(scrollKey);
      if (savedPosition) {
        scrollContainer.scrollLeft = parseInt(savedPosition, 10);
      }
    }

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainer.offsetLeft);
      setScrollLeft(scrollContainer.scrollLeft);
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 1; // Sesuaikan kecepatan scroll
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    const handleScroll = () => {
      // Simpan posisi scroll ke sessionStorage setiap kali ada perubahan
      sessionStorage.setItem(scrollKey, scrollContainer.scrollLeft.toString());
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("mousedown", handleMouseDown);
      scrollContainer.addEventListener("mouseleave", handleMouseLeave);
      scrollContainer.addEventListener("mouseup", handleMouseUp);
      scrollContainer.addEventListener("mousemove", handleMouseMove);
      scrollContainer.addEventListener("scroll", handleScroll); // Tambahkan event listener scroll

      return () => {
        scrollContainer.removeEventListener("mousedown", handleMouseDown);
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
        scrollContainer.removeEventListener("mouseup", handleMouseUp);
        scrollContainer.removeEventListener("mousemove", handleMouseMove);
        scrollContainer.removeEventListener("scroll", handleScroll); // Hapus event listener scroll
      };
    }
  }, [isDragging, startX, scrollLeft]);

  return (
    // <div
    //   ref={scrollContainerRef}
    //   className="overflow-x-auto whitespace-nowrap cursor-pointer select-none scroll-genres"
    // >
    //   <div className="flex items-center space-x-4 p-4 pt-6 md:pt-10 ">
    //     {children}
    //   </div>
    // </div>
    <div
      ref={scrollContainerRef}
      className="flex items-center space-x-4 p-4 pt-6 md:pt-10 lg:px-[5%] overflow-x-auto whitespace-nowrap cursor-pointer select-none scroll-genres"
    >
      {children}
    </div>
  );
}

// export default function HorizontalScroll({ genres, active }) {
//   const scrollRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

//   // Load posisi scroll dari LocalStorage saat pertama kali render
//   useEffect(() => {
//     const savedScrollPos = localStorage.getItem("genreScrollPosition");
//     if (scrollRef.current && savedScrollPos) {
//       scrollRef.current.scrollLeft = parseInt(savedScrollPos, 10);
//     }
//   }, []);

//   // Handle mouse drag scroll
//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setStartX(e.pageX - scrollRef.current.offsetLeft);
//     setScrollLeft(scrollRef.current.scrollLeft);
//     if (scrollRef.current) {
//       localStorage.setItem("genreScrollPosition", scrollRef.current.scrollLeft);
//     }
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     const x = e.pageX - scrollRef.current.offsetLeft;
//     const walk = (x - startX) * 1; // Faktor geser
//     scrollRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const handleMouseUp = () => setIsDragging(false);
//   const handleMouseLeave = () => setIsDragging(false);
//   return (
//     // <div
//     //   ref={scrollContainerRef}
//     //   className="overflow-x-auto whitespace-nowrap cursor-pointer select-none scroll-genres"
//     // >
//     //   <div className="flex items-center space-x-4 p-4 pt-6 md:pt-10 ">
//     //     {children}
//     //   </div>
//     // </div>
//     <div
//       ref={scrollRef}
//       className="flex items-center space-x-4 p-4 pt-6 md:pt-10 lg:px-[5%] overflow-x-auto whitespace-nowrap cursor-pointer select-none scroll-genres"
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       onMouseLeave={handleMouseLeave}
//     >
//       {genres.map((item, index) => {
//         return (
//           <Link
//             draggable={false}
//             scroll={true}
//             key={index}
//             href={`/genres/${item.name}?page=1`}
//             className={` text-sm text-nowrap  px-3 py-2 rounded-lg duration-300 transition-all text-white ${
//               item.name == active
//                 ? "bg-accent "
//                 : "bg-background-third hover:bg-accent-hover "
//             }`}
//             onClick={() => handleGenreClick(item.name)}
//           >
//             {item.name}
//           </Link>
//         );
//       })}
//     </div>
//   );
// }
