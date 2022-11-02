const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  return species.filter((specie) => ids.includes(specie.id));
}

module.exports = getSpeciesByIds;
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));