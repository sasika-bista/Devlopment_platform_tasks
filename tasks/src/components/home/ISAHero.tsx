import { ISACard } from "../../layouts/ISACard";

export const ISAHero = () => {
  return (
    <div className="h-full">
      <h1 className="font-medium text-[29.75px] leading-none pt-1 ml-1">
        Week 1 - HTML & CSS Fundamentals
      </h1>
      <ISACard />
      <ISACard />
      <h2 className="mt-14 text-black/20 text-[20px] flex justify-center items-center mb-10">
        You've reached the end of Week 1
      </h2>
    </div>
  );
};
