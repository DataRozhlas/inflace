import React from "react";
//import kos from "../data/kos.json";
//import Uhrn from "./Uhrn.jsx";
import Buttons from "./Buttons.jsx";
import Comment from "./Comment.jsx";
import Result from "./Result.jsx";
import Average from "./Average.jsx";
import Slider from "./Slider.jsx";
import Barchart from "./Barchart.jsx";

const App = () => {
  return (
    <div id={"app"}>
      <Buttons />
      <Result />
      <Average />
      <Slider />
      <Barchart />
      <Comment />
    </div>
  );
};

export default App;
