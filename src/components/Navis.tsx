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
      <Navi value="inditer" />
      <Navi value="axewielder" />
      <Navi value="primate" />
      <Navi value="about" />
    </StyledNavis>
  );
};

export default Navis;
