import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const StyledHomeMorePatients = styled.section`
  padding-top: 2rem;

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

const HomeMorePatients = () => {
  const {
    morePatientsSection: {
      data: {
        attributes: {
          copy,
          cta,
          image: {
            data: {
              attributes: { alternativeText, localFile },
            },
          },
          subtitle,
          title,
        },
      },
    },
  } = useStaticQuery(query);

  //Parse new lines to paragraphs and filter out empty strings from the array
  const splittedCopy = copy.split("\n").filter((item) => item);

  return (
    <StyledHomeMorePatients className="container">
      <h2 className="mb-4">{title}</h2>
      <div className="bottom-container">
        <GatsbyImage image={getImage(localFile)} alt={alternativeText} />
        <div className="copy">
          <p className="bold">{subtitle}</p>
          {splittedCopy.map((paragraph, i) => {
            return <p key={i}>{paragraph}</p>;
          })}
        </div>
      </div>
      <Button className="cta mt-2">{cta}</Button>
    </StyledHomeMorePatients>
  );
};

const query = graphql`
  query HomeMorePatients {
    morePatientsSection: strapiApiHomeMorePatientsSectionPopulate {
      data {
        attributes {
          copy
          cta
          subtitle
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

export default HomeMorePatients;
