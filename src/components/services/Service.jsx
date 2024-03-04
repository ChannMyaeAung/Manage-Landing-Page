import React from "react";

export default function Service({ service }) {
  return (
    <article
      key={service.id}
      aria-labelledby={service.title}
      className="relative grid grid-cols-[min-content, 1fr] md:grid-cols-[62px,1fr] px-4 w-full "
    >
      <h1
        id={`${service.title}'s heading`}
        aria-labelledby={`${service.title}'s heading`}
        className="py-1.5 flex md:grid md:grid-cols-[50px,1fr] col-span-2 gap-3 items-center my-4 md:my-0 before:content-['0'] before:absolute before:bg-VeryPaleRed before:w-full  before:-z-10 before:py-1.5 before:rounded-l-full md:before:hidden"
      >
        <span className=" text-VeryLightGray md:col-[1/2] font-bold text-sm py-1.5 rounded-full px-4 bg-BrightRed xl:px-1.5 xl:text-xl text-center">
          0{service.id}
        </span>
        <span className="text-sm md:col-[2/-1] font-extrabold tracking-tight text-DarkBlue md:text-lg xl:text-2xl">
          {service.title}
        </span>
      </h1>
      <p className="text-base xl:text-lg col-[2/-1] text-DarkGrayishBlue">
        {service.desc}
      </p>
    </article>
  );
}
