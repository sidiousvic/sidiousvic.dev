import "./styles/global.css";
import PHANTOM from "./PHANTOM";
import SidiousSkull from "./three/SidiousSkull";
import Title from "./ui/Title";
import BornAndRaised from "./ui/BornAndRaised";
export const { FIRE, WATCH, DATA, LAUNCH } = PHANTOM(XDOM);

LAUNCH();

SidiousSkull();

function XDOM() {
  return `
  ${Title()}
  ${BornAndRaised()}
  `;
}

WATCH("click", justDoShit);
function justDoShit(e: MouseEvent) {
  if ((e.target as HTMLDivElement).classList.contains("title-h1")) {
    FIRE({ type: "JUST_DO_SHIT" });
    moveBornAndRaised(e);
  }
}

WATCH("mousedown", desertXicuahua);
WATCH("mouseup", desertXicuahua);
function desertXicuahua(e: MouseEvent) {
  if ((e.target as HTMLParagraphElement).classList.contains("desert-p")) {
    FIRE({ type: "DESERT_XICUAHUA" });
    moveBornAndRaised(e);
  }
}

WATCH("mousemove", moveBornAndRaised);
function moveBornAndRaised(e: MouseEvent) {
  const mouse = {
    x: (e.clientX - window.innerWidth / 2) / 2,
    y: (e.clientY - window.innerHeight / 2) / 2
  };
  const xicuahuaImg: HTMLImageElement | null = document.querySelector(
    ".xicuahua-img"
  );
  const desertP: HTMLParagraphElement | null = document.querySelector(
    ".desert-p"
  );
  const BornAndRaisedP: HTMLParagraphElement | null = document.querySelector(
    ".born-and-raised-p"
  );

  xicuahuaImg!.style.transform = `translate(${mouse.x * 0.01}px, ${mouse.y *
    0.01}px)`;

  desertP!.style.transform = `translate(${mouse.y * 0.04}%, ${mouse.x *
    0.04}%) skew(${mouse.y * 0.02}deg, ${mouse.x * 0.02}deg)`;

  BornAndRaisedP!.style.transform = `translate(${mouse.x * 0.03}%, ${mouse.y *
    0.03}%)`;
}
