import React, { useState } from "react";
//import d3 from "./d3Importer.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//import kos from "../data/kos.json";
//import Uhrn from "./Uhrn.jsx";
import Buttons from "./Buttons.jsx";
import Comment from "./Comment.jsx";
import Result from "./Result.jsx";
import Average from "./Average.jsx";
import SelectYear from "./SelectYear.jsx";
import Barchart from "./Barchart.jsx";

const isMobile = window.innerWidth < 769;

const theme = createTheme({
  typography: { fontFamily: '"Fira Sans", "Helvetica", "Arial", sans-serif' },
});

const App = () => {
  const [roky, setRoky] = useState([2021, 2022]);
  const [skupina, setSkupina] = useState(0);
  const [slozeniKose, setSlozeniKose] = useState([
    { id: "E01", n: "Potraviny a nealkoholické nápoje", v: 178.075443 },
    { id: "E02", n: "Alkoholické nápoje, tabák", v: 86.948337 },
    { id: "E03", n: "Odívání a obuv", v: 38.945347 },
    { id: "E04", n: "Bydlení, voda, energie, paliva", v: 267.373622 },
    {
      id: "E05",
      n: "Bytové vybavení, zařízení domácnosti, opravy",
      v: 58.333435,
    },
    { id: "E06", n: "Zdraví", v: 26.544646 },
    { id: "E07", n: "Doprava", v: 103.689553 },
    { id: "E08", n: "Pošty a telekomunikace", v: 32.611933 },
    { id: "E09", n: "Rekreace a kultura", v: 81.481897 },
    { id: "E10", n: "Vzdělávání", v: 5.565065 },
    { id: "E11", n: "Stravování a ubytování", v: 57.909566 },
    { id: "E12", n: "Ostatní zboží a služby", v: 62.521156 },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <div id={"app"}>
        <Buttons
          skupina={skupina}
          setSkupina={setSkupina}
          isMobile={isMobile}
        />
        <Comment />
        <Result />
        <Average />
        <SelectYear roky={roky} setRoky={setRoky} />
        <Barchart slozeniKose={slozeniKose} isMobile={isMobile} />
      </div>
    </ThemeProvider>
  );
};

export default App;
