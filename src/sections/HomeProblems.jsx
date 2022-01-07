import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const StyledHomeProblems = styled.section`
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

  .cta {
    margin: 0 auto;
    background-color: var(--color-secondary);
  }
`;

const HomeProblems = () => {
  const {
    problemsSection: {
      data: {
        attributes: {
          text,
          cta,
          image: {
            data: {
              attributes: { alternativeText, localFile },
            },
          },
          featuredParagraph,
          title,
        },
      },
    },
  } = useStaticQuery(query);

  //Parse new lines to paragraphs and filter out empty strings from the array
  const splittedCopy = featuredParagraph.split("\n").filter((item) => item);

  return (
    <StyledHomeProblems className="container">
      <h2 className="mb-4">{title}</h2>
      <div className="bottom-container">
        <GatsbyImage image={getImage(localFile)} alt={alternativeText} />
        <div className="copy">
          <p className="bold">{featuredParagraph}</p>
          {splittedCopy.map((paragraph, i) => {
            return <p key={i}>{paragraph}</p>;
          })}
        </div>
      </div>
      <Button className="cta mt-2">{cta}</Button>
    </StyledHomeProblems>
  );
};

const query = graphql`
  query HomeProblems {
    problemsSection: strapiApiHomeProblemsSectionPopulate {
      data {
        attributes {
          text
          cta
          featuredParagraph
          title
          image {
            data {
              attributes {
                alternativeText
                localFile {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
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

export default HomeProblems;
