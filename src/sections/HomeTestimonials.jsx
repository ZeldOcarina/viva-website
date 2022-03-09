import { graphql, useStaticQuery } from "gatsby";

import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";
import CaseStudiesSummary from "./case-studies/CaseStudiesSummary";

const StyledHomeTestimonials = styled.section`
  text-align: center;
  padding-bottom: 3rem;
  h2 {
    margin-bottom: 2rem;
  }
  .subtitle {
    width: 80%;
    margin: 0 auto;
  }
  .testimonials-container {
    display: flex;
    margin-top: 4rem;
    gap: 2rem;

    ${respond(
      "small-phone-land",
      css`
        gap: 0;
      `
    )}
  }
  .card {
    text-align: left;
    font-size: 1.6rem;
    width: calc(33% - 2rem);

    blockquote {
      font-style: italic;
      font-weight: 300;
      margin-bottom: 2rem;
    }

    p {
      margin-bottom: 3rem;
    }
    .video-wrapper {
      width: 100%;
      margin: 2rem 0;
    }

    ul {
      list-style-position: outside;

      li {
        &:not(:last-child) {
          margin-bottom: 0.5rem;
        }
      }
    }

    .features-container {
      display: flex;
      gap: 4rem;
      margin-bottom: 2rem;
      font-size: 1.4rem;
      align-items: flex-start;
    }
  }
`;

const HomeTestimonials = () => {
  const {
    caseStudies: { data },
    homeTestimonialsData: {
      data: {
        attributes: { title, subtitle },
      },
    },
  } = useStaticQuery(query);

  console.log(data);

  return (
    <StyledHomeTestimonials className="container">
      <h2>{title}</h2>
      <p className="subtitle">{subtitle}</p>
      <div className="testimonials-container">
        <CaseStudiesSummary caseStudiesData={data} />;
      </div>
    </StyledHomeTestimonials>
  );
};

const query = graphql`
  query HomeCaseStudies {
    caseStudies: strapiApiCaseStudiesPopulate0BodyImageIconBannerimageFeatureVideoVideothumb {
      data {
        id
        attributes {
          slug
          title
          video {
            videoId
            videoThumb {
              data {
                attributes {
                  alternativeText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
            vimeoH
          }
          bannerImage {
            data {
              attributes {
                alternativeText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
          body {
            text
            image {
              data {
                attributes {
                  alternativeText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
          feature {
            feature
            featureIntro
            id
          }
          icon {
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
    homeTestimonialsData: strapiApiHomeTestimonialsSectionPopulateHometestimonialPopulate {
      data {
        attributes {
          title
          subtitle
        }
      }
    }
  }
`;

export default HomeTestimonials;
