import { HomePageCard } from "../layouts/homePageCard";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 h-screen px-24.25">
        <div className="flex flex-col justify-center items-center pt-12.25">
          <h1 className="text-[38.5px] tracking-wider font-extralight">
            Welcome to{" "}
            <span className="text-[42px] text-primary font-semibold">
              HCK Core
            </span>
          </h1>
          <p className="text-black/60 mt-7 font-medium text-[21.5px] tracking-wider">
            Explore academic resources organized by program, level, and week
          </p>
        </div>
        <div className="mt-14.5">
          <h2 className="text-primary font-medium text-[22.5px] tracking-wide mb-6.25 ml-1">
            Level 4
          </h2>
          <div className="grid grid-cols-3 gap-7">
            <HomePageCard />
            <HomePageCard />
            <HomePageCard />
            <HomePageCard />
            <HomePageCard />
            <HomePageCard />
          </div>
        </div>
      </div>
    </>
  );
};
