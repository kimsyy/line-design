import { css } from "@emotion/react";

export const color = {
  positive: "#00C400",
  infomative: "#067DFD",
  warning: "#EF2B2A",
  delay: "#F9560E",
  cta: "#0028AC",

  gray100: "#F5F5F5",
  gray200: "#EEE",
  gray700: "#616161",
  gray900: "#222",

  black: "#000",
  white: "#FFF"
};

export const text = {
  heading1: css`
    font-size: 24px;
    line-height: 34px;
    font-weight: 400;
  `,
  heading2: css`
    font-size: 22px;
    line-height: 32px;
    font-weight: 400;
  `,
  text1: css`
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
  `,
  text2: css`
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  `
};

export const spacing = {
  s: "12px",
  m: "16px",
  l: "20px"
};
