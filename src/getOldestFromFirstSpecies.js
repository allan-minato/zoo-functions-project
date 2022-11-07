const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const getEmploy = employees.find((employ) => id === employ.id).responsibleFor[0];
  const getAnimal = species.find((specie) => specie.id === getEmploy);
  const olderAnimal = getAnimal.residents.sort((a, b) => b.age - a.age);
  return Object.values(olderAnimal[0]);
}

module.exports = getOldestFromFirstSpecies;
