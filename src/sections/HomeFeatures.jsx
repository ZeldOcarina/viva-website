import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledHomeFeatures = styled.section`
  background-color: var(--black);
  color: var(--white);
  padding: 8rem 0;

  h2 {
    text-align: center;
    color: var(--white);
  }

  .features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }

  .feature-card {
    text-align: center;
    h5 {
      color: var(--white);
      font-size: 2rem;
      margin: 1.5rem 0;
    }
    p {
      font-size: 1.7rem;
      line-height: 1.5;
    }
    img {
      width: 10rem;
    }
  }
`;

function HomeFeatures() {
  const {
    homeFeatures: {
      data: {
        attributes: { title, homeFeature },
      },
    },
  } = useStaticQuery(query);

  return (
    <StyledHomeFeatures>
      <div className="container">
        <h2 className="mb-5">{title}</h2>
        <div className="features">
          {homeFeature.map((feature) => {
            console.log(feature);
            const {
              description,
              id,
              title,
              featureImage: {
                data: {
                  attributes: {
                    alternativeText,
                    localFile: { publicURL },
                  },
                },
              },
            } = feature;

            return (
              <div className="feature-card" key={id}>
                <img src={publicURL} alt={alternativeText} />
                <h5>{title}</h5>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </StyledHomeFeatures>
  );
}

const query = graphql`
  query HomeFeatures {
    homeFeatures: strapiApiHomeFeaturesSectionPopulateHomefeaturePopulate {
      data {
        attributes {
          title
          homeFeature {
            id
            description
            title
            featureImage {
              data {
                attributes {
                  alternativeText
                  localFile {
                    publicURL
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

export default HomeFeatures;
