import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
// import ThunderLogo from "!svg-react-loader!../images/thunderLogo.svg";
import Navis from "./Navis";
import Logotype from "./Logotype";

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
  // const iconNumber = useRef(2);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const icon = document.getElementById("icon") as HTMLLinkElement;
  //     console.log(icon);
  //     icon.href = `./static/favicon/favicon${iconNumber.current}.png`;
  //   }, 100);

  //   if (iconNumber.current > 29) iconNumber.current = 0;
  //   else iconNumber.current++;

  //   return function cleanUp() {
  //     clearTimeout(timer);
  //   };
  // });
  return (
    <StyledNav>
      <Logotype value="@sidiousvic" />
      {/* <ThunderLogo width={60} /> */}
      <Navis />
    </StyledNav>
  );
};

export default Navbar;
