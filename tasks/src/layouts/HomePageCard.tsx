import htmlTag from "../assets/homePage/html-tag.png";
import { Link } from "react-router-dom";
import arrow from "../assets/homePage/Arrow.png";

export const HomePageCard = () => {
  return (
    <div className="border border-gray-400 rounded-md w-107 px-8 py-7.25">
      <div className="flex justify-between items-center mb-5">
        <p className="text-black/70 text-sm">Computer Science</p>
        <button className=" bg-primary rounded-sm text-white text-sm px-3 py-1.25 cursor-pointer hover:brightness-95">
          Level 4
        </button>
      </div>
      <div className="flex items-start gap-6">
        <img src={htmlTag} alt="html-tag" className="h-11.5 w-11.75 mt-1" />
        <h1 className="text-[21.25px] font-medium tracking-wide">
          Internet Software Architecture
        </h1>
      </div>
      <div className="mt-5.5 text-black/70 ">
        <p className="leading-6.5">
          Learn modern web development patterns, frameworks, and architectural
          principles for building scalable web applications.
        </p>
      </div>
      <div className="flex justify-between items-center mt-6.75">
        <p className="text-black/70 text-md">4CS001</p>
        <div>
          <Link
            to="/"
            className="flex items-center justify-center text-primary gap-2 text-[13px] font-semibold tracking-wide"
          >
            <span>Explore</span>
            <img src={arrow} alt="arrow" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
