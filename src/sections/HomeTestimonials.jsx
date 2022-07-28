import { graphql, useStaticQuery } from "gatsby";

import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";
import CaseStudiesSummary from "./case-studies/CaseStudiesSummary";

const StyledHomeTestimonials = styled.section`
  text-align: center;
  padding-bottom: 3rem;

  ${respond(
    "phone-port",
    css`
      margin-top: 3rem;
      padding-bottom: 0;
    `
  )}

  h2 {
    margin-bottom: 2rem;
  }
  .subtitle {
    width: 80%;
    margin: 0 auto;

    ${respond(
      "phone-port",
      css`
        width: 100%;
      `
    )}
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
//   const {
//     caseStudies: { data },
//     homeTestimonialsData: {
//       data: {
//         attributes: { title, subtitle },
//       },
//     },
//   } = useStaticQuery(query);

const {caseStudies: {caseStudies}, features: {features}} = useStaticQuery(query)

  return (
    <StyledHomeTestimonials className="container">
      {/* <h2>{title}</h2>
      <p className="subtitle">{subtitle}</p> */}
      <div className="testimonials-container">
        <CaseStudiesSummary caseStudiesData={caseStudies} features={features} />
      </div>
    </StyledHomeTestimonials>
  );
};


// It's an old query. I get features as a separate array of all of them

const query = graphql`
   query HomeCaseSudies {
      caseStudies: allAirtable(
         filter: {table: {eq: "CaseStudies"}, data: {blockType: {eq: "CaseStudy"}}}
      ) {
      caseStudies: nodes {
      data {
        itemId
        title
        slug
        videoId
        vimeoH
        bodyText
        bannerImage {
          localFiles {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        bodyImage {
          localFiles {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        icon {
          localFiles {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        image {
          localFiles {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        videoThumb {
          localFiles {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
  features: allAirtable(
    filter: {data: {blockType: {eq: "CaseFeature"}}, table: {eq: "CaseStudies"}}
  ) {
    features: nodes {
      data {
        featureId
        featureIntro
        feature
      }
    }
  }
   }
`

// const query = graphql`
//   query HomeCaseStudies {
//     caseStudies: strapiApiCaseStudiesPopulate0BodyImageIconBannerimageFeatureVideoVideothumb {
//       data {
//         id
//         attributes {
//           slug
//           title
//           video {
//             videoId
//             videoThumb {
//               data {
//                 attributes {
//                   alternativeText
//                   localFile {
//                     childImageSharp {
//                       gatsbyImageData
//                     }
//                   }
//                 }
//               }
//             }
//             vimeoH
//           }
//           bannerImage {
//             data {
//               attributes {
//                 alternativeText
//                 localFile {
//                   childImageSharp {
//                     gatsbyImageData
//                   }
//                 }
//               }
//             }
//           }
//           body {
//             text
//             image {
//               data {
//                 attributes {
//                   alternativeText
//                   localFile {
//                     childImageSharp {
//                       gatsbyImageData
//                     }
//                   }
//                 }
//               }
//             }
//           }
//           feature {
//             feature
//             featureIntro
//             id
//           }
//           icon {
//             data {
//               attributes {
//                 alternativeText
//                 localFile {
//                   publicURL
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     homeTestimonialsData: strapiApiHomeTestimonialsSectionPopulateHometestimonialPopulate {
//       data {
//         attributes {
//           title
//           subtitle
//         }
//       }
//     }
//   }
// `;

export default HomeTestimonials;
