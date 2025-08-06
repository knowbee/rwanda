const datafile = require("./data/provinces");

/**
 * @param {string}
 * @returns {string} Capitalized string
 * @example
 * 'kiGALi'; // => Kigali
 */
const capitalize = (word) => {
  return word.toLowerCase().replace(/^./, word[0].toUpperCase());
};

/**
 * @param {string}
 * @returns {string} normalized input
 * @example
 * 'kiGALi'; // => Kigali
 * 'RANGO a'; // => Rango A
 */
const formatInput = (name) => {
  let input = name;
  if (name) {
    const wordsInName = name.split(" ");
    if (wordsInName.length === 2) {
      const firstWord = capitalize(wordsInName[0]);
      const secondWord = wordsInName[1].toUpperCase();
      input = firstWord + " " + secondWord;
    } else if (wordsInName.length === 1) {
      input = capitalize(name);
    }
  }

  return input;
};

/**
 * @returns {array} province
 * @example
 * Provinces(); // => [] of all provinces found in Rwanda
 */
exports.Provinces = () => {
  return Object.keys(datafile);
};

/**
 * @param {string|array} [provinces]
 * @returns {array} districts
 * @example
 * Districts("Kigali"); // => [] of all districts found in Kigali
 * Districts(["Kigali", "North"]); // => [] of all districts found in Kigali and North provinces
 * Districts(); // => [] of all districts found in Rwanda
 */
exports.Districts = (provinces) => {
  if (Array.isArray(provinces)) {
    const districts = [];
    for (const province of provinces) {
      if (datafile[formatInput(province)]) {
        districts.push(...Object.keys(datafile[formatInput(province)]));
      }
    }
    return districts;
  }

  if (provinces) {
    return Object.keys(datafile[formatInput(provinces)]);
  }

  if (!provinces) {
    const districts = [];
    for (const province of Object.keys(datafile)) {
      for (const district of Object.keys(datafile[province])) {
        districts.push(district);
      }
    }
    return districts;
  }
  return undefined;
};

/**
 * @param {string} [province]
 * @param {string} [district]
 * @returns {array} sectors
 * @example
 * Sectors("Kigali","Kicukiro"); // => [] of all sectors found in Kicukiro district
 * Sectors(); // => [] of all sectors found in Rwanda
 */
exports.Sectors = (province, district) => {
  if (province && district && datafile[formatInput(province)]) {
    const sectors = datafile[formatInput(province)][formatInput(district)];
    if (!sectors) {
      throw Error("Given data was invalid");
    }
    return Object.keys(sectors);
  }
  if (!province && !district) {
    const sectors = [];
    for (const datafileProvince of Object.keys(datafile)) {
      for (const datafileDistrict of Object.keys(datafile[datafileProvince])) {
        for (const sector of Object.keys(datafile[datafileProvince][datafileDistrict])) {
          sectors.push(sector);
        }
      }
    }
    return sectors;
  }
  return undefined;
};
/**
 * @param {string} [province]
 * @param {string} [district]
 * @param {string} [sector]
 * @returns {array} cells
 * @example
 * Cells("South", "Huye", "Tumba"); // => [] of all cells found in Tumba sector
 * Cells(); // => [] of all cells found in Rwanda
 */
exports.Cells = (province, district, sector) => {
  if (
    province &&
    district &&
    sector &&
    datafile[formatInput(province)] &&
    datafile[formatInput(province)][formatInput(district)]
  ) {
    const cells =
      datafile[formatInput(province)][formatInput(district)][
        formatInput(sector)
      ];
    if (!cells) {
      throw Error("Given data was invalid");
    }
    return Object.keys(cells);
  }
  if (!province && !district && !sector) {
    const cells = [];
    for (const datafileProvince of Object.keys(datafile)) {
      for (const datafileDistrict of Object.keys(datafile[datafileProvince])) {
        for (const datafileSector of Object.keys(datafile[datafileProvince][datafileDistrict])) {
          for (const cell of Object.keys(
            datafile[datafileProvince][datafileDistrict][datafileSector]
          )) {
            cells.push(cell);
          }
        }
      }
    }
    return cells;
  }

  return undefined;
};
/**
 * @param {string} [province]
 * @param {string} [district]
 * @param {string} [sector]
 * @param {string} [cell]
 * @returns {array} villages
 * @example
 * Villages("South", "Huye", "Tumba", "Cyarwa"); // => [] of all villages found in Cyarwa cell
 * Villages(); // => [] of all villages found in Rwanda
 */
exports.Villages = (province, district, sector, cell) => {
  if (
    province &&
    district &&
    sector &&
    cell &&
    datafile[formatInput(province)] &&
    datafile[formatInput(province)][formatInput(district)] &&
    datafile[formatInput(province)][formatInput(district)][
      formatInput(sector)
    ] &&
    datafile[formatInput(province)][formatInput(district)][formatInput(sector)][
      formatInput(cell)
    ]
  ) {
    return datafile[formatInput(province)][formatInput(district)][
      formatInput(sector)
    ][formatInput(cell)];
  }
  if (!province && !district && !sector && !cell) {
    const villages = [];
    for (const datafileProvince of Object.keys(datafile)) {
      for (const datafileDistrict of Object.keys(datafile[datafileProvince])) {
        for (const datafileSector of Object.keys(datafile[datafileProvince][datafileDistrict])) {
          for (const datafileCell of Object.keys(
            datafile[datafileProvince][datafileDistrict][datafileSector]
          )) {
            for (const village of Object.keys(
              datafile[datafileProvince][datafileDistrict][datafileSector][datafileCell]
            )) {
              villages.push(
                datafile[datafileProvince][datafileDistrict][datafileSector][datafileCell][village]
              );
            }
          }
        }
      }
    }
    return villages;
  }
  return undefined;
};
