import { Link } from "react-router-dom";
import { InputLayoutRegister } from "../../layouts/InputLayoutRegister";
import { EmailLayout } from "../../layouts/EmailLayout";
import { PasswordLayout } from "../../layouts/PasswordLayout";

export const RegisterLeft = () => {
  return (
    <div className="flex flex-col w-105 h-full">
      <div className="mb-6">
        <h1 className="text-[40px] font-semibold">Create your Account</h1>
      </div>
      <form className="flex flex-col items-start gap-3 mb-4">
        <InputLayoutRegister
          label="Full Name"
          type="text"
          placeholder="Full name"
          name="fullname"
        />
        <InputLayoutRegister
          label="Phone Number"
          type="tel"
          placeholder="Phone Number"
          name="fullname"
        />
        <EmailLayout inputLayout={InputLayoutRegister} />
        <PasswordLayout />
        <PasswordLayout label="Confirm Password" />
        <div className="flex justify-center items-center gap-3">
          <input className="w-4.5 h-4.5 accent-primary" type="checkbox" />
          <p className="font-normal">I accept terms and policy</p>
        </div>
        <button className="w-full h-15 bg-primary rounded-2xl text-white text-[20px] font-semibold cursor-pointer hover:brightness-95 mt-3">
          Sign Up
        </button>
      </form>
      <div className="text-center mt-3 font-semibold">
        <p>
          Already have an account?{" "}
          <Link to={"/login"} className="text-primary">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};
