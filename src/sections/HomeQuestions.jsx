import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";
import SectionTitle from "../components/SectionTitle";
import respond from "../styles/abstracts/mediaqueries";

const StyledHomeQuestions = styled.section`
  ${respond(
    "phone-port",
    css`
      padding: 0 !important;
    `
  )}
  .questions-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;

    ${respond(
      "small-phone-land",
      css`
        grid-template-columns: 1fr;
        margin-bottom: 4rem;
      `
    )}
    ${respond(
      "phone-port",
      css`
        width: 95%;
        margin: 0 auto 6rem auto;
      `
    )}

    .question-box {
      .question {
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      .answer {
        font-size: 1.8rem;
        line-height: 1.5;
      }
    }
  }
`;

const HomeQuestions = () => {

   const {
      faqSection: {faqSection: {title}},
      faqItems: {faqItems}
   } = useStaticQuery(query)

   const sortedItems = faqItems.sort((a, b) => a.data.itemId - b.data.itemId)

  return (
    <StyledHomeQuestions className="container">
      <SectionTitle title={title} />
      <div className="questions-container">
        {sortedItems.map((item) => {
          return (
            <div key={item.data.itemId} className="question-box">
              <h5 className="question">{item.data.title}</h5>
              <p className="answer">{item.data.copy}</p>
            </div>
          );
        })}
      </div>
    </StyledHomeQuestions>
  );
};

const query = graphql`
  query HomeFaq {
   faqSection: airtable(table: {eq: "Home"}, data: {blockType: {eq: "FaqSection"}}) {
      faqSection: data {
         title
      }
  }
  faqItems: allAirtable(filter: {table: {eq: "Home"}, data: {blockType: {eq: "FaqItem"}}}) {
   faqItems: nodes {
      data {
        itemId
        title
        copy
      }
    }
  }
  }
`;

export default HomeQuestions;
