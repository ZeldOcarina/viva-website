import React from "react";
import styled from "styled-components";

const StyledDivider = styled.hr`
  margin: 4rem;
  border: none;
  border-top: 1px solid #cccccc;
`;

const Divider = () => {
  return <StyledDivider className="container"></StyledDivider>;
};

export default Divider;
