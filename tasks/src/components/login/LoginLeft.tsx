import microsoftAuthenticator from "../../assets/loginPage/microsoft-authenticator.png";
import { EmailLayout } from "../../layouts/EmailLayout";
import { PasswordLayout } from "../../layouts/PasswordLayout";
import { Link } from "react-router-dom";

export const LoginLeft = () => {
  return (
    <div className="flex flex-col w-100 h-full">
      <div className="mb-6">
        <h1 className="text-[50px] font-semibold">Welcome back!</h1>
      </div>
      <form className="flex flex-col items-start gap-4 mb-4">
        <EmailLayout />
        <PasswordLayout />
        <div className="flex flex-row justify-between w-full">
          <label className="flex items-center cursor-pointer group">
            <div className="relative">
              <input type="checkbox" className="sr-only peer" />

              <div className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-300 peer-checked:bg-primary transition-colors">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <span className="ml-2 text-sm font-semibold text-black">
              Remember me
            </span>
          </label>

          <div>
            <p className="text-primary font-semibold">Forgot your password?</p>
          </div>
        </div>

        <button className="w-full h-15 bg-primary rounded-2xl text-white text-[20px] font-semibold cursor-pointer hover:brightness-95">
          Login
        </button>
      </form>
      <div className="flex items-center my-2">
        <div className="grow border-t-[0.6px] border-[#6C6C6C] translate-y-px"></div>

        <span className="shrink mx-4 text-black/65 ">Or Continue with</span>

        <div className="grow border-t-[0.6px] border-[#6C6C6C] translate-y-px"></div>
      </div>
      <button className="w-full h-15 border border-gray-400 rounded-2xl text-[14px] font-semibold flex items-center px-10 mt-4 cursor-pointer">
        <img
          className="w-11.5 h-12.75 mx-3"
          src={microsoftAuthenticator}
          alt="microsoft-authenticator"
        />
        Sign up with microsoft authenticator
      </button>
      <div className="text-center mt-3 font-semibold">
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="text-primary">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
