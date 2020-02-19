import React, { ReactElement } from "react";
import Navi from "./Navi";
// eslint-disable-next-line import/no-webpack-loader-syntax
// import ThunderLogo from "!svg-react-loader!../images/thunderLogo.svg";

const Navbar = (): ReactElement => {
  return (
    <nav>
      {/* <ThunderLogo width={30} /> */}
      <Navi value="SIDIOUSVIC.DEV" />
      <Navi value="UNDER DEVELOPMENT" />
      {/* <Navi value="Music" />
      <Navi value="Vicelog" />
      <Navi value="Github" />
      <Navi value="Instagram" /> */}
    </nav>
  );
};

export default Navbar;
