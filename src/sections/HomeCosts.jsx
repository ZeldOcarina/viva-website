import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";
import Button from "../components/Button";

import listIcon from "../images/icons/green-list-icon.svg";
import respond from "../styles/abstracts/mediaqueries";

const StyledHomeCosts = styled.section`
  h2,
  .subtitle {
    text-align: center;
  }

  .subtitle {
    width: 60%;
    line-height: 1.5;
    margin: 1rem auto 0 auto;
    font-size: 1.8rem;
  }

  .red-text {
    color: var(--color-secondary);
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
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
  }
`;

const HomeCosts = () => {
  const {
    homeCosts: {
      data: {
        attributes: {
          title,
          subtitle,
          logo: {
            data: {
              attributes: {
                alternativeText,
                localFile: { publicURL },
              },
            },
          },
          redTitle,
          features,
          cta,
          ctaLink,
          featuresListItem,
        },
      },
    },
  } = useStaticQuery(query);
  return (
    <StyledHomeCosts className="container">
      <h2>{title}</h2>
      <p className="subtitle">{subtitle}</p>
      <div className="section-container">
        <div className="left-container">
          <img className="logo" src={publicURL} alt={alternativeText} />
          <h5 className="red-text">{redTitle}</h5>
          <p className="features">{features}</p>
        </div>
        <div className="right-container">
          {featuresListItem.map(({ id, feature }) => {
            return (
              <ul key={id}>
                <li>
                  <img src={listIcon} alt="Checkmark" />
                  <span>{feature}</span>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <Button text={cta} url={ctaLink} className="background-secondary" />
    </StyledHomeCosts>
  );
};

const query = graphql`
  query HomeCosts {
    homeCosts: strapiApiHomeCostsSectionPopulate {
      data {
        attributes {
          cta
          ctaLink
          features
          redTitle
          subtitle
          title
          featuresListItem {
            id
            feature
          }
          logo {
            data {
              attributes {
                alternativeText
                localFile {
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default HomeCosts;
