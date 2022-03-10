import React from "react";
import Bar from "./Bar.jsx";

const slozeniKoseVsechny = [
  { id: "E01", n: "Potraviny a nealko", k: "Potraviny", v: 178.075443 },
  { id: "E02", n: "Alkohol, tabák", k: "Alkohol, tabák", v: 86.948337 },
  { id: "E03", n: "Odívání a obuv", k: "Oděvy, obuv", v: 38.945347 },
  {
    id: "E04",
    n: "Bydlení, voda, energie, paliva",
    k: "Bydlení, energie",
    v: 267.373622,
  },
  {
    id: "E05",
    n: "Vybavení bytu, opravy",
    k: "Vybavení bytu, opravy",
    v: 58.333435,
  },
  { id: "E06", n: "Zdraví", k: "Zdraví", v: 26.544646 },
  { id: "E07", n: "Doprava", k: "Doprava", v: 103.689553 },
  {
    id: "E08",
    n: "Pošty a telekomunikace",
    k: "Pošty a telekom.",
    v: 32.611933,
  },
  { id: "E09", n: "Rekreace a kultura", k: "Rekreace, kultura", v: 81.481897 },
  { id: "E10", n: "Vzdělávání", k: "Vzdělávání", v: 5.565065 },
  {
    id: "E11",
    n: "Stravování a ubytování",
    k: "Stravování, ubytování",
    v: 57.909566,
  },
  { id: "E12", n: "Ostatní zboží a služby", k: "Ostatní", v: 62.521156 },
];

function Barchart({ vybranyKos, isMobile }) {
  return (
    <div className={"components barchart-spotrebni-kos"}>
      {slozeniKoseVsechny.map((item, index) => {
        const v2 = vybranyKos.kos[index];
        return (
          <Bar
            key={item.id}
            n={item.n}
            v={item.v}
            k={item.k}
            v2={v2}
            isMobile={isMobile}
          ></Bar>
        );
      })}
    </div>
  );
}

export default Barchart;
