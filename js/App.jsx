import React, { useState, useEffect } from "react";
//import d3 from "./d3Importer.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//import kos from "../data/kos.json";
//import Uhrn from "./Uhrn.jsx";
import kose from "../data/kose.json";
import cpi from "../data/cpi.json";
import Buttons from "./Buttons.jsx";
import Comment from "./Comment.jsx";
import Result from "./Result.jsx";
import Average from "./Average.jsx";
import SelectYear from "./SelectYear.jsx";
import Barchart from "./Barchart.jsx";

const isMobile = window.innerWidth < 769;

const theme = createTheme({
  palette: {
    primary: {
      main: "#267080",
      dark: "#B1CBD1",
      light: "#D8E5E8",
    },
  },
  typography: { fontFamily: '"Fira Sans", "Helvetica", "Arial", sans-serif' },
});

const App = () => {
  const [roky, setRoky] = useState([2021, 2021]);
  const [skupina, setSkupina] = useState(0);
  const [vybranyKos, setVybranyKos] = useState(kose[0]);

  useEffect(() => {
    setVybranyKos(kose[skupina]);
  }, [skupina]);

  return (
    <ThemeProvider theme={theme}>
      <div id={"app"}>
        <Buttons
          skupina={skupina}
          setSkupina={setSkupina}
          kose={kose}
          isMobile={isMobile}
        />
        <Comment vybranyKos={vybranyKos} />
        <Result cpi={cpi} vybranyKos={vybranyKos} roky={roky} />
        <Average roky={roky} />
        <SelectYear roky={roky} setRoky={setRoky} />
        <Barchart vybranyKos={vybranyKos} isMobile={isMobile} />
      </div>
    </ThemeProvider>
  );
};

export default App;
