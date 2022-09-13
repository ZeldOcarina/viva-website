import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

const StyledHomeFeatures = styled.section`
  background-color: var(--black);
  color: var(--white);
  padding: 8rem 0;

  h2 {
    text-align: center;
    color: var(--white);
  }

  .features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;

    ${respond(
      "small-phone-land",
      css`
        grid-template-columns: 1fr;
        gap: 5rem;
      `
    )}
  }

  .feature-card {
    text-align: center;

    ${respond(
      "small-phone-land",
      css`
        width: 80%;
        margin: 0 auto;
      `
    )}
    h5 {
      color: var(--white);
      font-size: 2rem;
      margin: 1.5rem 0;
    }
    p {
      font-size: 1.7rem;
      line-height: 1.5;
    }
    img {
      width: 10rem;
    }
  }
`;

function HomeFeatures() {

const {
   homeFeaturesSection: {homeFeaturesSection: {title}},
   homeFeatures: {homeFeatures}
} = useStaticQuery(query)

const sortedFeatures = homeFeatures.sort((a, b) => a.data.itemId - b.data.itemId)

  return (
    <StyledHomeFeatures>
      <div className="container">
        <h2 className="mb-5">{title}</h2>
        <div className="features">
          {sortedFeatures.map(
            (feature, i) => {
              return (
                <div className="feature-card" key={i}>
                  <img src={feature.data.images.localFiles[0].publicURL} alt={feature.data.alternativeText} />
                  <h5>{feature.data.title}</h5>
                  <p>{feature.data.copy}</p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </StyledHomeFeatures>
  );
}



const query = graphql`
   query HomeFeatures {
      homeFeaturesSection: airtable(table: {eq: "Home"}, data: {blockType: {eq: "Features"}}) {
         homeFeaturesSection: data {
         title
         }
      }
      homeFeatures: allAirtable(filter: {data: {blockType: {eq: "Feature"}}, table: {eq: "Home"}}) {
         homeFeatures: nodes {
            data {
               itemId
               title
               copy
               alternativeText
               images{
                  localFiles{
                     publicURL
                  }
               }
            }
         }
      }
   }
`

export default HomeFeatures;
