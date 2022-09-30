import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
      // COLORS
    --body-background: #ffffff;
    --color-primary: #000000;
    --color-primary-dark: #007BFF;
    --color-primary-light: #F3F9FF;
    --color-secondary: #ED1C24;
    --black: #000000;
    --white: #ffffff;
    --navbar-active-color: #ED1C24;

    //FONT FAMILY
    --title-font: "Nunito Sans", sans-serif;
    --body-font: "Open Sans", sans-serif;
    --bold: 700;

    // FONT-SIZES
    --basic-font-size: 2rem;
    --mobile-font-size: 1.5rem;

    --big-title: 4.8rem;
    --title-font-size: 2.8rem;
    --mobile-title-font-size: 3rem;
    --small-title: 2.5rem;
    --big-text: 2rem;

    //SECTIONS
    --section-width: 70%;
    --laptop-container: 80%;

    //SHADOWS
    --cards-shadow: 3px 3px 22px -12px rgba(0, 0, 0, 0.42)
  }
`;
