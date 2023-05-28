import styled from "@emotion/styled";
import { css } from "@emotion/react";
import React, { ReactNode } from "react";

export const ButtonSize = {
  small: "small",
  medium: "medium",
  big: "big"
};

export interface ButtonProps {
  size?: typeof ButtonSize[keyof typeof ButtonSize];
  children: ReactNode;
}

export const Button = ({ size = ButtonSize.medium, children }: ButtonProps) => {
  return <StyledButton size={size}>{children}</StyledButton>;
};

const getSizeStyle = ({ size }) => {
  switch (size) {
    case ButtonSize.small: {
      return css`
        padding: 5px 10px;
        font-size: 13px;
      `;
    }
    case ButtonSize.medium: {
      return css`
        padding: 6px 10px;
        font-size: 15px;
      `;
    }
    case ButtonSize.big: {
      return css`
        padding: 7px 10px;
        font-size: 17px;
      `;
    }
  }
};

const StyledButton = styled.button<ButtonProps>`
  box-sizing: border-box;
  font-weight: 500;
  color: #fff;
  line-height: 1.2;
  outline: 0;
  border: 0;
  border-radius: 5px;
  background-color: #06c755;

  ${props => getSizeStyle(props)}
`;
