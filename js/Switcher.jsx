import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

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

function Switcher() {
  const [selected, setSelected] = useState("1");

  const handleSwitch = (event, newSelected) => {
    if (newSelected) {
      setSelected(newSelected);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 500, fontSize: "1.5rem", marginTop: "1rem" }}
      >
        Co zdražilo, co zlevnilo?
      </Typography>
      <ToggleButtonGroup
        exclusive
        color="primary"
        value={selected}
        onChange={handleSwitch}
        sx={{ margin: "1rem auto", display: "flex", justifyContent: "center" }}
      >
        <ToggleButton value="1" sx={{ lineHeight: "1rem" }}>
          Za poslední rok
        </ToggleButton>
        <ToggleButton value="2" sx={{ lineHeight: "1rem" }}>
          Od začátku pandemie
        </ToggleButton>
        <ToggleButton value="3" sx={{ lineHeight: "1rem" }}>
          Od roku 2015
        </ToggleButton>
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
