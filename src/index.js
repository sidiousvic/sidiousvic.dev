import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// animate subtitle
const title = document.querySelector("#title-description");
(function switchTitles() {
  const descriptions = [
    "DARKPSYCHNECROMETALIST",
    "MARTIANECROPHAGIST",
    "ULTRAVENOMIST",
    "NECROMANTULIST",
    "OPHIOPHAGIST"
  ];
  let random = Math.floor(Math.random() * 3) + 1;
  window.setInterval(function() {
    while (title.innerHTML === descriptions[random]) {
      random = Math.floor(Math.random() * 5);
    }
    title.innerHTML = descriptions[random];
  }, 3000);
})();
