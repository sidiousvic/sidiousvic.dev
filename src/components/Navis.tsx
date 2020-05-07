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
      <Navi value="DON'T WANNA DIE WITHOUT A FEW SCARS" />
    </StyledNavis>
  );
};

export default Navis;
