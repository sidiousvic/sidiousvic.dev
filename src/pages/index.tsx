import React from "react";
import Scene from "../components/Scene";
import Title from "../components/Title";
import favicon from "../images/favicon.ico";
import Navbar from "../components/Navbar";
import Helmet from "react-helmet";
import blackwatersUrl from "!file-loader!../images/blackwaters.jpg";
import barcodePieUrl from "!file-loader!../images/barcodePie.gif";
import scorpionUrl from "!file-loader!../images/scorpion.png";
import vicPixUrl from "!file-loader!../images/snake.png";
import XicuahuaBorder from "!svg-react-loader!../images/xicuahua.svg";

const MOTHERBOARD: React.FC = () => {
  return (
    <>
      <Helmet>
        {/* <!--  
  
  .-----. 
 /  .---.\    
/  / _  _ \\  Just do Sh*t.
| | (_\/_)||  
| |   /\  )|  
| | L====J |   
/ /  ''--''  \   
┌─┐┌─┐┬┌┬┐┬┌─┐┬ ┬┌─┐┬  ┬┬┌─┐
│└┘└─┐│ ││││ ││ │└─┐└┐┌┘││  
└──└─┘┴─┴┘┴└─┘└─┘└─┘ └┘ ┴└─┘ 
TOKYO—BASED DVLPMNT 'N' DSGN
vic@sidiousvic.dev 

--> */}
        <meta property="og:title" content="SIDIOUSVIC.DEV" />
        <meta property="og:image" content="" />
        <meta
          property="og:description"
          content="Axewielding, inditing, programming primate of the species mēxihcan 🍕"
        />
        <title>@SIDIOUSVIC</title>
        <link rel="icon" href={favicon} />
      </Helmet>
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
            is a primate of the species mēhxican, living in Tokyo. He develops
            www, wields the guitar, plays no.{" "}
            <span style={{ fontFamily: "Neue Machina" }}>9</span> in football
            and indites sh*t sometimes.
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
          Musics
        </div>
        {/* MUSICS */}
      </div>
    </>
  );
};

export default MOTHERBOARD;
