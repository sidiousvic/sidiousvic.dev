import React from "react";
import styled from "@emotion/styled";
import Navi from "../components/Navi";

const StyledNavis = styled.div`
  display: flex;
  flex-direction: row;
`;

const Navis: React.FC = () => {
  return (
    <StyledNavis>
      <Navi value="V90X" />
      <Navi value="NEMESIS" />
      <Navi value="About" />
    </StyledNavis>
  );
};

export default Navis;
