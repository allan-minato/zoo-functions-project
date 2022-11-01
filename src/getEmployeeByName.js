const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(
    (employeed) =>
      employeeName === employeed.firstName
      || employeeName === employeed.lastName,
  );
}

module.exports = getEmployeeByName;
