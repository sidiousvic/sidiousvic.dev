import { DATA } from "../MOTHERBOARD";

export default function Title() {
  const { title } = DATA();
  return `
  <div class="title-div">
  <h1 class="title-h1" id="1">${title}</h1>
  </div>
  `;
}
