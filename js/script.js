import "./byeie"; // loučíme se s IE
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import Kalkulacka from "./Kalkulacka.jsx";
import Switcher from "./Switcher.jsx";

ReactDOM.render(<Kalkulacka />, document.getElementById("kalkulacka"));

ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(<Switcher />, document.getElementById("switcher"));

/*
// snadné načtení souboru pro každého!
fetch("https://blabla.cz/blabla.json")
  .then(response => response.json()) // nebo .text(), když to není json
  .then(data => {
    // tady jde provést s daty cokoliv
  });
*/
