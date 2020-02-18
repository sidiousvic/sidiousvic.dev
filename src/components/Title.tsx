import React, { ReactElement } from "react";
import Fade from "react-reveal/Fade";
import useZ from "../zustand/z";

const Title = (): ReactElement => {
  const title = useZ(z => z.title);

  return (
    <Fade bottom>
      <div className="title">
        <h1>{title}</h1>
      </div>
    </Fade>
  );
};

export default Title;
