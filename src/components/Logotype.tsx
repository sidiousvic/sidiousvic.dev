import React from "react";
import styled from "@emotion/styled";

interface LogotypeProps {
  value: string | number;
}

const StyledLogotype = styled.div`
  text-align: center;
  color: whitesmoke;
  font-family: NeueMachinaUltrabold;
  font-size: 2rem;
  color: #000;
  text-transform: uppercase;
  margin: 1rem;
  min-width: 5rem;
  background-blend-mode: difference;
  color: var(--sidious-red);
  &:hover {
    cursor: help;
  }
`;

const Navi: React.FC<LogotypeProps> = props => {
  const { value } = props;
  return <StyledLogotype>{value}</StyledLogotype>;
};

export default Navi;
