import React from "react";
import { Slider } from "@mui/material";

const marks = [
  { value: 2000, label: "2000" },
  { value: 2022, label: "2022" },
];

function SelectYear({ roky, setRoky }) {
  const handleChange = (event, newValue) => {
    setRoky(newValue);
  };
  return (
    <div className={"components"}>
      <Slider
        value={roky}
        max={2022}
        min={2000}
        onChange={handleChange}
        valueLabelDisplay="auto"
        marks={marks}
      ></Slider>
    </div>
  );
}

export default SelectYear;
