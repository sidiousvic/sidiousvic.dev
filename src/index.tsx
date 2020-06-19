import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Scene from "./components/Scene";
import Title from "./components/Title";
import About from "./components/About";
import Navbar from "./components/Navbar";
import BornAndRaised from "./components/BornAndRaised";
import "./styles.css";
import { Global, css } from "@emotion/core";
import Nikes from "./fonts/FuturaCondensedExtraBoldOblique.otf";
import Flag from "./fonts/Flag.ttf";
import NeueMachina from "./fonts/NeueMachina-Regular.otf";
import NeueMachinaUltrabold from "./fonts/NeueMachina-Ultrabold.otf";

const CLIENT_ID = "dbc4fa45ace94914bd97b4b6e28388f2";
const CLIENT_SECRET = "2faa83dc0acd4d80994533068bf5b0fd";

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
    src: url(${Flag}) format("truetype");
  }
`;

function MOTHERBOARD() {
  useEffect(() => {
    fetch("https://accounts.spotify.com/api/token", {
      method: "post",
      body: JSON.stringify({ grant_type: "client_credentials" }),
      headers: {
        Authorization:
          "Basic " +
          new Buffer(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64")
      }
    }).then(s => console.log(s));
  }, []);

  return (
    <>
      <Global styles={styles} />
      <Navbar />
      <About />
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
        <div className="spotify">
          <h1 style={{ fontFamily: "Flag" }}>TODAY'S MENU</h1>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<MOTHERBOARD />, document.getElementById("root"));

export default MOTHERBOARD;
