import React, { useState, Fragment } from "react";
import logo from "../../assets/images/logo.svg";
import { motion } from "framer-motion";
import MobileToggle from "./mobile/MobileToggle";
import { navLinks } from "../../data";
import MobileMenu from "./mobile/MobileMenu";
import NavLinks from "./NavLinks";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className="flex items-center justify-between px-4 py-8 overflow-hidden"
    >
      <figure className="flex-shrink">
        <a href="/" aria-label="Home">
          <img src={logo} alt="logo" />
        </a>
      </figure>

      {/* Mobile Menu Toggle */}
      <MobileToggle isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      <MobileMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      {/* Background overlay when nav modal is open */}
      {isNavOpen && (
        <div
          id="overlay"
          aria-expanded={isNavOpen}
          aria-hidden={isNavOpen ? true : false}
          className="fixed top-0 left-0 w-full h-full bg-black opacity-20 md:hidden"
          onClick={() => setIsNavOpen(false)}
        />
      )}

      {/* For Desktop screens =< 768px */}
      <NavLinks />
    </nav>
  );
};

export default Header;
