const { datafile } = require("./data");

const formatInput = name => {
  return name.charAt(0).toUpperCase() + name.substring(1);
};

exports.Provinces = () => {
  return Object.keys(datafile);
};

exports.Districts = () => {
  let districts = [];
  for (let province of Object.keys(datafile)) {
    for (let district of Object.keys(datafile[province])) {
      districts.push(district);
    }
  }
  return districts;
};

exports.District = province => {
  if (Object.keys(datafile).includes(formatInput(province))) {
    return Object.keys(datafile[formatInput(province)]);
  } else {
    return undefined;
  }
};
exports.Sectors = () => {
  let sectors = [];
  for (let province of Object.keys(datafile)) {
    for (let district of Object.keys(datafile[province])) {
      for (let sector of Object.keys(datafile[province][district])) {
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
  } else {
    return undefined;
  }
};
