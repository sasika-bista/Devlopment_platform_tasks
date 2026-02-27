import React from "react";
interface InputLayoutProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputLayoutLogin = ({
  label,
  ...inputProps
}: InputLayoutProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-[16px] font-semibold">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        {...inputProps}
        className="w-[94%] border border-gray-500 rounded-xl px-5 py-4.25 bg-gray-50 outline-none focus:border-primary transition-colors"
        required
      />
    </div>
  );
};
