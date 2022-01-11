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
  }

  h5 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  .features {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    grid-template-columns: 1fr 1fr;
    margin: 4rem 0;
    justify-content: center;

    ${respond(
      "phone-port",
      css`
        grid-template-columns: 1fr;
      `
    )}

    .feature {
      width: 40%;
    }
  }

  .last-feature {
    width: 50%;
    margin: 0 auto;

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

    ${respond(
      "phone-port",
      css`
        width: 100%;
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
`;

const EnlightmentTemplate = ({
  last,
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
    <Wrapper last={last}>
      <article>
        <ImageVideo alt={alternativeText} image={image} video={videoId} vimeoH={vimeoH} noVideo={noVideo} />
        <h2 className="text-center enlightment-title">{title}</h2>
        <div className="features">
          {textBlock.map(({ id, text, title, hasTextCenter }) => {
            return (
              <div className="feature" key={id}>
                <h5 className={hasTextCenter ? "text-center" : ""}>{title}</h5>
                <p className={hasTextCenter ? "text-center" : ""}>{text}</p>
              </div>
            );
          })}
        </div>
        {hasCta && (
          <Button text={cta} url={ctaLink}>
            {cta}
          </Button>
        )}
        <Divider />
      </article>
    </Wrapper>
  );
};

export default EnlightmentTemplate;
