import React from "react";
import Scene from "../components/Scene";
import { Link } from "gatsby";

const MOTHERBOARD: React.FC = () => {
  return (
    <>
      <Link to="/Navbar" activeStyle={{ color: "red" }}>
        NAVBAR
      </Link>
      <Scene />
    </>
  );
};

export default MOTHERBOARD;
