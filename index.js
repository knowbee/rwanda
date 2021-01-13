const datafile = require('./data/provinces');

const formatInput = (name) => {
  return name.replace(/^./, name[0].toUpperCase());
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
 * @param {string} [province]
 * @returns {array} districts
 * @example
 * Districts("Kigali"); // => [] of all districts found in Kigali
 * Districts(); // => [] of all districts found in Rwanda
 */
exports.Districts = (province) => {
  if (province) {
    return Object.keys(datafile[formatInput(province)]);
  }
  if (!province) {
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
    return Object.keys(
      datafile[formatInput(province)][formatInput(district)] || []
    );
  }
  if (!province && !district) {
    const sectors = [];
    for (const province of Object.keys(datafile)) {
      for (const district of Object.keys(datafile[province])) {
        for (const sector of Object.keys(datafile[province][district])) {
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
    return Object.keys(
      datafile[formatInput(province)][formatInput(district)][
        formatInput(sector)
      ] || []
    );
  }
  if (!province && !district && !sector) {
    const cells = [];
    for (const province of Object.keys(datafile)) {
      for (const district of Object.keys(datafile[province])) {
        for (const sector of Object.keys(datafile[province][district])) {
          for (const cell of Object.keys(
            datafile[province][district][sector]
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
    return (
      datafile[formatInput(province)][formatInput(district)][
        formatInput(sector)
      ][formatInput(cell)] || []
    );
  }
  if (!province && !district && !sector && !cell) {
    const villages = [];
    for (const province of Object.keys(datafile)) {
      for (const district of Object.keys(datafile[province])) {
        for (const sector of Object.keys(datafile[province][district])) {
          for (const cell of Object.keys(
            datafile[province][district][sector]
          )) {
            for (const village of Object.keys(
              datafile[province][district][sector][cell]
            )) {
              villages.push(
                datafile[province][district][sector][cell][village]
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
