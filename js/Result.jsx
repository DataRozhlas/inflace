import React from "react";
import { Typography } from "@mui/material";

const spoctiRocni = (rok, cpi, vybranyKos) => {
  const cpiRok = cpi.filter((i) => i.r === rok);
  const cpiSum = cpiRok.reduce(
    (acc, curr) => acc + (curr.h / 100) * vybranyKos[curr.u - 1],
    0
  );
  const result = cpiSum / 10 - 100;
  console.log(result);
};

function Result({ cpi, vybranyKos, roky }) {
  return (
    <div className={"components numbers circle"}>
      <Typography variant={"h2"}>
        {spoctiRocni(2020, cpi, vybranyKos.kos)}
      </Typography>
      <Typography variant={"caption"}>vybraná skupina</Typography>
    </div>
  );
}

export default Result;
