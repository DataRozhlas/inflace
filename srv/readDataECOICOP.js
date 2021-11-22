const fs = require("fs");
const readXlsxFile = require("read-excel-file/node");

// vyzkoušej rekurzi!

const makeTree = (rows, parent) => {
  let node = {
    props: {
      name: parent.name,
      jednotka1: parent.jednotka1,
      jednotka2: parent.jednotka2,
      vaha: parent.vaha,
    },
  };
  rows
    .filter((row) => {
      let result = false;

      parent.id === "E" &&
      row[0].length === parent.id.length + 2 &&
      row[0].includes(parent.id)
        ? (result = true)
        : null;

      row[0].includes(parent.id) && row[0].length === parent.id.length + 1
        ? (result = true)
        : null;

      row[0].includes(parent.id) &&
      row[0].includes(".") &&
      row[0].length === parent.id.length + 3
        ? (result = true)
        : null;

      return result;
    })
    .forEach((row) => {
      node[row[0]] = makeTree(rows, {
        id: row[0],
        name: row[1],
        jednotka1: row[2],
        jednotka2: row[3],
        vaha: row[4],
      });
    });
  return node;
};

const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
};

readXlsxFile("data/spot_kos2021.xlsx").then((rows) => {
  const removed = rows.splice(0, 5); // dej pryč prvních šest řádků z tabulky
  rows.forEach((row) => {
    row[0] = row[0].replace(".", ""); //odstraň z ECOICOP první tečku, aby se s ním líp pracovalo
  });
  //   console.log(
  //     JSON.stringify(
  //       makeTree(rows, {
  //         id: "E",
  //         name: "Úhrn",
  //         jednotka1: null,
  //         jednotka2: null,
  //         vaha: 1000,
  //       }),
  //       null,
  //       2
  //     )
  //   );
  storeData(
    makeTree(rows, {
      id: "E",
      name: "Úhrn",
      jednotka1: null,
      jednotka2: null,
      vaha: 1000,
    }),

    "data/kos.json"
  );
});
