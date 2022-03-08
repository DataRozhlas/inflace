import React from "react";
import { useRef } from "react";
import { Typography } from "@mui/material";

function Bar({ n, v, v2 }) {
  const barRef = useRef();
  return (
    <div ref={barRef} className="bar">
      <svg height={"150px"} width={"100%"}>
        <rect
          width={"1em"}
          height={`${(v2 / 10) * 2}%`}
          fill="#7aaacc"
          transform="translate(0,25)"
        ></rect>
        <rect
          height={`${(v / 10) * 2}%`}
          x={0.5}
          y={0.5}
          width={"1em"}
          fill="none"
          stroke="black"
          strokeWidth="1px"
        ></rect>
      </svg>
      {/* <Typography variant={"caption"} align={"center"}>
        {n}
      </Typography> */}
    </div>
  );
}

export default Bar;
