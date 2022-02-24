import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Seo from "../components/Seo";
import Layout from "../layout/Layout";
import InternalPageHero from "../sections/case-studies/InternalPageHero";
import ScheduleConsultationButton from "../components/ScheduleConsultationButton";
import PostsSummary from "../components/PostsSummary";

function BlogListPage({
  location,
  data: {
    file,
    posts: { data: posts },
  },
}) {
  return (
    <>
      <Seo location={location} title="Viva Concepts | Blog" />
      <Layout>
        <InternalPageHero
          image={getImage(file)}
          imageAlt="Giant tooth on a table with a dental instrument on it."
          title="Blog"
          subtitle="Learn the ropes, from new patient acquisition to referral"
        />
        <PostsSummary postsData={posts} />
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
    posts: strapiApiPostsPopulate {
      data {
        attributes {
          title
          copy
          image {
            data {
              attributes {
                alternativeText
                localFile {
                  childImageSharp {
                    gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                  }
                }
              }
            }
          }
        }
        id
      }
    }
  }
`;

export default BlogListPage;
