import React from "react";
import { Button, ButtonGroup } from "@mui/material";

function Buttons({ isMobile }) {
  return (
    <div className={"components buttons"}>
      <ButtonGroup
        orientation="vertical"
        fullWidth={isMobile}
        sx={{ minWidth: isMobile ? "100%" : "50%" }}
      >
        <Button>Domácnosti celkem</Button>
        <Button>Domácnosti důchodců</Button>
        <Button>Domácnosti v Praze</Button>
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        fullWidth={isMobile}
        sx={{ minWidth: isMobile ? "100%" : "50%" }}
      >
        <Button>Skupina 4</Button>
        <Button>Skupina 5</Button>
        <Button>Skupina 6</Button>
      </ButtonGroup>
    </div>
  );
}

export default Buttons;
