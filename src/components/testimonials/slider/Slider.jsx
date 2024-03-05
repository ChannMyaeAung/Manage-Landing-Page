import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation";
import SliderButtons from "./SliderButtons";
import SliderItems from "./SliderItems";

export default function Slider({ customers, index, setIndex }) {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      className="relative flex flex-col gap-16 mt-16 h-80 "
    >
      {customers.map((customer, customerIndex) => {
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
          <SliderItems
            key={customer.id}
            customer={customer}
            position={position}
          />
        );
      })}

      <SliderButtons setIndex={setIndex} />
    </motion.div>
  );
}
