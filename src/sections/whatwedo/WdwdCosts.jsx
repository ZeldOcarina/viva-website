import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";
import Button from "../../components/Button";
import respond from "../../styles/abstracts/mediaqueries";



const StyledWdwdCosts = styled.section`
margin-bottom: 6rem;
  ${respond
  (
    "phone-port",
    css`
      margin-bottom: 4rem;
    `
  )}
  h2,
  .subtitle,
  .copy {
    text-align: center;

    ${respond(
      "phone-port",
      css`
        margin-top: 3rem;
        width: 100%;
      `
    )}
  }

  h2{
    font-family: 'Nunito', sans-serif;
    font-size: 2.6rem;
    color: var(--color-secondary);
    ${respond(
        "ipad-pro-11-land",
        css`
          font-size: 2.2rem;
        `
      )}
  }

  .subtitle {
    width: 80%;
    line-height: 1.5;
    margin: 1rem auto 0 auto;
    font-size: 3.6rem;
    font-weight: 600;

    ${respond(
        "ipad-pro-11-land",
        css`
          font-size: 3.2rem;
        `
      )}

    ${respond(
      "phone-port",
      css`
        width: 100%;
      `
    )}
  }

  .copy{
    font-size: 2rem;
    font-weight: 600;
    margin-top: 2rem;
    ${respond(
        "ipad-pro-11-land",
        css`
          font-size: 1.8rem;
        `
      )}
  }

  .red-text {
    color: var(--color-secondary);
    font-size: 3.6rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: center;

    ${respond(
        "ipad-pro-11-land",
        css`
          font-size: 3rem;
        `
      )}

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
        "ipad-pro-11-land",
        css`
          width: 100%;
        `
      )}

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
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
      line-height: 1.5;
      width: 70%;

      ${respond(
        "ipad-pro-11-land",
        css`
          font-size: 1.6rem;
        `
      )}

      ${respond(
        "phone-port",
        css`
          width: 100%;
        `
      )}
    }

    .logo {
      width: 20rem;
      ${respond(
        "ipad-pro-11-land",
        css`
          width: 16rem;
        `
      )}
    }
  }

  .right-container {
    ul {
      list-style: none;
    }
    li {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
      font-size: 2rem;
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

const WdwdCosts = () => {
const {
   costsSection: {costsSection},
   costsListItems: {costsListItems}
} = useStaticQuery(query)

const sortedLestItems = costsListItems.sort((a, b) => a.data.itemId - b.data.itemId)

  return (
    <StyledWdwdCosts className="container">
      <h2>{costsSection.title}</h2>
      <p className="subtitle">{costsSection.subtitle}</p>
      <p className="copy">{costsSection.copy}</p>
      <div className="section-container">
        <div className="left-container">
          <img className="logo" src={costsSection.image.localFiles[0].publicURL} alt='Viva logo' />
          <h5 className="red-text">{costsSection.redText}</h5>
          <p className="features">{costsSection.text}</p>
        </div>
        <div className="right-container">
          {sortedLestItems.map(( item, i ) => {
            return (
              <ul key={i}>
                <li>
                  <img src={item.data.icon.localFiles[0].publicURL} alt='checkmark' />
                  <span>{item.data.title}</span>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <Button text={costsSection.cta} url={costsSection.ctaLink} className="background-secondary" />
    </StyledWdwdCosts>
  );
};

const query = graphql`
  query WdwdCosts {
   costsSection: airtable(table: {eq: "WhatDoWeDo"}, data: {blockType: {eq: "CostsSection"}}) {
    costsSection: data {
      title
      subtitle
      copy
      cta
      ctaLink
      redText
      text
      image{
        localFiles{
          publicURL
        }
      }
    }
  }
  costsListItems: allAirtable(filter: {table: {eq: "WhatDoWeDo"}, data: {blockType: {eq: "CostsList"}}}) {
    costsListItems: nodes {
      data {
        itemId
        title
        icon {
          localFiles {
            publicURL
          }
        }
      }
    }
  }
  }
`;

export default WdwdCosts;
