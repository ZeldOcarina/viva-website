import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled, { css } from "styled-components";
import SectionTitle from "../components/SectionTitle";
import { getImage } from "gatsby-plugin-image";
import respond from "../styles/abstracts/mediaqueries";

import Button from "../components/Button";
import ImageVideo from "../components/ImageVideo";

const StyledHomeFounder = styled.section`
  text-align: center;

  ${respond(
    "phone-port",
    css`
      padding: 6rem 0;
    `
  )}

  .btn {
    margin: 4rem auto 0 auto;

    ${respond(
      "phone-port",
      css`
        width: 95% !important;
      `
    )}
  }
`;

const HomeFounder = () => {
   
const {founder: {founder: {title, images, videoId, vimeoH, alternativeText, cta, ctaLink}}} = useStaticQuery(query)

  return (
    <StyledHomeFounder className="container">
      <SectionTitle title={title} />
      <ImageVideo image={getImage(images.localFiles[0])} alt={alternativeText} video={videoId} vimeoH={vimeoH} />
      <Button className="btn" url={ctaLink}>
        {cta}
      </Button>
    </StyledHomeFounder>
  );
};

const query = graphql`
   query Founder {
   founder: airtable(data: {blockType: {eq: "Founder"}}, table: {eq: "Home"}) {
    founder: data {
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
      cta
      ctaLink
    }
  }
   }
`

export default HomeFounder;
