import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
// import ThunderLogo from "!svg-react-loader!../images/thunderLogo.svg";
import Navis from "../components/Navis";
import Logotype from "../components/Logotype";

import styled from "@emotion/styled";

const StyledNav = styled.nav`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem 4rem;
  align-items: center;
  width: 100%;
  height: 20%;
  z-index: 99;
  background-color: transparent;
  mix-blend-mode: difference;
`;

const Navbar = (): ReactElement => {
  return (
    <StyledNav>
      <Logotype value="@sidiousvic" />
      {/* <ThunderLogo width={60} /> */}
      <Navis />
    </StyledNav>
  );
};

export default Navbar;
