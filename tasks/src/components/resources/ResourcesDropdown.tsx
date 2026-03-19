import React from "react";

interface ModuleColumn {
  items: string[];
}

interface Props {
  show: boolean;
}

const levels = [4, 5, 6];

const modules: ModuleColumn[][] = [
  [
    {
      items: [
        "4SEWD Web Application Development",
        "4CS005 High Performance Computing",
        "4CS014 Complex System",
      ],
    },
    {
      items: [
        "4SEWD Web Application Development",
        "4CS005 High Performance Computing",
        "4CS014 Complex System",
      ],
    },
  ],
  [
    {
      items: [
        "5CS020 Human Computer Interaction",
        "5CS022 Distributed Cloud Systems Programming",
        "5CS024 Collaborative Development",
      ],
    },
    {
      items: [
        "5CS020 Human Computer Interaction",
        "5CS022 Distributed Cloud Systems Programming",
        "5CS024 Collaborative Development",
      ],
    },
  ],
  [
    {
      items: [
        "6CS007 Project and Professionalism",
        "6CS005 High Performance Computing",
        "6CS014 Complex System",
      ],
    },
    {
      items: [
        "6CS007 Project and Professionalism",
        "6CS005 High Performance Computing",
        "6CS014 Complex System",
      ],
    },
  ],
];

export const ResourcesDropdown = ({ show }: Props) => {
  return (
    <div
      className={`fixed top-18 h-86.5 w-screen text-white bg-[#303030]/85 flex gap-25 pl-69.5 py-6.5 z-100 origin-top transition-all duration-600 ${show ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}
    >
      <div>
        <h2 className="text-[19.5px] font-medium">Level</h2>
        <div className="flex flex-col mt-19.25 ml-0.25 gap-3.75 font-light text-[13px] tracking-wider">
          {levels.map((level) => (
            <h4 className="transition-colors duration-300 hover:text-primary">
              Level {level}
            </h4>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-[19.5px] font-medium ml-20">Modules</h2>

        <div className="flex gap-9 text-[14px] font-extralight mt-4.25">
          {modules.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-8">
              {column.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex flex-col gap-3 items-center justify-center"
                >
                  {group.items.map((item, itemIndex) => (
                    <h3
                      key={itemIndex}
                      className="transition-colors duration-300 hover:text-primary"
                    >
                      {item}
                    </h3>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
