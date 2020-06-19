import React from "react";
import styled from "@emotion/styled";
import useZ from "../zustand/z";

interface LogotypeProps {
  value: string | number;
}

const StyledLogotype = styled.div`
  text-align: center;
  color: whitesmoke;
  font-family: NeueMachinaUltrabold;
  font-size: 2rem;
  color: #000;
  text-transform: uppercase;
  margin: 1rem;
  user-select: none;
  min-width: 5rem;
  background-blend-mode: difference;
  color: var(--sidious-red);
  transform: scale(1.1);
  &:hover {
    cursor: help;
  }
`;

export default function Navi({ value }: LogotypeProps) {
  const setAbout = useZ(z => z.setAbout);
  const about = useZ(z => z.about);

  return (
    <StyledLogotype
      onClick={() => {
        setAbout(!about);
      }}
      onMouseDown={e => {
        (e.target as HTMLDivElement).style.transform = "scale(1)";
      }}
      onMouseUp={e => {
        (e.target as HTMLDivElement).style.transform = "scale(1.1)";
      }}
    >
      {value}
    </StyledLogotype>
  );
}
