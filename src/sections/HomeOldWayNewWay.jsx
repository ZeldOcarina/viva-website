import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

import EnlightmentTemplate from "../components/EnlightmentTemplate";

const StyledOldWayNewWay = styled.section`
  font-size: 1.8rem;
  .container {
    ${respond(
      "phone-port",
      css`
        padding: 0 !important;
        width: 100%;
      `
    )}
  }
`;

const OldWayNewWay = () => {
//   const {
//     oldWayNewWay: { data },
//   } = useStaticQuery(query);

  return (
    <StyledOldWayNewWay>
      <div className="container">
        {data.map((article, i) => {
          const last = i + 1 === data.length;
          return <EnlightmentTemplate {...article} key={article.id} last={last} noVideo={true} />;
        })}
      </div>
    </StyledOldWayNewWay>
  );
};

// const query = graphql`
//   query HomeOldWayNewWay {
//     oldWayNewWay: strapiApiOldWayAndNewWaysPopulate {
//       data {
//         attributes {
//           cta
//           ctaLink
//           hasCta
//           title
//           videoId
//           vimeoH
//           videoThumb {
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
//           textBlock {
//             id
//             text
//             title
//             hasTextCenter
//           }
//         }
//         id
//       }
//     }
//   }
// `;

export default OldWayNewWay;
