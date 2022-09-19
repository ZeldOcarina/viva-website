import React from "react";
import styled from "styled-components";
import CaseStudy from "../components/CaseStudy";
import ScheduleConsultationButton from "../components/ScheduleConsultationButton";

import Seo from "../components/Seo";
import Layout from "../layout/Layout";

const StyledCaseStudyTemplate = styled.div``;

const caseStudyTemplate = ({ location, pageContext: { caseStudy, actualFeatures } }) => {
  return (
    <>
      <Seo location={location} />
      <Layout>
        <StyledCaseStudyTemplate className="container">
          <CaseStudy caseStudy={caseStudy} features={actualFeatures} isTemplatePage />
          <ScheduleConsultationButton />
        </StyledCaseStudyTemplate>
        ;
      </Layout>
    </>
  );
};

export default caseStudyTemplate;
