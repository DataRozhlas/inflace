import React, { useRef, useLayoutEffect } from "react";
import { Typography } from "@mui/material";

const vyskaGrafu = 150;
const sirkaSloupce = 24;

function Bar({ n, v, v2 }) {
  const barContainer = useRef();
  const blueBar = useRef();
  const outlineBar = useRef();

  useLayoutEffect(() => {
    //console.log("barContainer", barContainer.current);
    //console.log("blueBar", blueBar.current.getAttribute("height"));
    //console.log("outlineBar", outlineBar.current);
    const Xoffset = barContainer.current.clientWidth / 2 - 16 / 2;
    const YoffsetBlue = vyskaGrafu - blueBar.current.getAttribute("height");
    const YoffsetOutline =
      vyskaGrafu - outlineBar.current.getAttribute("height");

    blueBar.current.setAttribute(
      "transform",
      `translate(${Xoffset}, ${YoffsetBlue})`
    );
    outlineBar.current.setAttribute(
      "transform",
      `translate(${Xoffset}, ${YoffsetOutline})`
    );
  }, []);

  return (
    <div className="bar">
      <svg ref={barContainer} height={`${vyskaGrafu}px`} width={"100%"}>
        <rect
          ref={blueBar}
          width={`${sirkaSloupce}`}
          height={`${v2 / 2.2}`}
          fill="#7aaacc"
        ></rect>
        <rect
          ref={outlineBar}
          height={`${v / 2.2}`}
          width={`${sirkaSloupce}`}
          fill="none"
          stroke="black"
          strokeWidth="1px"
        ></rect>
      </svg>
      <Typography variant={"caption"} align={"center"}>
        {n}
      </Typography>
    </div>
  );
}

export default Bar;
