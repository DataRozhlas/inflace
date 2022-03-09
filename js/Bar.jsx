import React, { useRef, useLayoutEffect } from "react";
import { Typography, Box } from "@mui/material";

function Bar({ n, v, v2, k, isMobile }) {
  const vyskaGrafu = 150;
  const sirkaSloupce = isMobile ? 18 : 24;

  const barContainer = useRef();
  const blueBar = useRef();
  const outlineBar = useRef();

  useLayoutEffect(() => {
    //console.log("barContainer", barContainer.current);
    //console.log("blueBar", blueBar.current.getAttribute("height"));
    //console.log("outlineBar", outlineBar.current);
    const Xoffset = barContainer.current.clientWidth / 2 - sirkaSloupce / 2;
    const YoffsetBlue = vyskaGrafu - blueBar.current.getAttribute("height") - 1;
    const YoffsetOutline =
      vyskaGrafu - outlineBar.current.getAttribute("height") - 1;

    blueBar.current.setAttribute(
      "transform",
      `translate(${Xoffset}, ${YoffsetBlue})`
    );
    outlineBar.current.setAttribute(
      "transform",
      `translate(${Xoffset}, ${YoffsetOutline})`
    );
  }, [v2]);

  return (
    <div
      className="bar"
      style={
        isMobile
          ? { width: `${sirkaSloupce + 1}px`, height: `${vyskaGrafu * 2}px` }
          : null
      }
    >
      <svg ref={barContainer} height={`${vyskaGrafu}px`}>
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
      {!isMobile && (
        <Typography
          variant={"caption"}
          align={"center"}
          sx={{ marginTop: "0.5rem" }}
        >
          {n}
        </Typography>
      )}

      {isMobile && (
        <Box sx={{ transform: "rotate(90deg) translate(2px, -2px)" }}>
          <Typography
            variant={"caption"}
            noWrap={true}
            sx={{ overflow: "hidden" }}
          >
            {k}
          </Typography>
        </Box>
      )}
    </div>
  );
}

export default Bar;
