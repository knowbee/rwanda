const {datafile} = require("./data")


const formatInput = name => {
  return name.charAt(0).toUpperCase() + name.substring(1)
}

exports.Provinces = () => {
  return Object.keys(datafile)
}

exports.Districts = () => {
  let districts = []
  for (let province of Object.keys(datafile)) {
    for (let district of Object.keys(datafile[province])) {
      districts.push(district)
    }
  }
  return districts
}
