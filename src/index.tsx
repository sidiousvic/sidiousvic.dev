import React from "react";
import ReactDOM from "react-dom";
import Scene from "./components/Scene";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import BornAndRaised from "./components/BornAndRaised";
import "./styles.css";
import { Global, css } from "@emotion/core";
import Nikes from "./fonts/FuturaCondensedExtraBoldOblique.otf";
import Flag from "./fonts/Flag.ttf";
import NeueMachina from "./fonts/NeueMachina-Regular.otf";

import NeueMachinaUltrabold from "./fonts/NeueMachina-Ultrabold.otf";

const styles = css`
  @font-face {
    font-family: "Nikes";
    src: url(${Nikes}) format("opentype");
  }
  @font-face {
    font-family: "NeueMachina";
    src: url(${NeueMachina}) format("opentype");
  }
  @font-face {
    font-family: "NeueMachinaUltrabold";
    src: url(${NeueMachinaUltrabold}) format("opentype");
  }
  @font-face {
    font-family: "Flag";
    src: url(${Flag}) format("ttf");
  }
`;

function MOTHERBOARD() {
  return (
    <>
      <Global styles={styles} />
      <Navbar />
      <Title />
      <Scene />
      <div
        className="wrapper"
        style={{
          background: "var(--sidious-red)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <BornAndRaised />
      </div>
    </>
  );
}

ReactDOM.render(<MOTHERBOARD />, document.getElementById("root"));

export default MOTHERBOARD;
