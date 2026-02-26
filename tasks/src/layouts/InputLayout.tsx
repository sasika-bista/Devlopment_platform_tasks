import React from "react";
interface InputLayoutProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputLayout = ({ label, ...inputProps }: InputLayoutProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-m font-bold">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        {...inputProps}
        className="w-full border border-gray-300 rounded-2xl px-5 py-4 bg-gray-50 outline-none focus:border-primary transition-colors"
        required
      />
    </div>
  );
};
