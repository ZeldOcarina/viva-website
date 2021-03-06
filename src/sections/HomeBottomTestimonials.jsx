import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

import ImageVideo from "../components/ImageVideo";

const StyledHomeBottomTestimonials = styled.section`
  text-align: center;

  ${respond(
    "phone-port",
    css`
      padding: 0 !important;
    `
  )}

  .title {
    margin-bottom: 3rem;
  }

  .video {
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
`;

const HomeBottomTestimonials = () => {
  const {
    bottomTestimonials: {
      data: {
        attributes: { title, videoTestimonial },
      },
    },
  } = useStaticQuery(query);

  return (
    <StyledHomeBottomTestimonials className="container">
      <h2 className="title">{title}</h2>
      <div className="video-container">
        {videoTestimonial.map(
          ({
            videoId,
            vimeoH,
            id,
            videoThumbnail: {
              data: {
                attributes: { localFile, alternativeText },
              },
            },
          }) => {
            return (
              <ImageVideo
                key={id}
                className="video"
                image={getImage(localFile)}
                alt={alternativeText}
                video={videoId}
                vimeoH={vimeoH}
              />
            );
          }
        )}
      </div>
    </StyledHomeBottomTestimonials>
  );
};

const query = graphql`
  query HomeBottomTestimonials {
    bottomTestimonials: strapiApiHomeClientTestimonialsBottomSectionPopulateVideotestimonialPopulate {
      data {
        attributes {
          title
          videoTestimonial {
            videoId
            vimeoH
            id
            videoThumbnail {
              data {
                attributes {
                  alternativeText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
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

export default HomeBottomTestimonials;
