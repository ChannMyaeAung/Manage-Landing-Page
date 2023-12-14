import React, { useEffect, useState } from "react";
import { testimonials } from "../data";

const Testimonials = () => {
  const [customers, setCustomers] = useState(testimonials);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = customers.length - 1;
    if (index > lastIndex) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(lastIndex);
    }
  }, [customers, index]);

  return (
    <section className="px-4 mt-10 overflow-hidden">
      <h1 className="my-6 text-3xl font-bold text-center text-DarkBlue">
        What they've said
      </h1>

      <div className="relative flex flex-col gap-16 mt-16 h-80">
        {customers.map((customer, customerIndex) => {
          const { id, name, img, comment } = customer;

          /* All remaining slides are positioned at 100%X */
          let position = "nextSlide";

          /* except for the one that matches the index */
          if (customerIndex === index) {
            position = "activeSlide";
          }

          /* when on the first article, the last item is positioned to -100%X to create infinite scrolling transition */
          /* as the index increases, all the previous slides are moved to -100%X. */
          if (
            customerIndex === index - 1 ||
            (index === 0 && customerIndex === customers.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article
              key={id}
              data-position={position}
              className="absolute flex items-center w-full h-full text-center transition-all rounded-sm opacity-0 bg-DarkGrayishBlue bg-opacity-20 "
            >
              <figure className="absolute inset-0 w-20 h-20 mx-auto rounded-full -top-10">
                <img
                  src={img}
                  alt={`${name}'s picture`}
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="py-4">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-base leading-7 text-DarkGrayishBlue">
                  "{comment}"
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Slider Pagination  */}
      <div className="flex items-center justify-center gap-1 my-8">
        {customers.map((_, sliderIndex) => (
          <button
            data-button="pagination-btn"
            key={sliderIndex}
            onClick={() => setIndex(sliderIndex)}
            aria-label={`View Image ${sliderIndex + 1}`}
            className={`relative w-3 h-3 border-2 rounded-full cursor-pointer border-BrightRed ${
              sliderIndex === index ? "bg-BrightRed" : null
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
