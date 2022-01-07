// gatsby-ssr.js
const React = require("react");
require("./src/scss/index.scss");
const GlobalStyles = require("./src/styles/global-styles").default;

exports.wrapPageElement = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      {element}
    </>
  );
};
