const data = require('../data/zoo_data');

const daysOfWeek = Object.keys(data.hours);
const names = data.species.map((specie) => specie.name);

function nameOfAnimal(name) {
  return names.includes(name);
}

function getAnimal(name) {
  const { availability } = data.species.find((specie) => specie.name === name);
  return availability;
}

function dayOfTheWeek(day) {
  return daysOfWeek.includes(day);
}

function formatOfficeHour({ open, close }) {
  return `Open from ${open}am until ${close}pm`;
}

function getDay(day) {
  const result = {};
  let exhibition;
  let officeHour;

  if (day === 'Monday') {
    exhibition = 'The zoo will be closed!';
    officeHour = 'CLOSED';
  } else {
    officeHour = formatOfficeHour(data.hours[day]);
    exhibition = data.species
      .filter((specie) => specie.availability.includes(day))
      .map((specie) => specie.name);
  }

  result[day] = { officeHour, exhibition };

  return result;
}

function getAll() {
  let result = {};
  daysOfWeek.forEach((day) => {
    result = Object.assign(getDay(day), result);
  });

  return result;
}

function getSchedule(scheduleTarget) {
  if (nameOfAnimal(scheduleTarget)) {
    return getAnimal(scheduleTarget);
  }
  if (dayOfTheWeek(scheduleTarget)) {
    return getDay(scheduleTarget);
  }
  return getAll();
}
module.exports = getSchedule;
