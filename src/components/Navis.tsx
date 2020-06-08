import React, { useState } from "react";
import styled from "@emotion/styled";
import BlmSvg from "../images/blm.svg";
import BlmDonateSvg from "../images/blmDonate.svg";

const StyledNavis = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 30%;
`;

function Navis() {
  const [blmSvgDonate, setBlmSvgDonate] = useState(false);

  function toggleBlmDonate() {
    setBlmSvgDonate(!blmSvgDonate);
  }

  return (
    <StyledNavis>
      <a
        onMouseEnter={() => {
          toggleBlmDonate();
        }}
        onMouseLeave={() => {
          toggleBlmDonate();
        }}
        href="https://secure.actblue.com/donate/ms_blm_homepage_2019"
        target="_blank"
      >
        {blmSvgDonate ? (
          <BlmDonateSvg className="blm-svg" width={"80px"} />
        ) : (
          <BlmSvg className="blm-svg" width={"80px"} />
        )}
      </a>
    </StyledNavis>
  );
}

export default Navis;
