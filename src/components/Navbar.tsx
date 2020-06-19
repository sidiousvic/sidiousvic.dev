import React from "react";
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

function Navbar() {
  return (
    <>
      <StyledNav>
        <Logotype value="@sidiousvic" />
        <Navis />
      </StyledNav>
      {/* <StyledSidebar /> */}
    </>
  );
}

export default Navbar;
