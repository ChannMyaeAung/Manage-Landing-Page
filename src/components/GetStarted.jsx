import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animation";

const GetStarted = () => {
  return (
    <section className="w-full mt-10" aria-labelledby="get-started section">
      <div className="flex flex-col items-center justify-center w-full gap-6 py-12 md:justify-around md:flex-row h-96 md:h-auto bg-BrightRed">
        <motion.h1
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          id="get-started-heading"
          className="text-3xl font-semibold leading-10 text-center md:text-start text-VeryLightGray"
        >
          {" "}
          Simplify how <br className="block md:hidden" /> your team{" "}
          <br className="hidden md:block" /> works{" "}
          <br className="block md:hidden" /> today.
        </motion.h1>

        <motion.button
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="cta__button_reverse"
          aria-label="Get Started"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default GetStarted;
