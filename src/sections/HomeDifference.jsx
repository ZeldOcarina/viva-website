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

const {
   homeDifferenceSection: {homeDifferenceSection: {title}},
   homeDifference: {homeDifference}
} = useStaticQuery(query)

const sortedDifferences = homeDifference.sort((a, b) => a.data.itemId - b.data.itemId)

  return (
    <StyledHomeDifference className="container">
      <h2>{title}</h2>
      <div className="differences">
        {sortedDifferences.map(
          (difference, i) => {
            return (
              <article className="difference" key={i}>
                <img className="difference-image" src={difference.data.images.localFiles[0].publicURL} alt={difference.data.alternativeText} />
                <h5 className="difference-title">{difference.data.title}</h5>
              </article>
            );
          }
        )}
      </div>
    </StyledHomeDifference>
  );
};

const query = graphql`
   query HomeDifference {
      homeDifferenceSection: airtable(table: {eq: "Home"}, data: {blockType: {eq: "DifferenceSection"}}) {
         homeDifferenceSection: data {
            title
         }
      }
      homeDifference: allAirtable(
         filter: {data: {blockType: {eq: "Difference"}}, table: {eq: "Home"}}
      ) {
         homeDifference: nodes {
            data {
            itemId
            title
            alternativeText
            images {
               localFiles {
                  publicURL
               }
            }
            }
         }
      }
   }
`



export default HomeDifference;
