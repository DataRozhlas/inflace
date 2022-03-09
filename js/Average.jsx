import React from "react";
import { Typography } from "@mui/material";

const ofiko = [
  { hodnota: 100.7, rok: 2016 },
  { hodnota: 102.8, rok: 2004 },
  { hodnota: 102.5, rok: 2017 },
  { hodnota: 101.5, rok: 2010 },
  { hodnota: 103.9, rok: 2000 },
  { hodnota: 103.3, rok: 2012 },
  { hodnota: 101.9, rok: 2011 },
  { hodnota: 104.7, rok: 2001 },
  { hodnota: 101, rok: 2009 },
  { hodnota: 106.3, rok: 2008 },
  { hodnota: 102.8, rok: 2007 },
  { hodnota: 100.3, rok: 2015 },
  { hodnota: 101.9, rok: 2005 },
  { hodnota: 102.5, rok: 2006 },
  { hodnota: 100.4, rok: 2014 },
  { hodnota: 101.4, rok: 2013 },
  { hodnota: 101.8, rok: 2002 },
  { hodnota: 100.1, rok: 2003 },
  { hodnota: 102.1, rok: 2018 },
  { hodnota: 103.2, rok: 2020 },
  { hodnota: 102.8, rok: 2019 },
  { hodnota: 103.8, rok: 2021 },
];

const spoctiKumulovanou = (roky, ofiko) => {
  const rokyRada = [];
  for (let i = roky[0]; i < roky[1] + 1; i++) {
    rokyRada.push(
      ofiko.filter((item) => {
        return item.rok === i;
      })[0].hodnota
    );
  }
  const result = rokyRada.reduce((acc, curr) => (acc * curr) / 100, 100) - 100;
  return result.toFixed(1);
};

function Average({ roky }) {
  return (
    <div className={"components numbers"}>
      <Typography variant={"h4"}>
        {`${spoctiKumulovanou(roky, ofiko).toLocaleString("cs-CZ")} %`}
      </Typography>
      <Typography variant={"caption"}>celková oficiální inflace</Typography>
    </div>
  );
}

export default Average;
