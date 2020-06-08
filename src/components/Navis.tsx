import React from "react";
import styled from "@emotion/styled";
import BlmSvg from "../images/blm.svg";

const StyledNavis = styled.div`
  display: flex;
  flex-direction: row;
`;

function Navis() {
  return (
    <StyledNavis>
      <a
        href="https://secure.actblue.com/donate/ms_blm_homepage_2019"
        target="_blank"
      >
        <BlmSvg className="blm-svg" width={"80px"} />
      </a>
    </StyledNavis>
  );
}

export default Navis;
