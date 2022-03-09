import React from "react";
import { Typography } from "@mui/material";

const spoctiRocni = (rok, cpi, vybranyKos) => {
  const cpiRok = cpi.filter((i) => i.r === rok);
  const cpiSum = cpiRok.reduce(
    (acc, curr) => acc + (curr.h / 100) * vybranyKos[curr.u - 1],
    0
  );
  const result = cpiSum / 10;
  return result.toFixed(3);
};

const spoctiKumulovanou = (roky, cpi, vybranyKos) => {
  const rokyRada = [];
  for (let i = roky[0]; i < roky[1] + 1; i++) {
    rokyRada.push(spoctiRocni(i, cpi, vybranyKos));
  }
  const result = rokyRada.reduce((acc, curr) => (acc * curr) / 100, 100);
  return result.toFixed(1) - 100;
};

function Result({ cpi, vybranyKos, roky }) {
  return (
    <div className={"components numbers circle"}>
      <Typography variant={"h2"}>
        {`${spoctiKumulovanou(roky, cpi, vybranyKos.kos).toLocaleString(
          "cs-CZ"
        )} %`}
      </Typography>
      <Typography variant={"caption"}>{vybranyKos.nazev}</Typography>
    </div>
  );
}

export default Result;
