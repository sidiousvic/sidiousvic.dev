import React from "react";
import { Link } from "gatsby";

const Navbar: React.FC = () => {
  return (
    <div>
      {" "}
      <Link to="/" activeStyle={{ color: "red" }}>
        BACK
      </Link>
    </div>
  );
};

export default Navbar;
