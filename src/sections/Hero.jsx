import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";
import { useMediaQuery } from "react-responsive";

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
   const isMobile = useMediaQuery({ query: "(max-width: 28.125em)" });


   const { heroData: { heroData: {
      title, titleSecondPart, subtitle, videoId, vimeoH, images, alternativeText
   } } } = useStaticQuery(query);

   return (
      <StyledHero className="container">
         {isMobile ? (
            <h1>
               {title} {titleSecondPart}
            </h1>
         ) : (
            <h1>
               {title}
               <br />
               {titleSecondPart}
            </h1>
         )}

         <p>{subtitle}</p>
         <ImageVideo image={getImage(images.localFiles[0])} alt={alternativeText} video={videoId} vimeoH={vimeoH} />
      </StyledHero>
   );
};

const query = graphql`
  query HomeHero {
   heroData: airtable(table: {eq: "Home"}, data: {blockType: {eq: "Hero"}}) {
    heroData: data {
      alternativeText
      subtitle
      title
      titleSecondPart
      videoId
      vimeoH
      images {
        localFiles {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
  }
`

export default Hero;


