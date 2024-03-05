import React from "react";

export default function SliderPagination({ customers, index, setIndex }) {
  return (
    <div
      className="flex items-center justify-center gap-1 my-8"
      role="group"
      aria-label="Testimonials Pagination"
    >
      {customers.map((_, sliderIndex) => (
        <button
          data-button="pagination-btn"
          key={sliderIndex}
          onClick={() => setIndex(sliderIndex)}
          aria-label={`View Image ${sliderIndex + 1}`}
          aria-current={sliderIndex === index ? "true" : "false"}
          className={`relative w-3 h-3 border-2 rounded-full cursor-pointer border-BrightRed ${
            sliderIndex === index ? "bg-BrightRed" : null
          }`}
        ></button>
      ))}
    </div>
  );
}
