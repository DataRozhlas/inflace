import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const isMobile = window.innerWidth < 769;

const rocniInflace = [
  1.4, 9.7, 56.6, 11.1, 20.8, 10, 9.1, 8.8, 8.5, 10.7, 2.1, 3.9, 4.7, 1.8, 0.1,
  2.8, 1.9, 2.5, 2.8, 6.3, 1, 1.5, 1.9, 3.3, 1.4, 0.4, 0.3, 0.7, 2.5, 2.1, 2.8,
  3.2, 3.8,
];

const maxRok = 2021;

const minRok = 1989;

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

const spocitejInflaci = (castka, rok, rocniInflace) => {
  const roky = range(minRok, maxRok, 1);
  const inflace = rocniInflace.slice(roky.indexOf(rok), rocniInflace.length);
  const vysledek = inflace.reduce((acc, curr) => {
    return (acc / (100 + curr)) * 100;
  }, castka);
  return Math.floor(vysledek);
};

const Kalkulacka = () => {
  const [rok, setRok] = React.useState(2012);
  const [castka, setCastka] = React.useState(1000);
  return (
    <fieldset className="ramecek">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "0.6rem",
          borderLeftColor: "#d52834",
        }}
      >
        {/* <TextField
          id="castka"
          type="number"
          sx={{ maxWidth: "50px" }}
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          value={castka}
          onChange={(e) => setCastka(Number(e.target.value))}
        /> */}
        <input
          type="number"
          value={castka}
          min={0}
          max={9999999999}
          style={{
            width: "12ch",
            backgroundColor: "#f8fbfb",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
          }}
          onChange={(e) => setCastka(Number(e.target.value))}
        />
        <Typography variant="body1">Kč v roce</Typography>
        {/* <TextField
          id="rok"
          type="number"
          sx={{ maxWidth: "50px" }}
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          value={rok}
          inputProps={{
            max: maxRok,
            min: minRok,
          }}
          onChange={(e) => setRok(Number(e.target.value))}
        /> */}
        <input
          type="number"
          value={rok}
          min={minRok}
          max={maxRok}
          style={{
            width: "6ch",
            backgroundColor: "#f8fbfb",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
          }}
          onChange={(e) => setRok(Number(e.target.value))}
        />
        <Typography variant="body1">
          odpovídá letošním {spocitejInflaci(castka, rok, rocniInflace)} Kč
        </Typography>
      </div>
    </fieldset>
  );
};

export default Kalkulacka;
