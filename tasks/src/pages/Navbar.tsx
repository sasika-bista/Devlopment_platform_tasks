import { Link } from "react-router-dom";
import hck_logo from "../assets/landingPage/hck_core_logo.svg";

export const Navbar = () => {
  return (
    <>
      <div className="h-21 border-b-[0.7px] border-[#6868681d] flex items-center justify-between py-4 px-20">
        <div>
          <img className="w-18 h-14" src={hck_logo} alt="hck_logo" />
        </div>
        <div>
          <Link
            to="/login"
            className="bg-primary w-32 h-[44px] rounded-lg flex justify-center items-center text-white text-[18px] font-semibold cursor-pointer"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};
