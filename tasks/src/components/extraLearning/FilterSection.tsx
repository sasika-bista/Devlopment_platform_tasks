import searchImg from "../../assets/extraLearningPage/search.svg";
import filter from "../../assets/extraLearningPage/filter.svg";
import dropdown from "../../assets/extraLearningPage/dropdown.svg";

import { useState } from "react";
import { FilterButtonLayout } from "../../layouts/FilterButtonLayout";

interface Props {
  program: string;
  contributor: string;
  search: string;
  setProgram: (value: string) => void;
  setContributor: (value: string) => void;
  setSearch: (value: string) => void;
}

export const FilterSection = ({
  program,
  contributor,
  search,
  setProgram,
  setContributor,
  setSearch,
}: Props) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-center items-center gap-6 mt-14.5 px-24.25 ">
        <div className="flex items-center gap-5 border-2 border-gray-300 rounded-md px-4 py-2.5 bg-white w-163 shadow-sm pl-6 hover:border-gray-600 hover:border-2">
          <img src={searchImg} alt="search" className="w-6.25 h-6.25" />
          <input
            type="text"
            placeholder="Search extra resources..."
            className="w-full outline-none text-gray-600 placeholder-gray-400 text-[19px] font-medium tracking-wide pt-0.5"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button
          className="flex items-center gap-5 border border-gray-300 rounded-md px-5.75 py-2.25 bg-white shadow-sm cursor-pointer hover:bg-gray-50"
          onClick={() => setShow(!show)}
        >
          <img src={filter} alt="filter" className="w-5 h-5" />
          <span className="text-gray-700 font-semibold text-[22px]">
            Filter
          </span>
          <img
            src={dropdown}
            alt="dropdown"
            className={`w-3.5 h-3.5 transition-transform duration-400 ${show ? "rotate-360" : "rotate-180"}`}
          />
        </button>
      </div>
      {show && (
        <div className="flex items-center justify-center gap-12 mt-14.75">
          <FilterButtonLayout
            title="Contributor"
            btnName={contributor}
            list={["Student", "Module Leader"]}
            set={(value: string) => setContributor(value)}
          />
          <FilterButtonLayout
            title="Program"
            btnName={program}
            list={["Web Development", "AI and ML", "Big Data"]}
            set={(value: string) => setProgram(value)}
          />
          <button
            className="px-5 py-3 border border-gray-300 rounded-md text-[19px] font-medium mt-12.5 shadow-[1.5px_1.5px_1px_rgba(0,0,0,0.25)] cursor-pointer hover:text-[#A4C93A] hover:shadow-[2.25px_2.25px_0px_rgba(0,0,0,0.4)] "
            onClick={() => {
              setProgram("All Programs");
              setContributor("All Contributors");
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </>
  );
};
