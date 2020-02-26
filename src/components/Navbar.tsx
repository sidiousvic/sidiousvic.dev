import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
// import ThunderLogo from "!svg-react-loader!../images/thunderLogo.svg";
import Navis from "../components/Navis";
import Logotype from "../components/Logotype";

import styled from "@emotion/styled";

const StyledNav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
  align-items: center;
  background-color: transparent;
  z-index: 100;
  width: 100%;
  height: 10%;
`;

const Navbar = (): ReactElement => {
  return (
    <StyledNav>
      <Logotype value="vic sidious" />
      {/* <ThunderLogo width={60} /> */}

      <Navis />
    </StyledNav>
  );
};

export default Navbar;
