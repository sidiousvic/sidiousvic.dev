import xicuahuaUrl from "../assets/images/xicuahua.svg";
import { DATA } from "../MOTHERBOARD";

export default function BornAndRaised() {
  const { desertXicuahua } = DATA();

  const cursor = desertXicuahua === "DESERT" ? "grab" : "grabbing";
  return `
  <div class="born-and-raised-div">
    <div class="scorpion-div">
      <p class="born-and-raised-p">BORN AND RAISED IN THE</p>
      <p class="desert-p" style="cursor: ${cursor}">${desertXicuahua}</p>
      <img class="xicuahua-img" src="${xicuahuaUrl}" alt="Outline of Chihuahuan border, Mexico">
    </div>
  </div>
    `;
}
