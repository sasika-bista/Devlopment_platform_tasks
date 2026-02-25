import { Navbar } from "../Navbar";
import { LoginLeft } from "./LoginLeft";
import { LoginRight } from "./LoginRight";

export const Login = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-between h-screen py-16 px-50 bg-gray-50">
        <LoginLeft />
        <LoginRight />
      </div>
    </>
  );
};
