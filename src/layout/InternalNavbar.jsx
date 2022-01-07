import React from "react";
import styled from "styled-components";

const InnerWrapper = styled.section`
  background-color: var(--color-primary);
  color: var(--white);
  text-align: center;
  padding: 3rem 0;

  h1 {
    color: var(--white);
    padding: 0;
    margin: 1rem 0;
    text-align: center;
  }
`;

const InternalNavbar = () => {
  return (
    <InnerWrapper>
      <div className="container">
        <span>Viva Program</span>
        <h1>Meeting Prep Guide</h1>
        <p>
          Congratulations you have scheduled a meeting with the #1 Growth Firm in the dental space. Here's everything
          you need to know to come prepared.
        </p>
      </div>
    </InnerWrapper>
  );
};

export default InternalNavbar;
