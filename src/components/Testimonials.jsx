import React, { useEffect, useState } from "react";
import { testimonials } from "../data";
import { motion, useDragControls } from "framer-motion";
import { fadeIn } from "../animation";

const Testimonials = () => {
  const [customers, setCustomers] = useState(testimonials);
  const [index, setIndex] = useState(0);
  const dragControls = useDragControls();

  useEffect(() => {
    const lastIndex = customers.length - 1;
    if (index > lastIndex) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(lastIndex);
    }
  }, [customers, index]);

  const handleDragEnd = (_, info) => {
    const slideWidth = window.innerWidth;
    const distance = info.offset.x;

    if (Math.abs(distance) > slideWidth / 3) {
      const newIndex = distance > 0 ? index - 1 : index + 1;
      setIndex(Math.max(0, Math.min(newIndex, testimonials.length - 1)));
    }
  };

  return (
    <section
      aria-labelledby="testimonials-section"
      className="px-4 mt-10 overflow-hidden"
    >
      <motion.h1
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        id="testimonials-heading"
        className="my-6 text-3xl font-bold text-center text-DarkBlue"
      >
        What they've said
      </motion.h1>

      {/* For mobile screens with paginations */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="relative flex flex-col gap-16 mt-16 h-80 md:hidden"
      >
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
      </motion.div>

      {/* For Desktop screens with slider */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        dragControls={dragControls}
        onDragEnd={handleDragEnd}
        aria-live="polite"
        style={{
          x: `-${(index * 100) / customers.length}%`,
        }}
        className="relative hidden px-6  gap-8 w-[150vw] 2xl:w-[100vw] my-16 h-80 md:flex"
      >
        {customers.map((customer, customerIndex) => {
          const { id, name, img, comment } = customer;

          return (
            <motion.article
              key={id}
              style={{
                x: `-${(index * 260) / customers.length}%`,
                width: `${customers.length * 100}vw`,
              }}
              className="relative flex items-center h-full text-center transition-all rounded-sm bg-DarkGrayishBlue bg-opacity-20"
            >
              <figure className="absolute inset-0 w-20 h-20 mx-auto rounded-full -top-10">
                <img
                  src={img}
                  alt={`${name}'s picture`}
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="py-4 md:p-2">
                <h2 className="my-6 text-lg font-semibold">{name}</h2>
                <p className="mt-3 text-base leading-7 text-DarkGrayishBlue">
                  "{comment}"
                </p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      {/* Slider Pagination  */}
      <div
        className="flex items-center justify-center gap-1 my-8 md:hidden"
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

      {/* CTA Button  */}
      <div className="flex items-center justify-center">
        <button className="mb-3 cta__button" aria-label="Get Started">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
