import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation";
import Service from "./Service";

const services = [
  {
    id: 1,
    title: "Track company-wide progress",
    desc: `See how your day-to-day tasks fit into the wider vision. Go from 
      tracking progress at the milestone level all the way done to the 
      smallest of details. Never lose sight of the bigger picture again.`,
  },
  {
    id: 2,
    title: "Advanced built-in reports",
    desc: `Set internal delivery estimates and track progress toward company 
          goals. Our customisable dashboard helps you build out the reports 
          you need to keep key stakeholders informed.`,
  },
  {
    id: 3,
    title: "Everything you need in one place",
    desc: `Stop jumping from one service to another to communicate, store files, 
          track tasks and share documents. Manage offers an all-in-one team 
          productivity solution.`,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      aria-labelledby="services section"
      className="flex flex-col gap-10 mt-16 md:flex-row"
    >
      {/* Service Info */}
      <motion.article
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-col items-center justify-center gap-3 px-4 text-center md:items-start md:justify-start md:text-start"
      >
        <h1
          className="text-2xl font-bold"
          id="services-heading"
          aria-labelledby="services-heading"
        >
          What's different <br className="block md:hidden" /> about Manage?
        </h1>
        <p
          aria-describedby="services description"
          className="w-10/12 text-base text-DarkGrayishBlue"
        >
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital teams.
        </p>
      </motion.article>

      {/* Services */}
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-col gap-6"
      >
        {services.map((service) => {
          return <Service key={service.id} service={service} />;
        })}
      </motion.div>
    </section>
  );
};

export default Services;
