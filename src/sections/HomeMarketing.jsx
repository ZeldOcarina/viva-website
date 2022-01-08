import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const StyledHomeMarketing = styled.section`
  padding-top: 6rem;

  h2 {
    text-align: center;
  }

  .copy {
    p {
      margin-bottom: 1rem;
    }
  }

  .bottom-container {
    display: grid;
    grid-template-columns: 0.7fr 2fr;
    align-items: flex-start;
    gap: 3rem;
    font-size: 1.6rem;
  }

  .red-text {
    margin: 2rem 0;
    color: var(--color-secondary);
    font-weight: 700;
    font-size: 2rem;
  }
`;

const HomeMarketing = () => {
  const {
    homeMarketing: {
      data: {
        attributes: {
          title,
          text,
          redText,
          underlinedWord,
          image: {
            data: {
              attributes: { alternativeText, localFile },
            },
          },
        },
      },
    },
  } = useStaticQuery(query);

  //Parse new lines to paragraphs and filter out empty strings from the array
  const copy = text.split("\n").filter((item) => item);

  return (
    <StyledHomeMarketing className="container">
      <h2 className="mb-4">{title}</h2>
      <div className="bottom-container">
        <div className="left-container">
          <GatsbyImage image={getImage(localFile)} alt={alternativeText} />
          <p className="red-text">
            {redText} <span className="underlined">{underlinedWord}</span>.
          </p>
        </div>

        <div className="copy">
          {copy.map((paragraph, i) => {
            return <p key={i}>{paragraph}</p>;
          })}
        </div>
      </div>
    </StyledHomeMarketing>
  );
};

const query = graphql`
  query HomeMarketing {
    homeMarketing: strapiApiHomeMarketingSectionPopulate {
      data {
        attributes {
          redText
          text
          title
          underlinedWord
          image {
            data {
              attributes {
                alternativeText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
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

export default HomeMarketing;
