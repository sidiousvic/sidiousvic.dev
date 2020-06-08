import React from "react";
import scorpionUrl from "../images/scorpion.png";
import XicuahuaBorder from "../images/xicuahua.svg";
import useZ from "../zustand/z";

export default function BornAndRaised() {
  const mouse = useZ(z => z.mouse);

  return (
    <div
      style={{
        mixBlendMode: "multiply",
        backgroundImage: `url(${scorpionUrl})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        fontFamily: "Neue Machina Ultrabold",
        margin: "4rem",
        padding: "2rem",
        fontSize: "8vw",
        position: "relative"
      }}
    >
      <p
        style={{
          marginBottom: 0,
          mixBlendMode: "overlay",
          transform: `translate(${mouse.x * 0.07}%, ${mouse.y * 0.07}%)`
        }}
      >
        BORN AND RAISED IN THE
      </p>
      <p
        style={{
          marginTop: 0,
          textAlign: "center",
          mixBlendMode: "overlay",
          transform: `translate(${mouse.y * 0.07}%, ${mouse.x *
            0.07}%) skew(${mouse.y * 0.1}deg, ${mouse.x * 0.1}deg)`,
          fontFamily: "'Flag (sRB)'",
          fontSize: "14vw"
        }}
      >
        DESERT
      </p>
      <XicuahuaBorder
        style={{
          position: "absolute",
          top: `${0 + mouse.x * 0.05}%`,
          right: `${5 + mouse.y * 0.05}%`,
          mixBlendMode: "difference"
        }}
        width={"40%"}
      />
    </div>
  );
}
