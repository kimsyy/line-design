import React, { ReactNode } from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  outline: 0;
  border: 0;
  border-radius: 5px;
  background-color: #06c755;
`;

interface ButtonProps {
  size: "small" | "medium" | "big";
  children: ReactNode;
}

export const Button = ({ size, children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};
