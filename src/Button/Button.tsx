import React, { ReactNode } from "react";

interface ButtonProps {
  size: "small" | "medium" | "big";
  children: ReactNode;
}

export const Button = ({ size, children }: ButtonProps) => {
  return <button>{children}</button>;
};
