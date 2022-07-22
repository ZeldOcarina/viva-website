import React from "react";
import styled, { css } from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import respond from "../styles/abstracts/mediaqueries";

import Layout from "../layout/Layout";
import Seo from "../components/Seo";
import ScheduleConsultationButton from "../components/ScheduleConsultationButton";

const StyledBlogTemplate = styled.main`
  margin: 6rem auto;
  min-height: calc(100vh - 7rem - 10rem - 19rem);

  .image {
    width: 100%;
    margin-bottom: 2rem;
  }
  .content {
    width: 75%;

    ${respond(
      "phone-port",
      css`
        width: 95%;
        margin: 0 auto;
      `
    )}

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

    ${respond(
      "phone-port",
      css`
        width: 95%;
        margin: 0 auto 2rem auto;
        text-align: left;
        max-width: 100%;
      `
    )}
  }

  .btn--read-more {
    margin-top: 3rem;
  }
`;

const BlogTemplate = (props) => {
//   const {
//     pageContext: {
//       blogPost: {
//         post: {
//           attributes: {
//             copy,
//             title,
//             image: {
//               data: {
//                 attributes: { localFile, alternativeText },
//               },
//             },
//           },
//         },
//       },
//     },
//     location,
//   } = props;

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
