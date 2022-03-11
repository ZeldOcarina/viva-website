import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Button from "./Button";
//import VimeoEmbed from "./VimeoEmbed";
import ImageVideo from "./ImageVideo";

const StyledCaseStudy = styled.div`
  .case-study-banner {
    height: 40rem;

    ${respond(
      "tab-port",
      css`
        height: auto;
      `
    )}
  }

  h2 {
    margin-top: 4rem;
  }

  .intro {
    margin-top: 1.5rem;
    font-size: 1.8rem;
    line-height: 1.4;

    ${respond(
      "small-phone-land",
      css`
        font-size: 1.6rem;
        text-align: left;
      `
    )}
  }

  .feature-list {
    ${respond(
      "iphone-5",
      css`
        padding: 0;
        margin: 0;
      `
    )}
  }

  .feature-item {
    list-style: inside;
    font-size: 1.6rem;

    ${respond(
      "iphone-5",
      css`
        list-style: none;
        font-size: 1.4rem;
      `
    )}
  }

  .bold {
    font-weight: 600;
  }

  .btn {
    margin-top: 3rem;
  }

  .stuff-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    max-width: 100%;

    .left-part {
      ${respond(
        "phone-port",
        css`
          width: 95vw;
        `
      )}
    }

    ${respond(
      "small-phone-land",
      css`
        grid-template-columns: 1fr;
        margin-bottom: 2rem;
      `
    )}
    ${respond(
      "phone-port",
      css`
        width: 95%;
        margin: 0 auto 2rem auto;
      `
    )}

    &--template {
      margin-top: 6rem;
      gap: 6rem;

      ${respond(
        "small-phone-land",
        css`
          margin-top: 4rem;
          gap: 3rem;
        `
      )}
    }

    .left-part {
      max-width: 100%;

      .image {
        ${respond(
          "phone-port",
          css`
            max-width: 100%;
          `
        )}
      }
    }

    .right-part {
      ${respond(
        "small-phone-land",
        css`
          display: grid;
          grid-template-columns: 1fr;
          justify-items: center;
        `
      )}
    }
  }

  .logo {
    width: 50%;
    margin-bottom: 2rem;

    ${respond(
      "small-phone-land",
      css`
        width: 35%;
      `
    )}
  }

  .case-study-hr {
    margin: 3rem 0 5rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.301);
  }

  .vimeo-embed {
    margin: 2rem auto;
  }

  .banner-container {
    position: relative;

    &__layer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-color: rgba(0, 48, 98, 0.7);
    }

    h2 {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: 0;
      transform: translate(-50%, -50%);
      color: var(--white);
      font-size: 3em;
      z-index: 2;
      text-align: center;
      width: 100%;

      ${respond(
        "small-phone-land",
        css`
          font-size: 2.5em;
        `
      )}
      ${respond(
        "phone-port",
        css`
          padding: 4rem;
          font-size: 2.2em;
          width: 95%;
          margin-left: auto;
          margin-right: auto;
        `
      )}
       
    ${respond(
        "iphone-5",
        css`
          font-size: 2rem;
        `
      )}
    }
  }

  .btn {
    margin: 0 auto;

    ${respond(
      "phone-port",
      css`
        width: 95% !important;
      `
    )}

    &--read-more {
      margin-top: 3rem;
    }
  }

  .image {
    margin: 3rem 0 3rem 50%;
    transform: translateX(-50%);
    width: max-content;
    max-width: 100%;
  }

  .body {
    max-width: 100%;
  }

  .image-video {
    margin: 4rem auto;

    ${respond(
      "small-phone-land",
      css`
        width: 100%;
        margin: 4rem auto 0 auto;
      `
    )}
  }

  .feature-item {
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }

  .btn--read-more {
    ${respond(
      "small-phone-land",
      css`
        margin: 4rem auto 0 auto;
        display: none;
      `
    )}

    &--mobile {
      display: none;
      margin: 0 auto 0 auto;
      ${respond(
        "small-phone-land",
        css`
          display: block;
        `
      )}
    }
  }
`;

const CaseStudy = ({ caseStudy, last, isTemplatePage }) => {
  const {
    id,
    attributes: {
      video: {
        videoId,
        vimeoH,
        videoThumb: {
          data: {
            attributes: { alternativeText: thumbAlt, localFile: videoThumb },
          },
        },
      },
      title,
      bannerImage: {
        data: {
          attributes: { alternativeText, localFile },
        },
      },
      body,
      feature,
      icon: {
        data: {
          attributes: {
            alternativeText: iconAlt,
            localFile: { publicURL },
          },
        },
      },
    },
  } = caseStudy;

  const renderedBody = (
    <div className="body">
      {body.map((element, i) => {
        if (element.text) return <p key={i}>{element.text}</p>;
        return (
          <GatsbyImage
            key={i}
            className="image"
            image={getImage(element.image.data.attributes.localFile)}
            alt={element.image.data.attributes.alternativeText}
          />
        );
      })}
    </div>
  );

  return (
    <StyledCaseStudy>
      <section key={id}>
        {isTemplatePage ? (
          <div className="banner-container">
            <div className="banner-container__layer"></div>
            <GatsbyImage className="case-study-banner" image={getImage(localFile)} alt={alternativeText} />
            <h2 className="title">{title}</h2>
          </div>
        ) : (
          <>
            <GatsbyImage className="case-study-banner" image={getImage(localFile)} alt={alternativeText} />
            <h2 className="title">{title}</h2>
          </>
        )}

        {/* {isTemplatePage && <VimeoEmbed videoId={videoId} vimeoH={vimeoH} videoTitle={title} />} */}
        {isTemplatePage && (
          <ImageVideo
            image={getImage(videoThumb)}
            alt={thumbAlt}
            video={videoId}
            vimeoH={vimeoH}
            className="image-video"
          />
        )}
        <div className={isTemplatePage ? "stuff-container stuff-container--template" : "stuff-container"}>
          <div className="left-part">
            {!isTemplatePage && (
              <>
                <p className="intro">{body[0].text}</p>
                <Button isInternal url={`/case-studies/${caseStudy.attributes.slug || ""}`} className="btn--read-more">
                  Read More
                </Button>
              </>
            )}
            {isTemplatePage && renderedBody}
          </div>
          <div className="right-part">
            <img className="logo" src={publicURL} alt={iconAlt} />
            <ul className="feature-list">
              {feature.map(({ id, feature, featureIntro }) => {
                return (
                  <li key={id} className="feature-item">
                    <span className="bold">{featureIntro}</span> {feature}
                  </li>
                );
              })}
            </ul>
          </div>
          {!isTemplatePage && (
            <>
              {/* <p className="intro">{body[0].text}</p> */}
              <Button
                isInternal
                url={`/case-studies/${caseStudy.attributes.slug || ""}`}
                className="btn--read-more--mobile"
              >
                Read More
              </Button>
            </>
          )}
        </div>
      </section>
      {isTemplatePage && (
        <Button url="https://calendly.com/viva-concepts/schedule-a-call" className="btn">
          Schedule Your Consultation
        </Button>
      )}
      {!last && !isTemplatePage && <hr className="case-study-hr" />}
    </StyledCaseStudy>
  );
};

export default CaseStudy;
