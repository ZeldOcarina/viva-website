import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import styled, { css } from "styled-components";

import ImageVideo from "../components/ImageVideo";
import SectionTitle from "../components/SectionTitle";
import respond from "../styles/abstracts/mediaqueries";

const StyledHomeScale = styled.section`
  text-align: center;

  .title {
    max-width: 50%;

    ${respond(
      "tab-land",
      css`
        max-width: 60%;
      `
    )}
    ${respond(
      "tab-port",
      css`
        max-width: 70%;
      `
    )}
    ${respond(
      "phone-port",
      css`
        max-width: 100%;
      `
    )}
  }
`;

const HomeScale = () => {

const {scale: {scale: {title, images, videoId, vimeoH, alternativeText}}} = useStaticQuery(query)

  return (
    <StyledHomeScale className="container">
      <SectionTitle title={title} className="title" />
      <ImageVideo image={getImage(images.localFiles[0])} alt={alternativeText} video={videoId} vimeoH={vimeoH} />
    </StyledHomeScale>
  );
};

const query = graphql`
   query Scale {
   scale: airtable(data: {blockType: {eq: "Scale"}}, table: {eq: "Home"}) {
    scale: data {
      title
      videoId
      vimeoH
      images {
        localFiles {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          }
        }
      }
      alternativeText
    }
  }
   }
`

export default HomeScale;
