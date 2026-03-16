import { useState } from "react";
import dropdown2 from "../assets/extraLearningPage/dropdown2.svg";

interface FilterButtonProps {
  title: string;
  btnName: string;
  list: string[];
  set: (value: string) => void;
}

export const FilterButtonLayout = ({
  title,
  btnName,
  list,
  set,
}: FilterButtonProps) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="relative">
      <div className="flex flex-col gap-4.25">
        <h2 className="text-[21px] font-semibold pl-1">{title}</h2>
        <button
          className="border px-4.5 py-3 flex items-center w-54.5 justify-between rounded-sm border-gray-300 text-[17.5px] shadow-[1.5px_1.5px_1px_rgba(0,0,0,0.25)] cursor-pointer hover:bg-[#A4C93A] hover:text-white hover:shadow-[2.25px_2.25px_0px_rgba(0,0,0,0.4)]"
          onClick={() => {
            setShow(!show);
          }}
        >
          {btnName}
          <img src={dropdown2} alt="dropdown" className="w-3 h-3" />
        </button>
      </div>
      {show && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShow(false)}
          ></div>
          <div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md z-50">
            {list.map((l) => (
              <div
                className="px-6 py-4 cursor-pointer hover:bg-[#A4C93A] hover:text-white text-lg"
                onClick={() => {
                  set(l);
                  setShow(false);
                }}
              >
                {l}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
