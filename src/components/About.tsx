import React from "react";
import styled from "@emotion/styled";
import useZ from "../zustand/z";

const StyledAbout = styled.div`
  font-size: 4vw;
  padding: 10vw;
  line-height: 9rem;
  pointer-events: none;
  user-select: none;
  letter-spacing: -0.1rem;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  justify-content: center;
  font-family: "NeueMachina";
  font-style: regular;
  transition: ease-in-out 0.5s;
  z-index: 99;
`;

export default function About() {
  const about = useZ(z => z.about);

  return <StyledAbout style={{ top: about ? "0%" : "-100%" }}>🍕</StyledAbout>;
}
