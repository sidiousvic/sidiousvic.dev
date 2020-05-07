import React from "react";
import ReactDOM from "react-dom";
import Scene from "./components/Scene";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import "./styles.css";
import blackwatersUrl from "./images/blackwaters.jpg";
import barcodePieUrl from "./images/barcodePie.gif";
import scorpionUrl from "./images/scorpion.png";
import vicPixUrl from "./images/snake.png";
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
        {/* BLACKPOOL */}
        <div
          style={{
            background: "black",
            backgroundImage: `url(${blackwatersUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            width: "90%",
            height: "80%",
            padding: "4rem",
            margin: "4rem",
            display: "flex",
            color: "whitesmoke",
            alignItems: "right",
            textAlign: "right",
            justifyContent: "space-between"
          }}
        >
          <img
            src={barcodePieUrl}
            alt="lol"
            style={{
              position: "absolute",
              bottom: "2%",
              mixBlendMode: "multiply",
              // transform: "rotate(180deg)",
              maxWidth: 200,
              maxHeight: 50
            }}
          />
          <div
            id="vicPix"
            style={{
              width: "40%",
              backgroundImage: `url(${vicPixUrl})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              mixBlendMode: "difference",
              filter: "invert(1)",
              borderRadius: "50%"
            }}
          ></div>
          <div
            style={{
              fontSize: "5vw",
              width: "60%",
              fontFamily: "Blacker Pro Display Trial Light",
              mixBlendMode: "difference"
            }}
          >
            <span
              style={{
                fontFamily: "Neue Machina Black"
              }}
            >
              VIC SIDIOUS
            </span>{" "}
            is a primate of the species mēhxican living in Tokyo. He develops
            www, wields the guitar, plays no.{" "}
            <span style={{ fontFamily: "Neue Machina" }}>9</span> and loves a
            good slice o' 🍕.
          </div>
        </div>
        {/* BLACKPOOL */}
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
        {/* BORN AND RAISED */}
        {/* MUSICS */}
        <div
          style={{
            fontFamily: "Manhunter",
            fontStyle: "italic",
            padding: "4rem",
            fontSize: "14vw"
          }}
        >
          synth
        </div>
        {/* MUSICS */}
        <div
          className="keyboard"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            borderRadius: "5px",
            width: "90%",
            height: "300px",
            padding: "4rem",
            margin: "0 4rem 4rem 4rem",
            display: "flex",
            color: "whitesmoke",
            alignItems: "right",
            justifyContent: "space-between"
          }}
        >
          <div className="key" id="C3-key">
            .
          </div>
          <div className="black-key" id="C#3-key">
            .
          </div>
          <div className="key" id="D3-key">
            .
          </div>
          <div className="black-key" id="D#3-key">
            .
          </div>
          <div className="key" id="E3-key">
            .
          </div>
          <div className="key" id="F3-key">
            .
          </div>
          <div className="black-key" id="F#3-key">
            .
          </div>
          <div className="key" id="G3-key">
            .
          </div>
          <div className="black-key" id="G#3-key">
            .
          </div>
          <div className="key" id="A3-key">
            .
          </div>
          <div className="black-key" id="A#3-key">
            .
          </div>
          <div className="key" id="B3-key">
            .
          </div>
          <div className="key" id="C4-key">
            .
          </div>
          <div className="black-key" id="C#4-key">
            .
          </div>
          <div className="key" id="D4-key">
            .
          </div>
          <div className="black-key" id="D#4-key">
            .
          </div>
          <div className="key" id="E4-key">
            .
          </div>
          <div className="key" id="F4-key">
            .
          </div>
          <div className="black-key" id="F#4-key">
            .
          </div>
          <div className="key" id="G4-key">
            .
          </div>
          <div className="black-key" id="G#4-key">
            .
          </div>
          <div className="key" id="A4-key">
            .
          </div>
          <div className="black-key" id="A#4-key">
            .
          </div>
          <div className="key" id="B4-key">
            .
          </div>
        </div>
      </div>
    </>
  );
};

ReactDOM.render(<MOTHERBOARD />, document.getElementById("root"));

export default MOTHERBOARD;
