import React from "react";
//import kos from "../data/kos.json";
//import Uhrn from "./Uhrn.jsx";
import Buttons from "./Buttons.jsx";
import Comment from "./Comment.jsx";
import Result from "./Result.jsx";
import Average from "./Average.jsx";
import Slider from "./Slider.jsx";
import Barchart from "./Barchart.jsx";

const isMobile = window.innerWidth < 600;

const App = () => {
  return (
    <div id={"app"}>
      <Buttons isMobile={isMobile} />
      <Comment />
      <Result />
      <Average />
      <Slider />
      <Barchart />
    </div>
  );
};

export default App;
