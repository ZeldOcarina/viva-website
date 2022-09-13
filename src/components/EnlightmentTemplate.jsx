import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

import Button from "../components/Button";
import ImageVideo from "../components/ImageVideo";
import Divider from "../components/Divider";

import { getImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  ${({ last }) =>
      last
         ? css`
          margin-bottom: 0;
        `
         : css`
          margin-bottom: 6rem;
        `}

  h5,
  h2 {
    text-transform: capitalize;
  }

  .enlightment-title {
    width: 60%;
    margin: 0 auto;

    ${respond(
            "small-phone-land",
            css`
        width: 100%;
      `
         )}
  }

  h5 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  .features {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4rem;
    margin: 4rem 0;

    ${respond(
            "tab-port",
            css`
        padding: 0;
        gap: 2rem;
      `
         )}
    ${respond(
            "phone-land",
            css`
        padding: 0;
        gap: 2rem;
      `
         )}
    ${respond(
            "small-phone-land",
            css`
        width: 100%;
        justify-content: space-evenly;
      `
         )}

    ${respond(
            "phone-port",
            css`
        grid-template-columns: 1fr;
      `
         )}

    .feature {
      width: 40%;

      ${respond(
            "small-phone-land",
            css`
          width: 45%;
        `
         )}
      ${respond(
            "phone-port",
            css`
          width: 95%;
          margin: 0 auto;
        `
         )}
    }
  }

  .last-feature {
    width: 50%;
    margin: 0 auto;

    ${respond(
            "tab-land",
            css`
        width: 50% !important;
      `
         )}
    ${respond(
            "phone-land",
            css`
        width: 75% !important;
        margin: 5rem auto 0 auto;
      `
         )}
    ${respond(
            "phone-port",
            css`
        width: 100% !important;
      `
         )}

    h5,
    p {
      text-align: center;

      ${respond(
            "phone-port",
            css`
          text-align: left;
        `
         )}
    }

    .text-center {
      ${respond(
            "phone-port",
            css`
          text-align: left !important;
        `
         )}
    }

    ${respond(
            "phone-port",
            css`
        width: 95% !important;
        margin: 0 auto;
      `
         )}
  }

  .btn {
    margin-left: 50%;
    margin-top: 4rem;
    transform: translateX(-50%);
    text-transform: capitalize;

    ${respond(
            "phone-port",
            css`
        width: max-content;
      `
         )}
  }

  .enlightment-title {
    margin-top: 4rem;
  }

  .video-wrapper {
    width: 60%;

    ${respond(
            "phone-land",
            css`
        width: 80%;
      `
         )}
    ${respond(
            "phone-port",
            css`
        width: 100%;
      `
         )}
  }

  .new-title {
    width: 60%;
    margin-top: 0;

    ${respond(
            "tab-port",
            css`
        width: 100%;
      `
         )}
  }

  hr {
  }

  .button {
    margin: 0 auto;
    ${respond(
            "phone-port",
            css`
        width: 95% !important;
        margin: 0 auto;
      `
         )}
  }
`;

const EnlightmentTemplate = ({ data }) => {

   const image = getImage(data.image.localFiles[0].childImageSharp);

   return (
      <Wrapper>
         <article>
            <ImageVideo alt={data.alternativeText} image={image} noVideo={true} />
            <h2 className="text-center enlightment-title">{data.title}</h2>
            <div className="features">
               <div className="feature">
                  <h5>{data.oldWayTitle}</h5>
                  <p>{data.oldWayCopy}</p>
               </div>
               <div className="feature">
                  <h5>{data.newWayTitle}</h5>
                  <p>{data.newWayCopy}</p>
               </div>
               <div className="feature">
                  <h5>{data.oldResultTitle}</h5>
                  <p>{data.oldResultCopy}</p>
               </div>
               <div className="feature">
                  <h5>{data.newResultTitle}</h5>
                  <p>{data.newResultCopy}</p>
               </div>
               {data.hasInsight && (
                  <div className="feature last-feature">
                     <h5 className="text-center">{data.insightTitle}</h5>
                     <p className="text-center">{data.insightCopy}</p>
                  </div>
               )}
            </div>
            {data.hasCta && (
               <Button text={data.cta} url={data.ctaLink} className="button">
                  {data.cta}
               </Button>
            )}
            <Divider />
         </article>
      </Wrapper>
   );
};

export default EnlightmentTemplate;
