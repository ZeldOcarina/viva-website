import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";

import Layout from "../layout/Layout";
import Seo from "../components/Seo";
import ScheduleConsultationButton from "../components/ScheduleConsultationButton";

const StyledBlogTemplate = styled.main`
  margin: 6rem auto;
  .image {
    width: 100%;
    margin-bottom: 2rem;
  }
  .content {
    width: 75%;

    p {
      margin-bottom: 1.5rem;
    }
  }

  .content img,
  .content p img {
    max-width: 100%;
  }

  h2 {
    margin-bottom: 2rem;
    max-width: 75%;
  }

  .btn--read-more {
    margin-top: 3rem;
  }
`;

const BlogTemplate = (props) => {
  const {
    pageContext: {
      blogPost: {
        post: {
          attributes: {
            copy,
            title,
            image: {
              data: {
                attributes: { localFile, alternativeText },
              },
            },
          },
        },
      },
    },
    location,
  } = props;

  return (
    <>
      <Seo location={location} title="Viva Concepts | Blog" />
      <Layout>
        <StyledBlogTemplate className="container">
          <GatsbyImage image={getImage(localFile)} alt={alternativeText} className="image" />
          <h2>{title}</h2>
          <div className="content">
            <ReactMarkdown>{copy}</ReactMarkdown>
          </div>
        </StyledBlogTemplate>
        <ScheduleConsultationButton />
      </Layout>
    </>
  );
};

export default BlogTemplate;
