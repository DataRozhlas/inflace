import React from "react";
import Skupina from "./Skupina.jsx";

const Uhrn = ({ data }) => {
  const skupiny = Object.keys(data);
  const zahodit = skupiny.shift();
  return (
    <div>
      {skupiny.map((skupina, index) => {
        return <Skupina data={data[skupina]} key={index} />;
      })}
    </div>
  );
};

export default Uhrn;
