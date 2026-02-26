import React from "react";
import { InputLayout } from "./InputLayout";

export const EmailLayout = () => {
  return (
    <InputLayout
      label="Email"
      type="email"
      placeholder="Enter your mail address"
      name="email"
      required
    />
  );
};
