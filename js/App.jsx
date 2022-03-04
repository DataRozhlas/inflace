import React from "react";
import { useState } from "react";
import d3 from "./d3Importer.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//import kos from "../data/kos.json";
//import Uhrn from "./Uhrn.jsx";
import Buttons from "./Buttons.jsx";
import Comment from "./Comment.jsx";
import Result from "./Result.jsx";
import Average from "./Average.jsx";
import SelectYear from "./SelectYear.jsx";
import Barchart from "./Barchart.jsx";

const isMobile = window.innerWidth < 600;

const theme = createTheme({
  typography: { fontFamily: '"Fira Sans", "Helvetica", "Arial", sans-serif' },
});

const App = () => {
  const [roky, setRoky] = useState([2021, 2022]);
  const [slozeniKose, setSlozeniKose] = useState([
    178.075443, 86.948337, 38.945347, 267.373622, 58.333435, 26.544646,
    103.689553, 32.611933, 81.481897, 5.565065, 57.909566, 62.521156,
  ]);

  return (
    <ThemeProvider theme={theme}>
      <div id={"app"}>
        <Buttons isMobile={isMobile} />
        <Comment />
        <Result />
        <Average />
        <SelectYear roky={roky} setRoky={setRoky} />
        <Barchart slozeniKose={slozeniKose} />
      </div>
    </ThemeProvider>
  );
};

export default App;
