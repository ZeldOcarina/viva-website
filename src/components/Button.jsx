import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

const Wrapper = styled.button`
  text-transform: capitalize;
  background-color: var(--color-primary-dark);
  color: var(--white);
  padding: 0;
  display: flex;
  width: 30rem;
  height: 6rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  border: none;
  font-weight: 500;
  font-size: 1.6rem;

  ${respond(
    "phone-port",
    css`
      width: 100% !important;
    `
  )}

  a {
    color: var(--white);
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Button = ({ text, className, children, url }) => {
  return (
    <Wrapper className={className || "btn"}>
      <a href={url || "https://calendly.com/viva-concepts/schedule-a-call"}>{text || children}</a>
    </Wrapper>
  );
};

export default Button;
