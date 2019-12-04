const datafile = require("./data/provinces");

const formatInput = name => {
  return name ? name.charAt(0).toUpperCase() + name.substring(1) : undefined;
};

exports.Provinces = () => {
  return Object.keys(datafile);
};

exports.Districts = () => {
  const districts = [];
  for (const province of Object.keys(datafile)) {
    for (const district of Object.keys(datafile[province])) {
      districts.push(district);
    }
  }
  return districts;
};

exports.District = province => {
  if (Object.keys(datafile).includes(formatInput(province))) {
    return Object.keys(datafile[formatInput(province)]);
  }
  return undefined;
};
exports.Sectors = () => {
  const sectors = [];
  for (const province of Object.keys(datafile)) {
    for (const district of Object.keys(datafile[province])) {
      for (const sector of Object.keys(datafile[province][district])) {
        sectors.push(sector);
      }
    }
  }
  return sectors;
};
exports.Sector = (province, district) => {
  if (
    Object.keys(datafile).includes(formatInput(province)) &&
    Object.keys(datafile[province]).includes(formatInput(district))
  ) {
    return Object.keys(datafile[formatInput(province)][formatInput(district)]);
  }
  return undefined;
};
exports.Cells = () => {
  const cells = [];
  for (const province of Object.keys(datafile)) {
    for (const district of Object.keys(datafile[province])) {
      for (const sector of Object.keys(datafile[province][district])) {
        for (const cell of Object.keys(datafile[province][district][sector])) {
          cells.push(cell);
        }
      }
    }
  }
  return cells;
};
exports.Cell = (province, district, sector) => {
  if (
    Object.keys(datafile).includes(formatInput(province)) &&
    Object.keys(datafile[formatInput(province)]).includes(
      formatInput(district)
    ) &&
    Object.keys(
      datafile[formatInput(province)][formatInput(district)]
    ).includes(formatInput(sector))
  ) {
    return Object.keys(
      datafile[formatInput(province)][formatInput(district)][
        formatInput(sector)
      ]
    );
  }
  return undefined;
};
exports.Villages = () => {
  const villages = [];
  for (const province of Object.keys(datafile)) {
    for (const district of Object.keys(datafile[province])) {
      for (const sector of Object.keys(datafile[province][district])) {
        for (const cell of Object.keys(datafile[province][district][sector])) {
          for (const village of Object.keys(
            datafile[province][district][sector][cell]
          )) {
            villages.push(datafile[province][district][sector][cell][village]);
          }
        }
      }
    }
  }
  return villages;
};
exports.Village = (province, district, sector, cell) => {
  if (
    Object.keys(datafile).includes(formatInput(province)) &&
    Object.keys(datafile[formatInput(province)]).includes(
      formatInput(district)
    ) &&
    Object.keys(
      datafile[formatInput(province)][formatInput(district)]
    ).includes(formatInput(sector)) &&
    Object.keys(
      datafile[formatInput(province)][formatInput(district)][
        formatInput(sector)
      ]
    ).includes(formatInput(cell))
  ) {
    return datafile[formatInput(province)][formatInput(district)][
      formatInput(sector)
    ][formatInput(cell)];
  }
  return undefined;
};
