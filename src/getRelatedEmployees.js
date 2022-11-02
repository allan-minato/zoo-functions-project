const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((manager) => manager.managers.some((managerId) => managerId === id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
