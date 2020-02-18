import React from "react";
import Scene from "../components/Scene";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import favicon from "../images/favicon.ico";
import Helmet from "react-helmet";

const MOTHERBOARD: React.FC = () => {
  return (
    <>
      <Helmet>
        {/* <!--  
  
  .-----. 
 /  .---.\    
/  / _  _ \\  JUST DO SH*T.
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
        <meta property="og:image" content="./assets/images/og-screen.png" />
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
    </>
  );
};

export default MOTHERBOARD;
