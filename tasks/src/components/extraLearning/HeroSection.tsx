import React from "react";

export const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-14.25 px-24.25 ">
      <h1 className="text-[38.75px] tracking-wider font-extralight">
        Extra
        <span className="text-[42px] text-primary font-semibold">
          {" "}
          Learning
        </span>
      </h1>
      <div className="flex flex-col gap-2.5 mt-7.75 justify-center items-center">
        <p className="text-black/60 font-medium text-[22px] tracking-wider">
          Discover additional resources and student contributions beyond your
        </p>
        <p className="text-black/60 font-medium text-[22px] tracking-wider">
          curriculum
        </p>
      </div>
    </div>
  );
};
