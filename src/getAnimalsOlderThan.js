const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal)
    .residents.every((minAge) => minAge.age >= age);
}

module.exports = getAnimalsOlderThan;
