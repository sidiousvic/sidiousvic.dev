export default function Title(title: any) {
  return `
  <div id="title-div">
    <h1 data-phantom="${title}" id="title-h1">${title}</h1>
  </div>
  `;
}
