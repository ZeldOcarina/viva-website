import React from "react";
import styled from "styled-components";

import CaseStudy from "../../components/CaseStudy";

const StyledCaseStudiesSummary = styled.main``;

const CaseStudiesSummary = ({ caseStudiesData }) => {
  console.log(caseStudiesData);
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
