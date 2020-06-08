import React from "react";
import ReactDOM from "react-dom";
import Scene from "./components/Scene";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import BornAndRaised from "./components/BornAndRaised";
import "./styles.css";

function MOTHERBOARD() {
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
        <BornAndRaised />
      </div>
    </>
  );
}

ReactDOM.render(<MOTHERBOARD />, document.getElementById("root"));

export default MOTHERBOARD;
