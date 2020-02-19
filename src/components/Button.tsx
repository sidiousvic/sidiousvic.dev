import React, { ReactElement } from "react";
import { Link } from "gatsby";
// import useZ from "../zustand/z";
import styled from "@emotion/styled";

interface ButtonProps {
  label: string;
  link: string;
}

const StyledButton = styled.div`
  display: flex;
  user-select: none;
  padding: 0.5rem 1rem;
  font-family: Avenir Next;
  font-family: Futura;
  font-weight: bold;
  font-size: 2rem;
  position: absolute;
  -webkit-appearance: none;
  left: 10%;
  bottom: 6%;
  border: black solid 2px;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
  cursor: pointer;
  z-index: 99;
`;

const StyledLabel = styled.p`
  margin: 0;
  color: black;
`;

const Title = (props: ButtonProps): ReactElement => {
  //   const title = useZ(z => z.title);
  const { label, link } = props;
  return (
    <Link to={link}>
      <StyledButton>
        <StyledLabel>{label}</StyledLabel>
      </StyledButton>
    </Link>
  );
};

export default Title;
