import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

import ImageVideo from "../components/ImageVideo";
import SectionTitle from "../components/SectionTitle";

const StyledHomeScale = styled.section`
  text-align: center;
  .title {
    max-width: 50%;
  }
`;

const HomeScale = () => {
  const {
    howToScale: {
      data: {
        attributes: {
          title,
          videoId,
          vimeoH,
          videoThumb: {
            data: {
              attributes: { localFile, alternativeText },
            },
          },
        },
      },
    },
  } = useStaticQuery(query);

  return (
    <StyledHomeScale className="container">
      <SectionTitle title={title} className="title" />
      <ImageVideo image={getImage(localFile)} alt={alternativeText} video={videoId} vimeoH={vimeoH} />
    </StyledHomeScale>
  );
};

const query = graphql`
  query HomeScale {
    howToScale: strapiApiHomeHowToScalePopulate {
      data {
        attributes {
          title
          videoId
          vimeoH
          videoThumb {
            data {
              attributes {
                alternativeText
                localFile {
                  childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default HomeScale;
