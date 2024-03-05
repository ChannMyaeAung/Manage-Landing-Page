import React from "react";
import { motion } from "framer-motion";
import { navLinks } from "../../../data";

/* Responsible for rendering nav links in mobile menu modal */

const variants = {
  open: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.3,
      stiffness: 400,
      damping: 40,
    },
  },
  closed: {
    opacity: 0,
    x: "-100%",
  },
};

export default function MobileMenu({ isNavOpen, setIsNavOpen }) {
  return (
    <motion.div
      variants={variants}
      initial={false}
      animate={isNavOpen ? "open" : "closed"}
      className="fixed inset-0 z-50 w-11/12 mx-auto bg-white rounded-md shadow-lg h-fit max-h-96 top-24 md:hidden"
      aria-label="Menu Links on Mobile screens"
      aria-expanded={isNavOpen}
      aria-hidden={isNavOpen}
    >
      <ul className="flex flex-col items-center py-12 font-bold rounded-sm gap-7 text-DarkBlue">
        {navLinks.map((link) => {
          return (
            <li
              key={link.id}
              className="transition-all cursor-pointer hover:text-DarkGrayishBlue focus:text-DarkGrayishBlue"
            >
              <a href={`#${link.href}`}>{link.title}</a>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}
