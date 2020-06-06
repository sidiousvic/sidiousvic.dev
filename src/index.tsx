import React from "react";
import ReactDOM from "react-dom";
import Scene from "./components/Scene";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import "./styles.css";
import scorpionUrl from "./images/scorpion.png";
import XicuahuaBorder from "./images/xicuahua.svg";

const MOTHERBOARD: React.FC = () => {
  return (
    <>
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
        {/* BORN AND RAISED */}
        <div
          style={{
            mixBlendMode: "multiply",
            backgroundImage: `url(${scorpionUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            fontFamily: "Neue Machina Ultrabold",
            margin: "4rem",
            padding: "4rem",
            fontSize: "10vw",
            position: "relative"
          }}
        >
          <p style={{ mixBlendMode: "overlay" }}>
            BORN AND RAISED IN THE DESERT
          </p>
          <XicuahuaBorder
            style={{
              position: "absolute",
              top: "0%",
              right: "5%",
              mixBlendMode: "difference"
            }}
            width={"40%"}
          />
        </div>
      </div>
    </>
  );
};

ReactDOM.render(<MOTHERBOARD />, document.getElementById("root"));

export default MOTHERBOARD;
