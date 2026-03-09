import React from "react";

export const ISAHero = () => {
  return (
    <div>
      <h1 className="font-medium text-[29.75px] leading-none pt-1">
        Week 1 - HTML & CSS Fundamentals
      </h1>
      <div className="border border-black/20 mt-10.25 rounded-md p-8.5">
        <div className="flex flex-col gap-6.25">
          <h2 className="font-medium text-[29.75px] leading-none">
            Introduction to HTML and CSS
          </h2>
          <div className="flex gap-2.5 items-center">
            <p className="text-[11.75px] mr-0.5">
              <span className="text-black/60">by </span>Bishal Khadka
            </p>
            <button className="bg-primary/80 text-white rounded-sm h-[11.75px] flex items-center justify-center text-[7px] px-1 py-2 tracking-wide">
              Module Leader
            </button>
            <p className="text-black/60 text-[11.75px]">Computer Science</p>
            <ul className="list-disc ml-4 text-[11.75px]">
              <li className="text-black/60 tracking-tight">Level 4</li>
            </ul>
          </div>
          <div className="flex gap-2 justify-start">
            <div className="px-2.5 py-1 bg-gray-50 border border-black/10 rounded-lg text-[11px] text-black/80">
              HTML
            </div>
            <div className="px-2.5 py-1 bg-gray-50 border border-black/10 rounded-lg text-[11px] text-black/80">
              CSS
            </div>
          </div>
          <p className="leading-7.5 text-black/80 text-[16px]">
            A comprehensive guide to database design principles and
            normalization techniques. This resource covers the complete database
            design process from requirements analysis to implementation. Learn
            about entity-relationship modeling, functional dependencies, and all
            normal forms.
          </p>
        </div>
      </div>
    </div>
  );
};
