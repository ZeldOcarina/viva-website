import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/Seo";
import Layout from "../layout/Layout";
import InternalPageHero from "../sections/case-studies/InternalPageHero";
import CaseStudiesSummary from "../sections/case-studies/CaseStudiesSummary";
import ScheduleConsultationButton from "../components/ScheduleConsultationButton";
import { getImage } from "gatsby-plugin-image";

function CaseStudiesPage({
  location,
  data: {
    file,
    caseStudies: { data: caseStudiesData },
  },
}) {
  return (
    <>
      <Seo location={location} />
      <Layout>
        <InternalPageHero
          image={getImage(file)}
          imageAlt="Smiling dentist girl"
          title="Case Studies"
          subtitle="Viva System drives new patients to your practice"
        />
        <CaseStudiesSummary caseStudiesData={caseStudiesData} />
        <ScheduleConsultationButton />
      </Layout>
    </>
  );
}

export const query = graphql`
  query CaseStudies {
    file(relativePath: { eq: "case-studies-banner.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
      }
    }
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
  }
`;

export default CaseStudiesPage;
