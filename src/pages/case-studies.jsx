import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/Seo";
import Layout from "../layout/Layout";
import CaseStudiesHero from "../sections/case-studies/CaseStudiesHero";
import CaseStudiesSummary from "../sections/case-studies/CaseStudiesSummary";

function CaseStudiesPage({
  location,
  data: {
    caseStudies: { data: caseStudiesData },
  },
}) {
  return (
    <>
      <Seo location={location} />
      <Layout>
        <CaseStudiesHero />
        <CaseStudiesSummary caseStudiesData={caseStudiesData} />
      </Layout>
    </>
  );
}

export const query = graphql`
  query CaseStudies {
    caseStudies: strapiApiCaseStudiesPopulate0BodyImageIconBannerimageFeatureVideo {
      data {
        id
        attributes {
          slug
          title
          video {
            videoId
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
  }
`;

export default CaseStudiesPage;
