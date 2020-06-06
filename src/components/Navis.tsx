import React from "react";
import styled from "@emotion/styled";
import BlmSvg from "../images/blm.svg";

const StyledNavis = styled.div`
  display: flex;
  flex-direction: row;
  mix-blend-mode: difference;
`;

function Navis() {
  return (
    <StyledNavis>
      <a
        href="https://secure.actblue.com/donate/ms_blm_homepage_2019"
        target="_blank"
      >
        <BlmSvg width={"80px"} />
        {/* <div
          style={{
            background: `url(${blmUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // width: "60px",
            height: "100%",
            top: "-3px",
            // border: "black 1px solid",
            mixBlendMode: "difference",
            cursor: "pointer"
          }}
        ></div> */}
      </a>
    </StyledNavis>
  );
}

export default Navis;
