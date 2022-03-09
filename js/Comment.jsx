import React from "react";
import { Typography } from "@mui/material";

function Comment({ vybranyKos }) {
  return (
    <div className={"components"}>
      <Typography variant={"caption"}>{vybranyKos.pozn}</Typography>
    </div>
  );
}

export default Comment;
