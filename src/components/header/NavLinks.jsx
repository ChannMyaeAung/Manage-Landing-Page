import React from "react";
import { navLinks } from "../../data";

export default function NavLinks() {
  return (
    <>
      <div
        aria-label="Menu Links on Desktop screens"
        className="items-center justify-center flex-1 hidden md:flex"
      >
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
    </>
  );
}
