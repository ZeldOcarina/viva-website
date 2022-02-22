import React from "react";
import styled from "styled-components";
import CaseStudy from "../components/CaseStudy";

import Seo from "../components/Seo";
import Layout from "../layout/Layout";

const StyledCaseStudyTemplate = styled.div``;

const caseStudyTemplate = ({ location, pageContext: { caseStudy } }) => {
  return (
    <>
      <Seo location={location} />
      <Layout>
        <StyledCaseStudyTemplate className="container">
          <CaseStudy caseStudy={caseStudy} isTemplatePage />
        </StyledCaseStudyTemplate>
        ;
      </Layout>
    </>
  );
};

export default caseStudyTemplate;
