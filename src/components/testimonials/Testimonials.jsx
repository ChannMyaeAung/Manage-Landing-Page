import React, { useEffect, useState } from "react";
import { testimonials } from "../../data";
import { motion, useDragControls } from "framer-motion";
import { fadeIn } from "../../animation";
import Slider from "./slider/Slider";
import SliderPagination from "./slider/SliderPagination";

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
      <Slider customers={customers} index={index} setIndex={setIndex} />

      {/* Slider Pagination  */}

      <SliderPagination
        customers={customers}
        index={index}
        setIndex={setIndex}
      />
      {/* CTA Button  */}
      <div className="flex items-center justify-center md:mt-8">
        <button className="mb-3 cta__button" aria-label="Get Started">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
