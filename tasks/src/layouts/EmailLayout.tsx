import React from "react";
// Ensure these components are imported correctly
import { InputLayoutRegister } from "./InputLayoutRegister";
import { InputLayoutLogin } from "./InputLayoutLogin";

// 1. Define the props that BOTH Layout components share
interface SharedInputProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  required?: boolean;
}

// 2. Update the Layout props to expect a component that uses SharedInputProps
interface EmailLayoutProps {
  inputLayout: React.ComponentType<SharedInputProps>;
}

export const EmailLayout = ({ inputLayout: Component }: EmailLayoutProps) => {
  return (
    <Component
      label="Email"
      type="email"
      placeholder="Enter your mail address"
      name="email"
      required
    />
  );
};
