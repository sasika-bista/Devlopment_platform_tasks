import { useEffect, useState } from "react";
import image1 from "../assets/Resources/Landing/image1.svg";
import image2 from "../assets/Resources/Landing/image2.svg";
import image3 from "../assets/Resources/Landing/image3.svg";
import image4 from "../assets/Resources/Landing/image4.svg";
import HCKlogo from "../assets/Resources/Landing/HCKLogo.svg";
import arrow from "../assets/Resources/Landing/arrow.svg";
import searchImg from "../assets/Resources/Landing/search.svg";
import heraldFooterLogo from "../assets/Resources/Landing/heraldFooterLogo.svg";

import { Link } from "react-router-dom";
import { RecentlyAddedLayout } from "../components/resources/RecentlyAddedLayout";
import { OngoingModulesLayout } from "../components/resources/OngoingModulesLayout";
import { PreviousModulesLayout } from "../components/resources/PreviousModulesLayout";
import { ResourcesDropdown } from "../components/resources/ResourcesDropdown";

function ResourcesLanding() {
  const images: string[] = [image1, image2, image3, image4];
  const [index, setIndex] = useState<number>(0);
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex: number) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);
  const slidingWords = ["Resources.", "Materials.", "Guides.", "Reference."];

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % slidingWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const container = {
    height: "40px",
    overflow: "hidden",
  };

  const slider = {
    transition: "transform 0.5s ease",
  };

  const item = {
    height: "40px",
    display: "flex",
    alignItems: "center",
  };
  const [search, setSearch] = useState<string>("");
  const [show, setShow] = useState<boolean>(true);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header>
          <nav className="fixed top-0 left-0 z-50 w-screen flex justify-between items-center bg-[#303030] h-[72px] px-[141.5px]">
            <img src={HCKlogo} alt="" className="w-[140px] h-[48px]" />
            <div className="flex flex-row gap-5 items-center mr-2.25">
              <Link to="" className="text-white text-sm mr-2.25 font-normal">
                Home
              </Link>
              <Link
                to=""
                className="text-white text-sm flex gap-2.75 items-center justify-center"
                onClick={() => setShow(!show)}
              >
                <span>Resources</span>
                <img
                  src={arrow}
                  alt="arrow"
                  className={`h-2 w-1.75 transition-transform duration-300 ${show ? "rotate-90" : "rotate-0"}`}
                />
              </Link>
              <Link to="" className="text-white text-sm">
                Search
              </Link>
            </div>
            <button
              type="button"
              className="px-3.25 py-[9px] bg-primary text-white rounded-lg text-[13px] mr-2.5 cursor-pointer"
            >
              Request Resources
            </button>
          </nav>
        </header>
        <ResourcesDropdown show={show} />
        <div className="flex-1">
          <div className="relative slider w-full overflow-hidden mt-18">
            <div
              className="sliderTrack h-[477.75px] w-screen flex transition-transform duration-700 ease-in-out scroll-smooth "
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {images.map((img: string, i: number) => (
                <img
                  key={i}
                  src={img}
                  alt={`slide-${i}`}
                  className=" h-full object-cover "
                />
              ))}
            </div>
            <div className="absolute w-[600px] z-10 top-21.25 left-32.25 p-6 flex flex-col gap-4">
              <div className="text-white text-[43px] tracking-[-0.0085em] leading-12 font-[600]">
                <div className="flex gap-1.5">
                  <span>Push</span>
                  <span>Yourself</span>
                  <span>With</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">Extra</span>
                  <div style={container}>
                    <div
                      style={{
                        ...slider,
                        transform: `translateY(-${sliderIndex * 40}px)`,
                      }}
                    >
                      {slidingWords.map((word, i) => (
                        <div key={i} style={item}>
                          {word}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-white text-[17.25px] mt-2.75 leading-5.75">
                Why limit yourself with normal study materials when you can{" "}
                <br />
                push your limits with extra materials provided by your module{" "}
                <br />
                leader/ tutors themselves.
              </p>
              <button className="relative text-[12.5px] text-white mt-3.5 px-1 py-2.5 w-36 overflow-hidden rounded-full group cursor-pointer">
                <div className="absolute inset-0 border border-white rounded-full z-10 group-hover:border-primary transition-all duration-0 delay-100"></div>

                <span className="relative z-10">Find Your Resource</span>

                <span className="absolute left-0 top-0 h-full w-0 rounded-full bg-primary transition-all duration-400 ease-out group-hover:w-full"></span>
              </button>
            </div>
          </div>
          <div className="px-38 mt-15.75">
            <h1 className="text-[32.25px] text-black/90 font-semibold tracking-tight flex gap-1.5 ml-0.5">
              <span>Recently</span>
              <span>Added</span>
              <span>Materials</span>
            </h1>
            <div className="mt-7.75 grid grid-cols-3 gap-4">
              <RecentlyAddedLayout />
            </div>
          </div>
          <div className="px-38 mt-24">
            <h1 className="text-[32.25px] text-black/90 font-semibold tracking-tight flex gap-1.5 ml-0.5">
              <span>Ongoing</span>
              <span>Modules</span>
            </h1>
            <div className="mt-7.75 grid grid-cols-3 gap-4">
              <OngoingModulesLayout />
            </div>
          </div>
          <div className="px-37.5 mt-[93.5px] mb-10">
            <div className="flex justify-between items-center">
              <h1 className="text-[32.25px] text-black/90 font-semibold tracking-tight flex gap-1.5 ml-0.5">
                <span>Previous</span>
                <span>Modules</span>
              </h1>
              <div className="flex items-center gap-2.5">
                <div className="flex items-center rounded-full w-96 border border-black/50 px-5 py-[7.25px] ">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full outline-none text-[13.25px]"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <img
                    src={searchImg}
                    alt="search-img"
                    className="w-3 h-3 cursor-pointer"
                  />
                </div>
                <button className="px-3.25 py-2 text-primary border border-primary rounded-3xl text-[13px] mr-1.5 cursor-pointer transition-colors duration-400 ease-in-out hover:bg-primary hover:text-white">
                  Sort by Level
                </button>
              </div>
            </div>
            <div>
              <div>
                <h2 className="text-primary text-[18px] font-medium tracking-widest mt-9.75 ml-4.5">
                  Level - 4
                </h2>
                <div className="mt-5.5 grid grid-cols-3 gap-x-4 gap-y-13 mx-0.75">
                  <PreviousModulesLayout level={4} search={search} />
                </div>
              </div>
              <div className="mt-23.75">
                <h2 className="text-primary text-[18px] font-medium tracking-widest ml-4.5">
                  Level - 5
                </h2>
                <div className="mt-5.5 grid grid-cols-3 gap-x-4 gap-y-13 mx-0.75">
                  <PreviousModulesLayout level={5} search={search} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-42">
          <div className="w-screen overflow-hidden h-[73px] pl-[151px] bg-[#303030] flex items-center justify-between text-white text-[11.5px] pr-[170px] tracking-wider font-extralight">
            <img
              src={heraldFooterLogo}
              alt="herald-college-logo"
              className="w-51.5 h-27.75"
            />
            <p>© 2025-2026 Herald College Kathmandu | All Rights Reserved</p>
            <p>Privacy Policy | Copyright Policy</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default ResourcesLanding;
