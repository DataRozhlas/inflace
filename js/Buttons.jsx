import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function Buttons({ isMobile }) {
  return (
    <div className={"components buttons"}>
      <ToggleButtonGroup
        exclusive
        color="primary"
        orientation={isMobile ? "vertical" : "horizontal"}
        fullWidth={isMobile}
      >
        <ToggleButton selected>Domácnosti celkem</ToggleButton>
        <ToggleButton>Domácnosti důchodců</ToggleButton>
        <ToggleButton>Domácnosti v Praze</ToggleButton>

        <ToggleButton>Domácnosti důchodců</ToggleButton>
        <ToggleButton>Domácnosti důchodců</ToggleButton>
        <ToggleButton>Domácnosti důchodců</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default Buttons;
