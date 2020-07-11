import { justDoShit } from "../functions";

export default function Title(title: any) {
  document.addEventListener("click", justDoShit);

  return `
  <div id="title-div">
    <h1 data-phantom="${title}" id="title-h1">${title}</h1>
  </div>
  `;
}
