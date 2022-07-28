import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

const StyledHomeMarketing = styled.section`
  padding-top: 6rem;

  ${respond(
    "phone-port",
    css`
      padding-bottom: 6rem;
    `
  )}

  .image {
    width: 100%;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  .title {
    text-align: center;
    margin-bottom: 4rem;

    ${respond(
      "phone-port",
      css`
        margin-bottom: 2rem;
      `
    )}
  }

  .copy {
    p {
      margin-bottom: 1rem;
    }

    ${respond(
      "phone-port",
      css`
        width: 95%;
        margin: 0 auto;
      `
    )}
  }

  .bottom-container {
    display: grid;
    grid-template-columns: 0.7fr 2fr;
    align-items: flex-start;
    gap: 3rem;
    font-size: 1.6rem;

    ${respond(
      "tab-port",
      css`
        grid-template-columns: 0.7fr 1fr;
      `
    )}
    ${respond(
      "phone-port",
      css`
        grid-template-columns: 1fr;
      `
    )}
  }

  .red-text {
    margin: 2rem 0;
    color: var(--color-secondary);
    font-weight: 700;
    font-size: 2rem;

    ${respond(
      "phone-port",
      css`
        width: 95%;
        margin: 2.5rem auto 0 auto;
      `
    )}
  }
`;

const HomeMarketing = () => {
//   const {
//     homeMarketing: {
//       data: {
//         attributes: {
//           title,
//           text,
//           redText,
//           underlinedWord,
//           image: {
//             data: {
//               attributes: { alternativeText, localFile },
//             },
//           },
//         },
//       },
//     },
//   } = useStaticQuery(query);

const {marketing: {marketing: {title, text, redText, images, underlinedWord, alternativeText}}} = useStaticQuery(query)

  //Parse new lines to paragraphs and filter out empty strings from the array
  const copy = text.split("\n").filter((item) => item);

  return (
    <StyledHomeMarketing className="container">
      <h2 className="title">{title}</h2>
      <div className="bottom-container">
        <div className="left-container">
          <GatsbyImage image={getImage(images.localFiles[0])} alt={alternativeText} className="image" />
          <p className="red-text">
            {redText} <span className="underlined">{underlinedWord}</span>.
          </p>
        </div>

        <div className="copy">
          {copy.map((paragraph, i) => {
            return <p key={i}>{paragraph}</p>;
          })}
        </div>
      </div>
    </StyledHomeMarketing>
  );
};

const query = graphql`
   query Marketing {
      marketing: airtable(table: {eq: "Home"}, data: {blockType: {eq: "Marketing"}}) {
      marketing: data {
      alternativeText
      title
      text
      images {
        localFiles {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
      underlinedWord
      redText
    }
  }
   }
`

// const query = graphql`
//   query HomeMarketing {
//     homeMarketing: strapiApiHomeMarketingSectionPopulate {
//       data {
//         attributes {
//           redText
//           text
//           title
//           underlinedWord
//           image {
//             data {
//               attributes {
//                 alternativeText
//                 localFile {
//                   childImageSharp {
//                     gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default HomeMarketing;
