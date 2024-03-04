import React from "react";
import footerLogo from "../../../../public/logo2.svg";
import { footerSocialMedia } from "../../../data";

export default function SocialLinks() {
  return (
    <div className="flex flex-col w-full gap-10 lg:flex-col-reverse">
      <ul
        role="navigation"
        aria-label="Footer Social Media Links"
        className="flex items-center justify-center w-full gap-8 "
      >
        {footerSocialMedia.map((item) => (
          <li key={item.id} className="pointer-event-auto">
            <a
              href={`#`}
              data-icon="social-media-icon"
              className="hover:fill-BrightRed"
              aria-label={item.alt}
            >
              {/* custom hover effect on index.css */}
              {item.icon}
            </a>
          </li>
        ))}
      </ul>

      <figure id="logo" aria-labelledby="logo" className="self-center my-6">
        <img src={footerLogo} alt="logo" />
      </figure>
    </div>
  );
}
