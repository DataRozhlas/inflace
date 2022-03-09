import "./byeie"; // loučíme se s IE
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import Kalkulacka from "./Kalkulacka.jsx";
import Switcher from "./Switcher.jsx";

ReactDOM.render(<Kalkulacka />, document.getElementById("kalkulacka"));

ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(<Switcher />, document.getElementById("switcher"));

// analytics zda se scrolluje doprava
function anlSend(jsn) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://x27m1i3il0.execute-api.eu-central-1.amazonaws.com/prod', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(jsn));
};

const uid = Date.now().toString() + Math.floor(Math.random() * 100000000000000).toString();
anlSend({'uid': uid, 'e': 'load'})
const horScr = document.getElementsByClassName('scrollx');
let fired = 0;
horScr[0].addEventListener('scroll', (e) => {
  if (fired === 0) {
    fired = 1;
    anlSend({'uid': uid, 'e': 'xscrl'})
  }
})

/*
// snadné načtení souboru pro každého!
fetch("https://blabla.cz/blabla.json")
  .then(response => response.json()) // nebo .text(), když to není json
  .then(data => {
    // tady jde provést s daty cokoliv
  });
*/
