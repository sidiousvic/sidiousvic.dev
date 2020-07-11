import "./styles/global.css";
import SidiousSkull from "./three/SidiousSkull";
import reduxStore from "./redux";
import Title from "./ui/Title";
import BornAndRaised from "./ui/BornAndRaised";
import phantom from "@sidiousvic/phantom";

export const { fire, data, launch } = phantom(reduxStore, XDOM);

launch();

function XDOM(): any {
  const { title, desertXicuahua } = data();
  return `
    ${Title(title)}
    ${BornAndRaised(desertXicuahua)}
  `;
}

SidiousSkull(); // three scene
