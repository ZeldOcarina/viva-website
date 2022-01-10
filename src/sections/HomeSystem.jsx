import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const StyledHomeSystem = styled.section`
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

  .button {
    background-color: var(--color-secondary);
    margin: 3rem auto 0 auto;
  }
`;

const HomeSystem = () => {
  const {
    homeSystem: {
      data: {
        attributes: {
          title,
          text,
          firstBoldParagraph,
          cta,
          ctaLink,
          image: {
            data: [
              {
                attributes: { alternativeText, localFile },
              },
            ],
          },
        },
      },
    },
  } = useStaticQuery(query);

  // console.log(attributes);
  //Parse new lines to paragraphs and filter out empty strings from the array
  const copy = text.split("\n").filter((item) => item);

  return (
    <StyledHomeSystem className="container">
      <h2 className="mb-4">{title}</h2>
      <div className="bottom-container">
        <div className="left-container">
          <GatsbyImage image={getImage(localFile)} alt={alternativeText} />
        </div>

        <div className="copy">
          <p className="bold">{firstBoldParagraph}</p>
          {copy.map((paragraph, i) => {
            return <p key={i}>{paragraph}</p>;
          })}
        </div>
      </div>
      <Button className="button" url={ctaLink}>
        {cta}
      </Button>
    </StyledHomeSystem>
  );
};

const query = graphql`
  query HomeSystem {
    homeSystem: strapiApiHomeSystemDeliversSectionPopulate {
      data {
        attributes {
          cta
          ctaLink
          firstBoldParagraph
          text
          title
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

export default HomeSystem;
