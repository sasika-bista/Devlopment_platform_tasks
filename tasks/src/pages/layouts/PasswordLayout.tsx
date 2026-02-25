import { useState } from "react";
import eyesOpen from "../../assets/eyes-open.png";
import eyesClosed from "../../assets/eyes-closed.png";

export const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-m font-bold">
        Password <span className="text-red-500">*</span>
      </label>
      <div className="flex items-center border border-gray-300 rounded-2xl px-4 focus-within:border-primary transition-colors">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="w-full py-4 outline-none bg-transparent"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="mr-2"
        >
          {showPassword ? (
            <img className="w-5 h-4" src={eyesOpen} />
          ) : (
            <img className="w-5 h-4" src={eyesClosed} />
          )}
        </button>
      </div>
    </div>
  );
};
