import React from "react";
import ReactDOM from "react-dom";
import Scene from "./Scene";
import Title from "./Title";
import Navbar from "./Navbar";
import BornAndRaised from "./BornAndRaised";
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
