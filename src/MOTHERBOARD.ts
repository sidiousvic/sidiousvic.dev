import "./styles/global.css";
import SidiousSkull from "./three/SidiousSkull";
import reduxStore from "./redux";
import Title from "./ui/Title";
import BornAndRaised from "./ui/BornAndRaised";
import phantom from "@sidiousvic/phantom";
// import phantom from "./PHANTOM";
export const { fire, data, launch } = phantom(reduxStore, XDOM);
// phantom
launch();

function XDOM(): any {
  const { title, desertXicuahua } = data();
  return `
  ${Title(title)}
  ${BornAndRaised(desertXicuahua)}
  `;
}

// plugins
SidiousSkull(); // three scene

// listeners
document.addEventListener("click", justDoShit);
function justDoShit(e: MouseEvent) {
  if ((e.target as HTMLDivElement).id === "title-h1") {
    fire({ type: "JUST_DO_SHIT" });
    moveBornAndRaised(e);
  }
}

document.addEventListener("mousedown", desertXicuahua);
document.addEventListener("mouseup", desertXicuahua);
function desertXicuahua(e: MouseEvent) {
  if ((e.target as HTMLParagraphElement).id === "desert-p") {
    fire({ type: "DESERT_XICUAHUA" });
    moveBornAndRaised(e);
  }
}

document.addEventListener("mousemove", moveBornAndRaised);
function moveBornAndRaised(e: MouseEvent) {
  const mouse = {
    x: e.clientX / window.innerWidth,
    y: e.clientY / window.innerHeight
  };

  const xicuahuaImg: HTMLImageElement | null = document.querySelector(
    "#xicuahua-img"
  );
  const desertP: HTMLParagraphElement | null = document.querySelector(
    "#desert-p"
  );
  const BornAndRaisedP: HTMLParagraphElement | null = document.querySelector(
    "#born-and-raised-p"
  );

  xicuahuaImg!.style.transform = `translate(${mouse.x * 14}px, ${mouse.y *
    14}px)`;

  desertP!.style.transform = `translate(${mouse.y * 6}%, ${mouse.x *
    6}%) skew(${mouse.y * 7}deg, ${mouse.x * 7}deg)`;

  BornAndRaisedP!.style.transform = `translate(${mouse.x * 8}%, ${mouse.y *
    8}%)`;
}
