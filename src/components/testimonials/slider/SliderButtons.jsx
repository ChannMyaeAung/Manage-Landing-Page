import React from "react";

export default function SliderButtons({ setIndex }) {
  return (
    <>
      <button
        className="absolute p-1 text-white rounded-full md:left-3 left-1 opacity-40 top-1/2 bg-slate-900 -z-1"
        onClick={() => setIndex((prev) => prev - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className="absolute p-1 text-white rounded-full right-1 md:right-3 opacity-40 top-1/2 bg-slate-900 -z-1"
        onClick={() => setIndex((prev) => prev + 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </>
  );
}
