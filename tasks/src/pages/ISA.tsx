import React from "react";
import { Navbar } from "./Navbar";
import { WeekBtn } from "../components/resources/WeekBtn";
import { ISAHero } from "../components/home/ISAHero";

export const ISA = () => {
  return (
    <>
      <Navbar />
      <div className="pl-23 pr-16 flex w-screen pt-9">
        <div className="w-[193px] border-r border-black/20">
          <h1 className="text-2xl font-medium mb-4.5 pl-0.75">All Weeks</h1>
          <WeekBtn />
        </div>
        <div className="w-5/6 pl-6.25">
          <ISAHero />
        </div>
      </div>
    </>
  );
};
