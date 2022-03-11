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
        gap: 0;
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
      "phone-land",
      css`
        width: 75% !important;
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
    ${respond(
      "phone-port",
      css`
        width: 95% !important;
        margin: 0 auto;
      `
    )}
  }
`;

const EnlightmentTemplate = ({
  noVideo,
  attributes: {
    cta,
    ctaLink,
    hasCta,
    textBlock,
    title,
    videoId,
    videoThumb: {
      data: {
        attributes: { alternativeText, localFile },
      },
    },
    vimeoH,
  },
}) => {
  const image = getImage(localFile);
  return (
    <Wrapper>
      <article>
        <ImageVideo alt={alternativeText} image={image} video={videoId} vimeoH={vimeoH} noVideo={noVideo} />
        <h2 className="text-center enlightment-title">{title}</h2>
        <div className="features">
          {textBlock.map(({ id, text, title, hasTextCenter }, i) => {
            const isLarge = title.toLowerCase() === "unique useful insight";
            return (
              <div className={isLarge ? "feature last-feature" : "feature"} key={id}>
                <h5 className={hasTextCenter ? "text-center" : ""}>{title}</h5>
                <p className={hasTextCenter ? "text-center" : ""}>{text}</p>
              </div>
            );
          })}
        </div>
        {hasCta && (
          <Button text={cta} url={ctaLink} className="button">
            {cta}
          </Button>
        )}
        <Divider />
      </article>
    </Wrapper>
  );
};

export default EnlightmentTemplate;
