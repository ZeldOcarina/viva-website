import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled, { css } from "styled-components";
import respond from "../../styles/abstracts/mediaqueries";

const StyledInternalPageHero = styled.header`
  ${respond(
    "phone-port",
    css`
      padding: 0 !important;
    `
  )}

  .image-container {
    margin: 4rem 0;
    position: relative;
  }

  .banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .text-container {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateX(10rem) translateY(-50%);

    ${respond(
      "phone-port",
      css`
        transform: translateX(10%) translateY(-50%);
      `
    )}

    h1 {
      margin: 0 0 0.3rem 0;

      ${respond(
        "phone-port",
        css`
          font-size: 2.5rem;
        `
      )}
    }
    p {
      width: 60%;
      font-weight: 700;
      font-family: var(--title-font);
      line-height: 1.3;

      ${respond(
        "phone-port",
        css`
          font-size: 1.6rem;
        `
      )}
    }
  }
`;

const InternalPageHero = ({ image, imageAlt, title, subtitle }) => {
  return (
    <StyledInternalPageHero className="container">
      <div className="image-container">
        <GatsbyImage image={image} alt={imageAlt} quality={100} className="banner-image" />
        <div className="text-container">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </StyledInternalPageHero>
  );
};

export default InternalPageHero;
