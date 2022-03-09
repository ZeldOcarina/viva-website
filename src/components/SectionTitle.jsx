import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

const Wrapper = styled.div`
  width: max-content;
  margin: 0 auto 4rem auto;

  .section-title {
    text-align: center;
  }

  .hr {
    height: 4px;
    background-color: black;
    margin: 1.5rem auto 0 auto;
    width: 50%;
  }
`;

const SectionTitle = ({ title, className }) => {
  return (
    <Wrapper className={className ? className : "section-title-container"}>
      <h2 className="section-title">{title}</h2>
      <hr className="hr" />
    </Wrapper>
  );
};

export default SectionTitle;
