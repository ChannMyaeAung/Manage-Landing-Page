import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import { motion } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    {
      id: 1,
      href: "pricing",
      title: "Pricing",
    },
    {
      id: 2,
      href: "product",
      title: "Product",
    },
    {
      id: 3,
      href: "aboutus",
      title: "About Us",
    },
    {
      id: 4,
      href: "careers",
      title: "Careers",
    },
    {
      id: 5,
      href: "community",
      title: "Community",
    },
  ];

  return (
    <nav className="flex items-center justify-between px-4 py-8 overflow-hidden">
      <figure>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </figure>

      {/* Mobile Menu Toggle */}
      <motion.div className="z-[999] " animate={open ? "open" : "closed"}>
        <button className="block md:hidden" onClick={() => setOpen((s) => !s)}>
          <svg width="23" height="23" viewBox="0 0 23 23">
            <motion.path
              strokeWidth="3"
              stroke="black"
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
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
            />
            <motion.path
              strokeWidth="3"
              stroke="black"
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>
        {/* Nav Links Modal on mobile screens */}
        <motion.div
          animate={open ? "open" : "closed"}
          className="fixed left-0 right-0 w-11/12 max-w-xs mx-auto overflow-hidden bg-white rounded-md shadow-lg top-28 md:hidden"
          variants={{
            closed: { opacity: 0, y: -200, pointerEvents: "none" },
            open: { opacity: 1, y: 0, pointerEvents: "auto" },
            transition: {
              duration: 0.5,
            },
          }}
        >
          <ul className="flex flex-col items-center gap-10 px-8 py-6 font-bold rounded-sm">
            {navLinks.map((link) => {
              return (
                <li key={link.id} className="cursor-pointer">
                  <a href={`#${link.href}`}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </motion.div>

      {open && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 md:hidden" />
      )}
    </nav>
  );
};

export default Header;
