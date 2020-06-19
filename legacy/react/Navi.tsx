import React from "react";
import styled from "@emotion/styled";

interface NaviProps {
  value: string | number;
}

const StyledNavi = styled.div`
  text-align: center;
  color: whitesmoke;
  font-family: NeueMachina;
  font-weight: normal;
  font-size: 2rem;
  color: #000;
  margin: 1rem;
  min-width: 5rem;
  mix-blend-mode: difference;
  color: var(--sidious-red);
  &:hover {
    cursor: pointer;
  }
`;

export default function Navi({ value }: NaviProps) {
  return <StyledNavi>{value}</StyledNavi>;
}
