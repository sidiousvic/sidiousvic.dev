import React, { useState } from "react";
import styled from "@emotion/styled";
import BlmSvg from "../images/blm.svg";
import BlmDonateSvg from "../images/blmDonate.svg";
import TaraSvg from "../images/tarahumaraFoundation.svg";
import TaraDonateSvg from "../images/tarahumaraFoundationDonate.svg";
import AARSvg from "../images/AAR.svg";
import AARDonateSvg from "../images/AARDonate.svg";

const StyledNavis = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 30%;
`;

function Navis() {
  const [blmSvgDonate, setBlmSvgDonate] = useState(false);
  const [taraSvgDonate, setTaraSvgDonate] = useState(false);
  const [aarSvgDonate, setAarSvgDonate] = useState(false);

  function toggleBlmDonate() {
    setBlmSvgDonate(!blmSvgDonate);
  }

  function toggleTaraDonate() {
    setTaraSvgDonate(!taraSvgDonate);
  }

  function toggleAarDonate() {
    setAarSvgDonate(!aarSvgDonate);
  }

  return (
    <StyledNavis>
      <a
        onMouseEnter={() => {
          toggleAarDonate();
        }}
        onMouseLeave={() => {
          toggleAarDonate();
        }}
        href="https://www.aarjapan.gr.jp/english/support/"
        target="_blank"
      >
        {aarSvgDonate ? (
          <AARDonateSvg className="aar-svg" width={"80px"} />
        ) : (
          <AARSvg className="aar-svg" width={"80px"} />
        )}
      </a>
      <a
        onMouseEnter={() => {
          toggleTaraDonate();
        }}
        onMouseLeave={() => {
          toggleTaraDonate();
        }}
        href="https://www.tarahumara.org.mx/english/support.html"
        target="_blank"
      >
        {taraSvgDonate ? (
          <TaraDonateSvg className="tara-svg" width={"80px"} />
        ) : (
          <TaraSvg className="tara-svg" width={"80px"} />
        )}
      </a>
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
