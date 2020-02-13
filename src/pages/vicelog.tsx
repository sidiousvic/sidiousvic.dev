import React from "react";
import { Link } from "gatsby";

const Vicelog: React.FC = () => {
  return (
    <div>
      <Link
        to="/"
        style={{
          color: "lime",
          position: "absolute",
          top: "50%",
          right: "25%",
          zIndex: 99
        }}
      >
        BACK
      </Link>
    </div>
  );
};

export default Vicelog;
