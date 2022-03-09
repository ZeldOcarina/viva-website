import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

import { MdOutlineEditCalendar } from "react-icons/md";

const StyledScheduleConsultationButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: var(--color-primary-dark);
  width: 10rem;
  height: 10rem;
  margin: 0 5rem 5rem 0;
  padding: 2rem;
  border-radius: 10px;
  width: max-content;
  height: max-content;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
  z-index: 100;

  ${respond(
    "phone-land",
    css`
      border-radius: 50%;
    `
  )}

  &:hover {
    border: 3px solid #c3b0ff;
  }

  .icon {
    font-size: 3.5rem;

    ${respond(
      "phone-land",
      css`
        font-size: 3rem;
      `
    )}
  }

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .icon-text {
    color: var(--white);

    ${respond(
      "phone-land",
      css`
        display: none;
      `
    )}
  }
`;

const ScheduleConsultationButton = () => {
  return (
    <StyledScheduleConsultationButton href="https://calendly.com/viva-concepts/schedule-a-call">
      <div className="icon-container">
        <span className="icon-text">Schedule Your Consultation</span>
        <MdOutlineEditCalendar color="white" className="icon" />
      </div>
    </StyledScheduleConsultationButton>
  );
};

export default ScheduleConsultationButton;
