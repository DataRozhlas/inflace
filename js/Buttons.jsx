import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function Buttons({ skupina, setSkupina, kose, isMobile }) {
  const handleSkupinaChange = (event, newSkupina) => {
    if (typeof newSkupina === "number") {
      setSkupina(newSkupina);
    }
  };

  return (
    <div className={"components buttons"}>
      <ToggleButtonGroup
        exclusive
        color="primary"
        value={skupina}
        onChange={handleSkupinaChange}
        orientation={isMobile ? "vertical" : "horizontal"}
        fullWidth={isMobile}
      >
        <ToggleButton value={0}>{kose[0].nazev}</ToggleButton>
        <ToggleButton value={1}>{kose[1].nazev}</ToggleButton>
        <ToggleButton value={2}>{kose[2].nazev}</ToggleButton>
        <ToggleButton value={3}>{kose[3].nazev}</ToggleButton>
        <ToggleButton value={4}>{kose[4].nazev}</ToggleButton>
        <ToggleButton value={5}>{kose[5].nazev}</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default Buttons;
