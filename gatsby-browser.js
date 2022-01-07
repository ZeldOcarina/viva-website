// gatsby-ssr.js
import React from "react";
import "./src/scss/index.scss";
import GlobalStyles from "./src/styles/global-styles";

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      {element}
    </>
  );
};
