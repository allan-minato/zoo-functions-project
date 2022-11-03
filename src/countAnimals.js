const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const newObject = {};
    species.forEach((specie) => {
      newObject[specie.name] = specie.residents.length;
    });
    return newObject;
  }
  if (animal.specie && animal.sex) {
    return species
      .find((animals) => animal.specie === animals.name)
      .residents.filter((sex) => animal.sex === sex.sex).length;
  }
  if (animal.specie) {
    return species.find((animals) => animal.specie === animals.name).residents
      .length;
  }
}

module.exports = countAnimals;
