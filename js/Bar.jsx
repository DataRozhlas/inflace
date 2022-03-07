import React from "react";
import { Typography } from "@mui/material";

function Bar({ n, v, v2 }) {
  return (
    <div className="bar">
      <Typography variant={"caption"}>{n}</Typography>
      <svg height={"1.1em"} width={"100%"}>
        <rect height={"1em"} width={`${v2 / 10}%`} fill="#7aaacc"></rect>
        <rect
          width={`${v / 10}%`}
          x={0.5}
          y={0.5}
          height={"1em"}
          fill="none"
          stroke="black"
          strokeWidth="1px"
        ></rect>
      </svg>
    </div>
  );
}

export default Bar;
