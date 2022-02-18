import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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
    return (acc * (100 - curr)) / 100;
  }, castka);
  return Math.floor(vysledek);
};

const Kalkulacka = () => {
  const [rok, setRok] = React.useState(2012);
  const [castka, setCastka] = React.useState(1000);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        flexWrap: "wrap",
        gap: "0.6rem",
        marginBottom: "1.2rem",
      }}
    >
      <TextField
        id="castka"
        type="number"
        sx={{ maxWidth: "120px" }}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          endAdornment: <InputAdornment position="end">Kč</InputAdornment>,
        }}
        variant="standard"
        value={castka}
        onChange={(e) => setCastka(Number(e.target.value))}
      />
      <Typography variant="body">z roku</Typography>
      <TextField
        id="rok"
        type="number"
        sx={{ maxWidth: "60px" }}
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
      />
      <Typography variant="body1">
        má letos hodnotu {spocitejInflaci(castka, rok, rocniInflace)} Kč.
      </Typography>
    </div>
  );
};

export default Kalkulacka;