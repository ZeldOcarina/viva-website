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
const {
   oldNewItems: {oldNewItems}
} = useStaticQuery(query)

const sortedOldNew = oldNewItems.sort((a, b) => a.data.itemId - b.data.itemId)


  return (
    <StyledOldWayNewWay>
      <div className="container">
        {sortedOldNew.map((item, i) => {
          const last = i + 1 === oldNewItems.length;
          return <EnlightmentTemplate data={item.data} key={item.data.itemId} last={last} />;
        })}
      </div>
    </StyledOldWayNewWay>
  );
};

const query = graphql`
  query OldNew {
  oldNewItems: allAirtable(filter: {table: {eq: "OldNew"}, data: {blockType: {eq: "OldNewItem"}}}) {
   oldNewItems: nodes {
      data {
        itemId
        title
        oldWayTitle
        oldWayCopy
        newWayTitle
        newWayCopy
        oldResultTitle
        oldResultCopy
        newResultTitle
        newResultCopy
        insightTitle
        insightCopy
        cta
        ctaLink
        hasInsight
        hasCta
        alternativeText
        image{
         localFiles{
            childImageSharp{
               gatsbyImageData(placeholder: BLURRED)
            }
         }
        }
      }
    }
  }
  }
`;

export default OldWayNewWay;
