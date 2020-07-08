export default function Title(pizza: any) {
  return `
  <div id="title-div">
    <h1 data-phantom="${pizza}" id="title-h1">${pizza}</h1>
  </div>
  `;
}
