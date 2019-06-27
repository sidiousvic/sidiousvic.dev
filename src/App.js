import React from "react";
import "./App.css";
import ThreeContainer from "./ThreeContainer";

function App() {
  return (
    <div className="App">
      <div className="titles">
        <div className="title" id="title-vicsidious">
          <h1>VIC SIDIOUS</h1>
        </div>
        <div className="title" id="title-description">
          DARKPSYCHNECROMETALIST
        </div>
      </div>
      <ThreeContainer />
      <div className="filler">&nbsp;</div>
      <div className="links">
        <ul>
          <a href="/">
            <li>projects</li>
          </a>
          <a href="https://www.twitter.com/sidiousvic">
            <li>twitter</li>
          </a>
          <a href="https://www.github.com/sidiousvic">
            <li>github</li>
          </a>
          <a href="https://www.dribbble.com/sidiousvic">
            <li>dribbble</li>
          </a>
          <a href="https://open.spotify.com/artist/211CHnITyO9kAjFhcpbPxu">
            <li>spotify</li>
          </a>
          <a href="https://open.spotify.com/artist/211CHnITyO9kAjFhcpbPxu">
            <li>blog</li>
          </a>
        </ul>
      </div>

      <div id="vic-cutout" />
      <p />
      <p>© 2019 VIC SIDIOUS</p>
    </div>
  );
}

export default App;
