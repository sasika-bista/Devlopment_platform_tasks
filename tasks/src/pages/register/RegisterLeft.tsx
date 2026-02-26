import { Link } from "react-router-dom";
import { InputLayout } from "../layouts/InputLayout";
import { EmailLayout } from "../layouts/EmailLayout";
import { PasswordLayout } from "../layouts/PasswordLayout";

export const RegisterLeft = () => {
  return (
    <div className="flex flex-col w-100 h-full">
      <div className="mb-5">
        <h1 className="text-[40px] font-semibold">Create your account</h1>
      </div>
      <form className="flex flex-col items-start gap-4 mb-4">
        <InputLayout
          label="Full Name"
          type="text"
          placeholder="Full name"
          name="fullname"
        />
        <InputLayout
          label="Phone Number"
          type="tel"
          placeholder="Phone Number"
          name="fullname"
        />
        <EmailLayout />
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
