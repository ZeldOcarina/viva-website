import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import { getImage } from "gatsby-plugin-image";

import Button from "../components/Button";
import ImageVideo from "../components/ImageVideo";

const StyledHomeFounder = styled.section`
  text-align: center;
  .btn {
    margin: 4rem auto 0 auto;
  }
`;

const HomeFounder = () => {
  const {
    homeFounder: {
      data: {
        attributes: {
          title,
          cta,
          ctaLink,
          videoId,
          videoH,
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
    <StyledHomeFounder className="container">
      <SectionTitle title={title} />
      <ImageVideo image={getImage(localFile)} alt={alternativeText} video={videoId} vimeoH={videoH} />
      <Button className="btn" url={ctaLink}>
        {cta}
      </Button>
    </StyledHomeFounder>
  );
};

const query = graphql`
  query HomeFounder {
    homeFounder: strapiApiHomeFounderSectionPopulate {
      data {
        attributes {
          cta
          ctaLink
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

export default HomeFounder;
