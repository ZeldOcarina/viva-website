import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

import ImageVideo from "../components/ImageVideo";

const StyledHero = styled.section`
  text-align: center;

  ${respond(
    "phone-port",
    css`
      padding: 0;
      margin-top: 3rem;
    `
  )}

  h1 {
    ${respond(
      "phone-port",
      css`
        font-size: 2.5rem;
      `
    )}
  }

  p {
    font-family: var(--title-font);
    margin-bottom: 3rem;

    ${respond(
      "phone-port",
      css`
        font-size: 1.9rem;
      `
    )}
  }
`;

const Hero = () => {
  const {
    strapiApiHomeHeroPopulate: {
      data: {
        attributes: {
          title,
          subtitle,
          videoId,
          vimeoH,
          videoThumb: {
            data: {
              attributes: { alternativeText, localFile },
            },
          },
        },
      },
    },
  } = useStaticQuery(query);

  return (
    <StyledHero className="container">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <ImageVideo image={getImage(localFile)} alt={alternativeText} video={videoId} vimeoH={vimeoH} />
    </StyledHero>
  );
};

export default Hero;

const query = graphql`
  query HomeHero {
    strapiApiHomeHeroPopulate {
      data {
        attributes {
          subtitle
          title
          videoThumb {
            data {
              attributes {
                alternativeText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: TRACED_SVG, quality: 100, layout: CONSTRAINED)
                  }
                }
              }
            }
          }
          videoId
          vimeoH
        }
      }
    }
  }
`;
