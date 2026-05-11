import React from "react";
import ReactDOM from "react-dom";
import * as pi from "./math.js";
// import pi, { doublePi, triplePi } from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
    {/* <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li> */}
  </ul>,
  document.getElementById("root")
);
