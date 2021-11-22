import React from "react";
import kos from "../data/kos.json";
import Uhrn from "./Uhrn.jsx";

const App = () => {
  return <Uhrn data={kos} />;
};

export default App;
