const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18);
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const senior = entrants.filter((entrant) => entrant.age >= 50);
  const newObject = {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };

  return newObject;
}

function calculateEntry(entrants) {
  if (!entrants || !entrants.length) {
    return 0;
  }
  const valueChild = countEntrants(entrants).child * data.prices.child;
  const valueAdult = countEntrants(entrants).adult * data.prices.adult;
  const valueSenior = countEntrants(entrants).senior * data.prices.senior;

  return valueChild + valueAdult + valueSenior;
}

module.exports = { calculateEntry, countEntrants };
