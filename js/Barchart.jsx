import React from "react";
import Bar from "./Bar.jsx";

const slozeniKoseVsechny = [
  { id: "E01", n: "Potraviny a nealkoholické nápoje", v: 178.075443 },
  { id: "E02", n: "Alkoholické nápoje, tabák", v: 86.948337 },
  { id: "E03", n: "Odívání a obuv", v: 38.945347 },
  { id: "E04", n: "Bydlení, voda, energie, paliva", v: 267.373622 },
  {
    id: "E05",
    n: "Bytové vybavení, zařízení domácnosti, opravy",
    v: 58.333435,
  },
  { id: "E06", n: "Zdraví", v: 26.544646 },
  { id: "E07", n: "Doprava", v: 103.689553 },
  { id: "E08", n: "Pošty a telekomunikace", v: 32.611933 },
  { id: "E09", n: "Rekreace a kultura", v: 81.481897 },
  { id: "E10", n: "Vzdělávání", v: 5.565065 },
  { id: "E11", n: "Stravování a ubytování", v: 57.909566 },
  { id: "E12", n: "Ostatní zboží a služby", v: 62.521156 },
];

function Barchart({ slozeniKose }) {
  return (
    <div className={"components barchart"}>
      {slozeniKoseVsechny.map((item) => {
        const v2 = slozeniKose.filter((i2) => i2.id === item.id)[0].v;

        return <Bar key={item.id} n={item.n} v={item.v} v2={v2}></Bar>;
      })}
    </div>
  );
}

export default Barchart;
