import React, { useEffect, useRef, useState, Fragment } from "react";
import logo from "../assets/images/logo.svg";
import { motion } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navMenuRef = useRef(null);

  /* Responsible for closing the modal when clicking outside of it on small screens */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navMenuRef.current && !navMenuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [open]);

  const toggleNavAndModal = (e) => {
    e.stopPropagation(); //To prevent conflicting click by the document click when the toggle button is clicked.
    setOpen((s) => !s);
  };

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
      <figure className="flex-shrink">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </figure>

      {/* For mobile screens below 768px */}
      <Fragment>
        {/* Mobile Menu Toggle */}
        <motion.div className="z-[999] " animate={open ? "open" : "closed"}>
          <button className="block md:hidden" onClick={toggleNavAndModal}>
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
          <></>
          <motion.div
            ref={navMenuRef}
            animate={open ? "open" : "closed"}
            className="fixed left-0 right-0 w-11/12 max-w-xs mx-auto overflow-hidden bg-white rounded-md shadow-lg top-24 md:hidden"
            variants={{
              closed: { opacity: 0, x: 300, pointerEvents: "none" },
              open: { opacity: 1, x: 0, pointerEvents: "auto" },
            }}
            initial="closed"
            transition={{ duration: 0.3 }}
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
        </motion.div>

        {/* Background overlay when nav modal is open */}
        {open && (
          <div
            id="overlay"
            className="fixed top-0 left-0 w-full h-full bg-black opacity-20 md:hidden"
          />
        )}
      </Fragment>

      {/* For Desktop screens =< 768px */}
      <Fragment>
        <div className="items-center justify-center flex-1 hidden md:flex">
          <ul className="flex items-center gap-3 text-sm lg:text-base lg:gap-6 xl:text-lg 2xl:text-xl">
            {navLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className="font-semibold transition-all cursor-pointer text-DarkBlue hover:text-DarkGrayishBlue focus:text-DarkGrayishBlue"
                >
                  <a href={`#${link.href}`}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <button className="hidden cta__button md:block">Get Started</button>
      </Fragment>
    </nav>
  );
};

export default Header;
