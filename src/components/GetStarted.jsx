import React from "react";

const GetStarted = () => {
  return (
    <section className="w-full mt-10">
      <div className="flex flex-col items-center justify-center w-full gap-6 py-12 md:justify-around md:flex-row h-96 md:h-auto bg-BrightRed">
        <h1 className="text-3xl font-semibold leading-10 text-center md:text-start text-VeryLightGray">
          {" "}
          Simplify how <br className="block md:hidden" /> your team{" "}
          <br className="hidden md:block" /> works{" "}
          <br className="block md:hidden" /> today.
        </h1>

        <button className="cta__button_reverse ">Get Started</button>
      </div>
    </section>
  );
};

export default GetStarted;
