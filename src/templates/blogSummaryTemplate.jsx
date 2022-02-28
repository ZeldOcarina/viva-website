import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import styled from "styled-components";

import Seo from "../components/Seo";
import Layout from "../layout/Layout";
import InternalPageHero from "../sections/case-studies/InternalPageHero";
import ScheduleConsultationButton from "../components/ScheduleConsultationButton";
import PostsSummary from "../components/PostsSummary";
import Paginator from "../components/Paginator";

const StyledBlogSummary = styled.main`
  .paginator {
    margin: 0 auto 4rem auto;
  }
`;

function BlogListPage(props) {
  // const limit = 3;
  // const index = setIndex(location, limit);
  // const currentPagePosts = posts.slice(index, limit + index);
  const {
    location,
    data: {
      file,
      posts: { nodes },
    },
    pageContext: { pageNumber, humanPageNumber, numberOfPages, previousPagePath, nextPagePath },
  } = props;

  const posts = nodes.map((post) => {
    return post.post;
  });

  return (
    <>
      <Seo location={location} title="Viva Concepts | Blog" />
      <Layout>
        <StyledBlogSummary>
          <InternalPageHero
            image={getImage(file)}
            imageAlt="Giant tooth on a table with a dental instrument on it."
            title="Blog"
            subtitle="Learn the ropes, from new patient acquisition to referral"
          />
          <PostsSummary postsData={posts} />
          <Paginator {...{ pageNumber, humanPageNumber, numberOfPages, previousPagePath, nextPagePath }} />
          <ScheduleConsultationButton />
        </StyledBlogSummary>
      </Layout>
    </>
  );
}

export const query = graphql`
  query Blog($skip: Int!, $limit: Int!) {
    file(relativePath: { eq: "blog-banner.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
      }
    }
    posts: allBlogPost(sort: { order: DESC, fields: post___attributes___createdAt }, limit: $limit, skip: $skip) {
      nodes {
        post {
          slug
          attributes {
            title
            copy
            image {
              data {
                attributes {
                  alternativeText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(quality: 100)
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
  }
`;

export default BlogListPage;
