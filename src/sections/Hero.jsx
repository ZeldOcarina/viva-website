import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

import ImageVideo from "../components/ImageVideo";

const StyledHero = styled.section`
  text-align: center;

  p {
    font-family: var(--title-font);
    margin-bottom: 3rem;
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
