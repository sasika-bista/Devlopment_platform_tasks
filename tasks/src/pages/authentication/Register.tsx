import { Navbar } from "../Navbar";
import { RegisterLeft } from "../../components/register/RegisterLeft";
import { RegisterRight } from "../../components/register/RegisterRight";

export const Register = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-between h-full py-16 pl-50 pr-30 bg-gray-50 ">
        <RegisterLeft />

        <RegisterRight />
      </div>
    </>
  );
};
