import React, { useState } from "react";
import SocialLinks from "./footerLinks/SocialLinks";
import UsefulLinks from "./footerLinks/UsefulLinks";

/* Notes: Footer data are in data.js file */

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailInput = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
    if (!isValidEmail) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  return (
    <section className="px-4 py-12 bg-VeryDarkBlue text-VeryLightGray">
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row-reverse lg:items-start">
        {/* Subscription */}
        <div
          id="subscription"
          className="flex items-start justify-center w-full gap-3 lg:justify-center"
        >
          <div className="flex flex-col flex-1 flex-shrink-0 w-full gap-3 ">
            <input
              type="email"
              placeholder="Updates in your inbox…"
              id="subscription"
              name="subscription"
              onChange={handleEmailInput}
              className="flex-shrink-0 w-full p-3 text-sm border rounded-full lg:text-base placeholder:text-DarkGrayishBlue text-BrightRed"
            />
            {emailError && (
              <p
                id="email-error"
                role="alert"
                aria-description="email error alert"
                className="mt-1 text-xs text-BrightRed"
              >
                {emailError}
              </p>
            )}
          </div>
          <button
            aria-label="subscription button"
            className="flex-shrink shadow-none hover:shadow-none cta__button"
          >
            Go
          </button>
        </div>
        {/* Footer useful links */}
        <UsefulLinks />
        {/* Social Media and Logo */}
        <SocialLinks />
      </div>
      <div className="flex lg:items-end lg:justify-end lg:content-end">
        <p className="text-sm text-gray-500 lg:text-base xl:text-lg lg:self-end ">
          Copyright 2020. All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
