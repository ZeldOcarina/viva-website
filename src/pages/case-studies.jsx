import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Seo from "../components/Seo";
import Layout from "../layout/Layout";
import InternalPageHero from "../sections/case-studies/InternalPageHero";
import CaseStudiesSummary from "../sections/case-studies/CaseStudiesSummary";
import ScheduleConsultationButton from "../components/ScheduleConsultationButton";
import { getImage } from "gatsby-plugin-image";

function CaseStudiesPage({location}) {
   const {
      caseStudyPage: {caseStudyPage: {image}},
      caseStudies: {caseStudies},
      features: {features}
   } = useStaticQuery(query)
  return (
    <>
      <Seo location={location} />
      <Layout>
        <InternalPageHero
          image={getImage(image.localFiles[0])}
          imageAlt="Smiling dentist girl"
          title="Case Studies"
          subtitle="Viva System drives new patients to your practice"
        />
        <CaseStudiesSummary caseStudiesData={caseStudies} features={features} />
        <ScheduleConsultationButton />
      </Layout>
    </>
  );
}

const query = graphql`
   query CaseStudies {
      caseStudyPage: airtable(table: {eq: "CaseStudies"}, data: {blockType: {eq: "CaseStudiesPage"}}){
         caseStudyPage: data {
            image{
               localFiles{
                  childImageSharp{
                     gatsbyImageData
                  }
               }
            }
         }
      }
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
        featureItemId
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
            publicURL
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
        featureItemId
        featureId
        featureIntro
        feature
      }
    }
  }
   }
`

export default CaseStudiesPage;
