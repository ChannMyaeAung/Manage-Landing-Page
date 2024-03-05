import React from "react";
import { footerLinks } from "../../../data";

export default function UsefulLinks() {
  /* slice method to slice the links to position them as the design says. */
  const leftLinks = footerLinks.slice(0, 4);
  const rightLinks = footerLinks.slice(4);

  return (
    <div className="flex justify-around w-full gap-12 font-light md:gap-16 md:justify-around">
      <ul
        className="flex flex-col gap-6 text-VeryLightGray"
        role="navigation"
        aria-label="Footer Left Links"
      >
        {leftLinks.map((link) => (
          <li
            key={link.id}
            className="transition-all xl:text-lg hover:text-BrightRed focus:text-BrightRed"
          >
            <a href={`#${link.href}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <ul
        className="flex flex-col gap-6 text-VeryLightGray"
        role="navigation"
        aria-label="Footer Right Links"
      >
        {rightLinks.map((link) => (
          <li
            key={link.id}
            className="transition-all xl:text-lg hover:text-BrightRed focus:text-BrightRed"
          >
            <a href={`#${link.href}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
