import React from "react";
import { motion } from "framer-motion";
export default function MobileToggle({ isNavOpen, setIsNavOpen }) {
  return (
    <motion.div
      aria-label="mobile menu toggle"
      className="z-[999] "
      animate={isNavOpen ? "open" : "closed"}
    >
      <button
        className="block md:hidden"
        onClick={() => setIsNavOpen((s) => !s)}
        aria-label={isNavOpen ? "Close Menu" : "Open Menu"}
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
            initial={false}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            initial={false}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
            initial={false}
          />
        </svg>
      </button>
    </motion.div>
  );
}
