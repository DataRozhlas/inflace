import React from "react";
import { Typography } from "@mui/material";

function Bar({ n, v, v2 }) {
  return (
    <div className="bar">
      <Typography variant={"caption"}>{n}</Typography>
      <svg height={"1em"} width={"100%"}>
        <rect height={"1em"} width={`${v2 / 10}%`} fill="#7aaacc"></rect>
        <rect
          height={"1em"}
          width={`${v / 10}%`}
          fill="none"
          stroke="black"
        ></rect>
      </svg>
    </div>
  );
}

export default Bar;
