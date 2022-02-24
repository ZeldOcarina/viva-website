import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/Seo";
import Layout from "../layout/Layout";
import InternalPageHero from "../sections/case-studies/InternalPageHero";
import ScheduleConsultationButton from "../components/ScheduleConsultationButton";
import { getImage } from "gatsby-plugin-image";

function BlogListPage({ location, data: { file } }) {
  return (
    <>
      <Seo location={location} />
      <Layout>
        <InternalPageHero
          image={getImage(file)}
          imageAlt="Giant tooth on a table with a dental instrument on it."
          title="Blog"
          subtitle="Learn the ropes, from new patient acquisition to referral"
        />
        {/* <CaseStudiesSummary caseStudiesData={caseStudiesData} /> */}
        <ScheduleConsultationButton />
      </Layout>
    </>
  );
}

export const query = graphql`
  query Blog {
    file(relativePath: { eq: "blog-banner.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
      }
    }
  }
`;

export default BlogListPage;
