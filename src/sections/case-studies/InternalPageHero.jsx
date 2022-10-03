import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled, { css } from "styled-components";
import respond from "../../styles/abstracts/mediaqueries";

const StyledInternalPageHero = styled.header`

  .image-container {
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
    left: 5%;
    transform: translateX(10rem) translateY(-50%);

    ${respond(
        "ipad-pro-11-land",
        css`
          transform: translateX(0) translateY(-50%);
        `
      )}


    h1 {
      margin: 0 0 0.3rem 0;
      font-size: 6rem;

      ${respond(
        "ipad-pro-11-land",
        css`
          font-size: 5rem;
        `
      )}
      ${respond(
        "nexus-7",
        css`
          font-size: 3rem;
        `
      )}

      ${respond(
        "phone-port",
        css`
          font-size: 2.5rem;
        `
      )}
      ${respond(
        "iphone-5",
        css`
          font-size: 2rem;
        `
      )}
    }
    p {
      width: 60%;
      font-weight: 700;
      font-family: var(--title-font);
      line-height: 1.3;
      font-size: 2.4rem;

      ${respond(
        "ipad-pro-11-land",
        css`
          font-size: 2rem;
        `
      )}

      ${respond(
        "nexus-7",
        css`
          font-size: 1.6rem;
        `
      )}

      ${respond(
        "phone-port",
        css`
          font-size: 1.2rem;
        `
      )}

      ${respond(
        "iphone-5",
        css`
          font-size: 1.2rem;
        `
      )}
    }
  }
`;

const InternalPageHero = ({ image, imageAlt, title, subtitle }) => {
  return (
    <StyledInternalPageHero>
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
