import React from "react";
import Scene from "../components/Scene";
import Title from "../components/Title";
import favicon from "../images/favicon.ico";
import Navbar from "../components/Navbar";
import Helmet from "react-helmet";
import BlackwatersBackground from "!file-loader!../images/blackwaters.jpg";
import barcodePie from "!file-loader!../images/barcodePie.gif";

console.log(BlackwatersBackground);

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
        style={{
          background: "var(--sidiousred)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            background: "black",
            backgroundImage: `url(${BlackwatersBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            width: "90%",
            height: "80%",
            padding: "2rem",
            display: "flex",
            color: "whitesmoke",
            alignItems: "right",
            textAlign: "right",
            justifyContent: "space-between"
          }}
        >
          <img
            src={barcodePie}
            alt="lol"
            style={{
              position: "absolute",
              bottom: "2%",
              mixBlendMode: "multiply",
              // filter: "invert(1)",
              // transform: "rotate(180deg)",
              maxWidth: 200,
              maxHeight: 50
            }}
          />
          <div
            style={{
              width: "20%"
            }}
          ></div>
          <div
            style={{
              fontSize: "3rem",
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
            www, plays the axe, football and is very good at bullsh*tting.
          </div>
        </div>
      </div>
    </>
  );
};

export default MOTHERBOARD;
