import { Link } from "react-router-dom";
import fileImg from "../assets/homePage/File.png";
import linkImg from "../assets/homePage/Link.png";

interface ISACardProps {
  title: string;
  teacher: string;
  post: string;
  description1: string;
  description2?: string;
  description3?: string;
  files: string[];
}

export const ISACard = ({
  title,
  teacher,
  post,
  description1,
  description2,
  description3,
  files,
}: ISACardProps) => {
  return (
    <div className="border border-black/20 mt-10.5 rounded-md px-8 py-8.75 bg-white">
      <div className="flex flex-col gap-5.5">
        <h2 className="font-medium text-[29.75px] leading-none pl-1">
          {title}
        </h2>
        <div className="flex gap-2.5 items-center mt-0.5 pl-1">
          <p className="text-[11.75px] mr-0.5">
            <span className="text-black/60">by </span>
            {teacher}
          </p>
          <button className="bg-primary/80 text-white rounded-sm h-[11.75px] flex items-center justify-center text-[7px] px-1 py-2 tracking-wide">
            {post}
          </button>
          <p className="text-black/60 text-[11.75px]">Computer Science</p>

          <div className="flex gap-1.5 ml-1 items-center">
            <span className="text-black/90 text-[10px]">•</span>

            <p className="text-black/60 text-[11.75px]">Level 4</p>
          </div>
        </div>
        <div className="flex gap-2 mt-1">
          <div className="px-2.5 py-1 bg-gray-50 border border-black/10 rounded-lg text-[11px] text-black/80">
            HTML
          </div>
          <div className="px-2.5 py-1 bg-gray-50 border border-black/10 rounded-lg text-[11px] text-black/80">
            CSS
          </div>
        </div>
        <div className="flex flex-col gap-1.5 items-start ml-0.25">
          <p className="text-black/80 text-[16.25px]">{description1}</p>
          <p className="text-black/80 text-[16.25px]">{description2}</p>
          <p className="text-black/80 text-[16.25px]">{description3}</p>
        </div>
        <div className="flex flex-col gap-3 mt-1">
          <h2 className="font-semibold text-[14.75px] ml-0.75">Documents</h2>
          <div className="flex items-center gap-4 w-[673px]">
            {files.map((file) => (
              <Link
                key={file}
                to="https://example.com/files/missing-document.pdf"
                className="w-[186.5px] px-4.5 py-2 border border-black/30 rounded-sm flex items-center gap-2 "
              >
                <img src={fileImg} alt="file" className="w-4.25 h-5" />
                <p className="text-black/60 text-[15px] font-semibold tracking-normal">
                  {file}
                </p>
              </Link>
            ))}
            <div className="px-5.25 py-2 border border-black/30 rounded-sm flex items-center gap-2 text-black/60 text-[15px] font-semibold">
              +3
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3.75 mt-1">
          <h2 className="font-semibold text-[14.75px] ml-0.75">Links</h2>
          <div className="ml-1 flex items-center gap-3">
            <img src={linkImg} alt="linkImg" className="w-4 h-2" />
            <Link
              to={"https://github.com/thispagedoesnotexist"}
              className="text-primary underline decoration-2 decoration-primary/70 text-[15.5px]"
            >
              https://github.com/thispagedoesnotexist
            </Link>
          </div>
          <div className="ml-1 flex items-center gap-3">
            <img src={linkImg} alt="linkImg" className="w-4 h-2" />
            <Link
              to={"https://www.w3schools.com/html/html_intro.asp"}
              className="text-primary underline decoration-2 decoration-primary/70 text-[15.5px]"
            >
              https://www.w3schools.com/html/html_intro.asp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
