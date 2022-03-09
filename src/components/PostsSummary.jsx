import React from "react";
import styled, { css } from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Button from "./Button";
import respond from "../styles/abstracts/mediaqueries";

const StyledPostsSummary = styled.main`
  ${respond(
    "small-phone-land",
    css`
      margin-bottom: 2rem;
    `
  )}
  .image {
    width: 100%;
    margin-bottom: 2rem;
  }
  .summary-paragraph {
    width: 75%;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    ${respond(
      "small-phone-land",
      css`
        width: 100%;
      `
    )}
  }

  h2 {
    margin-bottom: 2rem;
    max-width: 75%;

    ${respond(
      "small-phone-land",
      css`
        max-width: 100%;
      `
    )}
  }

  .btn--read-more {
    margin-top: 3rem;
  }
`;

const PostsSummary = ({ postsData }) => {
  return (
    <StyledPostsSummary className="container">
      {postsData.map(
        ({
          attributes: {
            title,
            copy,
            image: {
              data: {
                attributes: { localFile, alternativeText },
              },
            },
          },
          id,
          slug,
        }) => {
          const paragraphs = copy.split("\n").filter((text) => text !== "");

          return (
            <section key={id}>
              <GatsbyImage image={getImage(localFile)} alt={alternativeText} className="image" />
              <h2>{title}</h2>
              {paragraphs.map((paragraph, i) => {
                if (i >= 3) return "";
                return (
                  <p className="summary-paragraph" key={i}>
                    {paragraph}
                  </p>
                );
              })}
              <Button isInternal url={`/blog/${slug}`} className="btn--read-more">
                Read More
              </Button>
            </section>
          );
        }
      )}
    </StyledPostsSummary>
  );
};

export default PostsSummary;
