import React from "react";
import Scene from "../components/Scene";
import Title from "../components/Title";
import favicon from "../images/favicon.ico";
import Button from "../components/Button";
import Helmet from "react-helmet";
import styled from "@emotion/styled";

const StyledBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  content: "";
  top: 0%;
  left: 0%;
  background-image: -webkit-linear-gradient(30deg, transparent 45%, #000 45%);
`;

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
        <link
          rel="preload"
          as="font"
          href="/fonts/FuturaCondensedExtraBold.ttf"
          crossOrigin="anonymous"
        />
        <meta property="og:title" content="SIDIOUSVIC.DEV" />
        <meta property="og:image" content="" />
        <meta
          property="og:description"
          content="Axewielding, inditing, programming primate of the species mēxihcan 🍕"
        />
        <title>@SIDIOUSVIC</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <StyledBackground />
      <Title />
      <Button link="/the-vicelog" label="VICELOG" />
      <Scene />
    </>
  );
};

export default MOTHERBOARD;
