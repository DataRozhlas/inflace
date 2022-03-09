import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function Buttons({ skupina, setSkupina, isMobile }) {
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
        <ToggleButton value={0}>Domácnosti celkem</ToggleButton>
        <ToggleButton value={1}>Domácnosti důchodců</ToggleButton>
        <ToggleButton value={2}>Domácnosti v Praze</ToggleButton>
        <ToggleButton value={3}>Domácnosti důchodců</ToggleButton>
        <ToggleButton value={4}>Domácnosti důchodců</ToggleButton>
        <ToggleButton value={5}>Domácnosti důchodců</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default Buttons;
