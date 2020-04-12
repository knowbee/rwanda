const datafile = require("./data/provinces");

const formatInput = (name) => {
  if (name && name.includes(" ")) {
    newName = name.split(" ");
    return `${newName[0].charAt(0).toUpperCase()}${newName[0]
      .substring(1)
      .toLowerCase()} ${newName[1]}`;
  } else {
    return name && name.length > 2
      ? `${name.charAt(0).toUpperCase()}${name.substring(1).toLowerCase()}`
      : undefined;
  }
};
/**
 * Provinces: it returns all provinces found in Rwanda
 * @returns {array} province
 */
exports.Provinces = () => {
  return Object.keys(datafile);
};

/**
 * Districts: if no params are given it returns all districts from Rwanda
 * otherwise it returns all districts from the given place (province)
 * @param {string} [province]
 * @returns {array} districts
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
 * Sectors: if no params are given it returns all sectors from Rwanda
 * otherwise it returns all sectors from the given place (province, district)
 * @param {string} [province]
 * @param {string} [district]
 * @returns {array} sectors
 */
exports.Sectors = (province, district) => {
  if (province && district) {
    return Object.keys(datafile[formatInput(province)][formatInput(district)]);
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
 * Cells: if no params are given it returns all cells from Rwanda
 * otherwise it returns all cells from the given place (province, district, sector)
 * @param {string} [province]
 * @param {string} [district]
 * @param {string} [sector]
 * @returns {array} cells
 */
exports.Cells = (province, district, sector) => {
  if (province && district && sector) {
    return Object.keys(
      datafile[formatInput(province)][formatInput(district)][
        formatInput(sector)
      ]
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
 * Villages: if no params are given it returns all villages from Rwanda
 * otherwise it returns all villages from the given place (provice, district, sector, cell)
 * @param {string} [province]
 * @param {string} [district]
 * @param {string} [sector]
 * @param {string} [cell]
 * @returns {array} villages
 */
exports.Villages = (province, district, sector, cell) => {
  if (province && district && sector && cell) {
    return datafile[formatInput(province)][formatInput(district)][
      formatInput(sector)
    ][formatInput(cell)];
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
