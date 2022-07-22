import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

const StyledHomeDifference = styled.section`
  text-align: center;
  .differences {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    width: 85%;
    margin: 4rem auto 0 auto;

    ${respond(
      "small-phone-land",
      css`
        width: 100%;
        justify-content: space-evenly;
      `
    )}

    .difference {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 25rem;
      gap: 2rem;

      ${respond(
        "small-phone-land",
        css`
          width: 15rem;
        `
      )}
    }
    .difference-title {
      text-transform: uppercase;
      font-size: 1.9rem;
    }

    .difference-title {
    }
    .difference-image {
    }
  }
`;

const HomeDifference = () => {
//   const {
//     homeDifference: {
//       data: {
//         attributes: { title, difference },
//       },
//     },
//   } = useStaticQuery(query);

  return (
    <StyledHomeDifference className="container">
      <h2>{title}</h2>
      <div className="differences">
        {difference.map(
          ({
            title,
            id,
            icon: {
              data: [
                {
                  attributes: {
                    alternativeText,
                    localFile: { publicURL },
                  },
                },
              ],
            },
          }) => {
            return (
              <article className="difference" key={id}>
                <img className="difference-image" src={publicURL} alt={alternativeText} />
                <h5 className="difference-title">{title}</h5>
              </article>
            );
          }
        )}
      </div>
    </StyledHomeDifference>
  );
};

// const query = graphql`
//   query HomeDifference {
//     homeDifference: strapiApiHomeVivaDifferenceSectionPopulateDifferencePopulate {
//       data {
//         attributes {
//           title
//           difference {
//             title
//             id
//             icon {
//               data {
//                 attributes {
//                   alternativeText
//                   localFile {
//                     publicURL
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

export default HomeDifference;
