import React from "react";
import styled from "@emotion/styled";

interface NaviProps {
  value: string | number;
}

const StyledNavi = styled.div`
  text-align: center;
  color: whitesmoke;
  font-family: Neue Machina;
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

const Navi: React.FC<NaviProps> = props => {
  const { value } = props;
  return <StyledNavi>{value}</StyledNavi>;
};

export default Navi;
