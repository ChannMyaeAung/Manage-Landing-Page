import React from "react";

export default function Overlay({ isNavOpen, setIsNavOpen }) {
  return (
    <>
      {isNavOpen && (
        <div
          id="overlay"
          aria-expanded={isNavOpen}
          aria-hidden={isNavOpen ? true : false}
          className="fixed top-0 left-0 w-full h-full bg-black opacity-20 md:hidden"
          onClick={() => setIsNavOpen(false)}
        />
      )}
    </>
  );
}
