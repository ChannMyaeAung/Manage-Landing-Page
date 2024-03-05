import React, { useState, useEffect } from "react";
import MobileToggle from "./mobile/MobileToggle";
import MobileMenu from "./mobile/MobileMenu";
import NavLinks from "./NavLinks";
import Overlay from "./mobile/Overlay";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      let width = window.innerWidth;
      if (width >= 768) {
        setIsNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(isNavOpen);

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className="flex items-center justify-between px-4 py-8 overflow-hidden"
    >
      <figure className="flex-shrink">
        <a href="/" aria-label="Home">
          <img src="/logo.svg" alt="logo" />
        </a>
      </figure>

      {/* Mobile Menu Toggle */}
      <MobileToggle isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      {/* Mobile Menu when nav is opened */}
      <MobileMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      {/* Background overlay when nav modal is open */}
      <Overlay isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      {/* For Desktop screens =< 768px */}
      <NavLinks />
    </nav>
  );
};

export default Header;
