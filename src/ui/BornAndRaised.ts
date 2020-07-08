import xicuahuaUrl from "../assets/images/xicuahua.svg";

export default function BornAndRaised(desertXicuahua: string) {
  const cursorStyle = desertXicuahua === "DESERT" ? "grab" : "grabbing";
  return `
  <div data-phantom=${desertXicuahua} id="born-and-raised-div">
    <div id="scorpion-div">
      <p id="born-and-raised-p">BORN AND RAISED IN THE</p>
      <p id="desert-p" style="cursor: ${cursorStyle}">${desertXicuahua}</p>
      <img id="xicuahua-img" src=${xicuahuaUrl} alt="Outline of Chihuahuan border, Mexico">
    </div>
  </div>
    `;
}
