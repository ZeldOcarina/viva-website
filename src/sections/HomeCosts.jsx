import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";
import Button from "../components/Button";

import listIcon from "../images/icons/green-list-icon.svg";
import respond from "../styles/abstracts/mediaqueries";

const StyledHomeCosts = styled.section`
  ${respond(
    "phone-port",
    css`
      margin-bottom: 4rem;
    `
  )}
  h2,
  .subtitle {
    text-align: center;

    ${respond(
      "phone-port",
      css`
        margin-top: 3rem;
        width: 100%;
      `
    )}
  }

  .subtitle {
    width: 60%;
    line-height: 1.5;
    margin: 1rem auto 0 auto;
    font-size: 1.8rem;

    ${respond(
      "phone-port",
      css`
        width: 100%;
      `
    )}
  }

  .red-text {
    color: var(--color-secondary);
    font-size: 2.2rem;
    margin-bottom: 1.5rem;

    ${respond(
      "phone-port",
      css`
        margin-top: 2rem;
      `
    )}
  }

  .section-container {
    width: 75%;
    margin: 5rem auto 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    gap: 5rem;

    ${respond(
      "small-phone-land",
      css`
        grid-template-columns: 1fr;
      `
    )}
  }

  .left-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .features {
      font-size: 1.6rem;
      text-align: center;
      line-height: 1.5;
      width: 70%;

      ${respond(
        "phone-port",
        css`
          width: 100%;
        `
      )}
    }

    .logo {
      width: 20rem;
    }
  }

  .right-container {
    ul {
      list-style: none;
    }
    li {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
    }
  }
  .background-secondary {
    margin: 5rem auto 0 auto;
    background-color: var(--color-secondary);

    ${respond(
      "phone-port",
      css`
        margin-top: 2rem;
        width: 95% !important;
      `
    )}
  }
`;

const HomeCosts = () => {
const {
   costsSection: {costsSection},
   costsListItems: {costsListItems}
} = useStaticQuery(query)

const sortedLestItems = costsListItems.sort((a, b) => a.data.itemId - b.data.itemId)

  return (
    <StyledHomeCosts className="container">
      <h2>{costsSection.title}</h2>
      <p className="subtitle">{costsSection.subtitle}</p>
      <div className="section-container">
        <div className="left-container">
          <img className="logo" src={costsSection.images.localFiles[0].publicURL} alt={costsSection.alternativeText} />
          <h5 className="red-text">{costsSection.redText}</h5>
          <p className="features">{costsSection.text}</p>
        </div>
        <div className="right-container">
          {sortedLestItems.map(( item, i ) => {
            return (
              <ul key={i}>
                <li>
                  <img src={item.data.images.localFiles[0].publicURL} alt={item.data.alternativeText} />
                  <span>{item.data.title}</span>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <Button text={costsSection.cta} url={costsSection.ctaLink} className="background-secondary" />
    </StyledHomeCosts>
  );
};

const query = graphql`
  query HomeCosts {
   costsSection: airtable(table: {eq: "Home"}, data: {blockType: {eq: "CostsSection"}}) {
    costsSection: data {
      title
      subtitle
      cta
      ctaLink
      alternativeText
      redText
      text
      images {
        localFiles {
          publicURL
        }
      }
    }
  }
  costsListItems: allAirtable(filter: {table: {eq: "Home"}, data: {blockType: {eq: "CostsList"}}}) {
    costsListItems: nodes {
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
`;

export default HomeCosts;
