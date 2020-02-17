import React from "react";
import useZ from "../zustand/z";
import "../assets/fonts/Futura-CondensedExtraBold.ttf";

const Title: React.FC = () => {
  const title = useZ(z => z.title);

  return (
    <div className="title">
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
