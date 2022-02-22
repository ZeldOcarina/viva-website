import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const StyledCaseStudiesHero = styled.header`
  .image-container {
    margin: 4rem 0;
    position: relative;
  }

  .banner-image {
    width: 100%;
  }

  .text-container {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateX(10rem) translateY(-50%);

    h1 {
      margin: 0 0 0.3rem 0;
    }
    p {
      width: 60%;
      font-weight: 700;
      font-family: var(--title-font);
      line-height: 1.3;
    }
  }
`;

const CaseStudiesHero = () => {
  return (
    <StyledCaseStudiesHero className="container">
      <div className="image-container">
        <StaticImage
          src="../../images/case-studies-banner.png"
          alt="Smiling dentist girl"
          quality={100}
          className="banner-image"
        />
        <div className="text-container">
          <h1>Case Studies</h1>
          <p>Viva System drives new patients to your practice</p>
        </div>
      </div>
    </StyledCaseStudiesHero>
  );
};

export default CaseStudiesHero;
