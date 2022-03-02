import React from "react";
import { useState } from "react";
//import kos from "../data/kos.json";
//import Uhrn from "./Uhrn.jsx";
import Buttons from "./Buttons.jsx";
import Comment from "./Comment.jsx";
import Result from "./Result.jsx";
import Average from "./Average.jsx";
import SelectYear from "./SelectYear.jsx";
import Barchart from "./Barchart.jsx";

const isMobile = window.innerWidth < 600;

const App = () => {
  const [roky, setRoky] = useState([2021, 2022]);
  return (
    <div id={"app"}>
      <Buttons isMobile={isMobile} />
      <Comment />
      <Result />
      <Average />
      <SelectYear roky={roky} setRoky={setRoky} />
      <Barchart />
    </div>
  );
};

export default App;
