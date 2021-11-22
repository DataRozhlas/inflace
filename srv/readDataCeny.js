const fs = require("fs");
const readXlsxFile = require("read-excel-file/node");

const data = readXlsxFile("data/csu-spotrebni-kos-zari-2021.xlsx").then(
  (rows) => {
    const names = rows.shift(); // oddel nazvy sloupcu
    const result = rows.map((row) => {
      // z kazde polozky vytvor objekt
      const obj = {};
      for (let i = 0; i < row.length; i++) {
        obj[names[i]] = row[i];
      }
      return obj;
    });
    fs.writeFileSync("data/ceny.json", JSON.stringify(result, null, 2));
    return result;
  }
);



data;
