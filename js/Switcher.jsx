import React from "react";
import { useState } from "react";
import d3 from "./d3Importer.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const theme = createTheme({
  typography: { fontFamily: '"Fira Sans", "Helvetica", "Arial", sans-serif' },
});

function Switcher() {
  const [selected, setSelected] = useState("1");

  const handleSwitch = (event, newSelected) => {
    if (newSelected) {
      setSelected(newSelected);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ToggleButtonGroup
        exclusive
        value={selected}
        onChange={handleSwitch}
        sx={{ margin: "1rem auto", display: "flex", justifyContent: "center" }}
      >
        <ToggleButton value="1">Za poslední rok</ToggleButton>
        <ToggleButton value="2">Od začátku pandemie</ToggleButton>
        <ToggleButton value="3">Od roku 2015</ToggleButton>
      </ToggleButtonGroup>
      <picture>
        <source
          srcSet={`https://data.irozhlas.cz/inflace/img/porovnani-cen-${selected}-mob.svg`}
          media="(max-width: 600px)"
        />
        <img
          className="uzsi"
          src={`https://data.irozhlas.cz/inflace/img/porovnani-cen-${selected}-des.svg`}
          loading="lazy"
          alt="graf1"
        />
      </picture>
    </ThemeProvider>
  );
}

export default Switcher;
