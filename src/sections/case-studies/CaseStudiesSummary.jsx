import React from "react";
import styled, { css } from "styled-components";
import respond from "../../styles/abstracts/mediaqueries";

import CaseStudy from "../../components/CaseStudy";

const StyledCaseStudiesSummary = styled.main`
  ${respond(
    "phone-port",
    css`
      padding: 0 !important;
    `
  )}
`;

const CaseStudiesSummary = ({ caseStudiesData }) => {
  return (
    <StyledCaseStudiesSummary className="container">
      {caseStudiesData.map((caseStudy, i) => {
        const last = caseStudiesData.length === i + 1;
        return <CaseStudy caseStudy={caseStudy} last={last} key={caseStudy.id} />;
      })}
    </StyledCaseStudiesSummary>
  );
};

export default CaseStudiesSummary;
