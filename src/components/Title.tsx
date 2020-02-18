import React, { ReactElement } from "react";
import useZ from "../zustand/z";

const Title = (): ReactElement => {
  const title = useZ(z => z.title);

  return (
    <div className="title">
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
