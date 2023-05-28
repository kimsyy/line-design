import styled from "@emotion/styled";
import { css } from "@emotion/react";
import React, { ReactNode } from "react";

export const ButtonSize = {
  small: "small",
  medium: "medium",
  big: "big"
};

export const ButtonTheme = {
  primary: "primary",
  warning: "warning",
  outline: "outline"
};

export interface ButtonProps {
  size?: typeof ButtonSize[keyof typeof ButtonSize];
  theme?: typeof ButtonTheme[keyof typeof ButtonTheme];
  children: ReactNode;
}

export const Button = ({
  size = ButtonSize.medium,
  theme = ButtonTheme.primary,
  children
}: ButtonProps) => {
  return (
    <StyledButton size={size} theme={theme}>
      {children}
    </StyledButton>
  );
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
        padding: 7px 10px;
        font-size: 15px;
      `;
    }
    case ButtonSize.big: {
      return css`
        padding: 9px 10px;
        font-size: 17px;
      `;
    }
  }
};

const getThemeStyle = ({ theme }) => {
  switch (theme) {
    case ButtonTheme.primary: {
      return css`
        color: #fff;
        background-color: #06c755;
      `;
    }
    case ButtonTheme.warning: {
      return css`
        color: #fff;
        background-color: #ff334b;
      `;
    }
    case ButtonTheme.outline: {
      return css`
        color: #06c755;
        background-color: #fff;
        border: 1px solid #06c755;
      `;
    }
  }
};

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  box-sizing: border-box;
  font-weight: 500;
  color: #fff;
  line-height: 1.2;
  outline: 0;
  border: 0;
  border-radius: 5px;
  background-color: #06c755;

  ${props => getSizeStyle(props)};
  ${props => getThemeStyle(props)};
`;
