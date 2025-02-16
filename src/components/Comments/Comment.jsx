"use client";
import React, { useState } from "react";

export default function Comments({ comments }) {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <button
        className="p-2 text-white  text-md md:text-xl"
        onClick={() => {
          setDisplay((prev) => !prev);
        }}
      >
        Komentar {`(${comments.length})`}
      </button>
      <div
        className={`${
          display ? "h-60" : "h-0"
        } text-white w-full mt-2 block transition-all duration-300  overflow-hidden`}
      >
        <div className="overflow-auto p-1 bg-slate-900 w-full flex flex-col gap-2 h-full comment-scroll">
          {comments.length < 1 ? (
            <div className="h-full w-full flex justify-center items-center">
              <h1 className="text-xs md:text-xl">Belum ada komentar...</h1>
            </div>
          ) : (
            comments.map((item, index) => {
              return (
                <div
                  key={index}
                  className="border border-gray-600 rounded-lg flex py-2 flex-col"
                >
                  <h1 className="text-md pl-3 mb-2">{item.username}</h1>
                  <p className="text-sm pl-3 italic">" {`${item.comment}`} "</p>
                  <p className="text-[0.5rem] text-right pr-4">
                    {item.createAt.toString().slice(4, 15)}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
