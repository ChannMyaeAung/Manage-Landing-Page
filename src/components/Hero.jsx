import React from "react";
import heroImage from "../assets/images/illustration-intro.svg";

const Hero = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-section"
      className="flex flex-col items-center justify-center gap-3 px-4 md:flex-row-reverse md:justify-between"
    >
      {/* Hero Image */}
      <figure className="flex items-end flex-1">
        <img
          src={heroImage}
          className="object-cover w-full h-full"
          alt="Intro illustration image showing general statistics"
        />
      </figure>

      {/* Hero Description Article */}
      <article
        aria-labelledby="hero article"
        className="flex flex-col items-center justify-center flex-1 gap-3 md:items-start"
      >
        <h1
          id="hero-heading"
          className="text-3xl font-bold leading-10 md:text-4xl lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-snug text-VeryDarkBlue"
        >
          Bring everyone together to build better products.
        </h1>
        <p
          aria-describedby="hero-description"
          className="mb-4 text-base font-light text-DarkGrayishBlue xl:text-lg 2xl:text-xl"
        >
          Manage makes it simple for software teams to plan day to day tasks
          while keeping the larger team goals in view.
        </p>
        <button className="cta__button" aria-label="Get Started">
          Get Started
        </button>
      </article>
    </section>
  );
};

export default Hero;
