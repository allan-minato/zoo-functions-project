const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return data.species
      .filter((specie) => specie.availability.includes(scheduleTarget))
      .map((specie) => specie.name);
  }
  const nameSpecie = data.species.filter((specie) => specie.name === scheduleTarget);
  return nameSpecie.map((specie) => specie.availability).find((specie) => specie);
}

console.log(getSchedule());

module.exports = getSchedule;
