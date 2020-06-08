import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import useZ from "../zustand/z";

const StyledTitle = styled.div`
  font-size: 6vw;
  padding: 3rem;
  pointer-events: none;
  user-select: none;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* font-family: "Arial"; */
  font-family: "Nikes";
  /* font-family: "Blacker Pro Display Trial Heavy"; */
  letter-spacing: -0.3rem;
  font-style: regular;
  text-transform: uppercase;
  color: var(--sidious-red);
  mix-blend-mode: difference;
  z-index: 99;
`;

const Title = (): ReactElement => {
  const title = useZ(z => z.title);

  return (
    <StyledTitle>
      <h1>{title}</h1>
    </StyledTitle>
  );
};

export default Title;
