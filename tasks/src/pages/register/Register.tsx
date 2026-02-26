import { Navbar } from "../Navbar";
import { RegisterLeft } from "./RegisterLeft";
import { RegisterRight } from "./RegisterRight";

export const Register = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-between h-full py-16 px-50 bg-gray-50 ">
        <RegisterLeft />
        <RegisterRight />
      </div>
    </>
  );
};
