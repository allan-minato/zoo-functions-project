const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((manager) =>
    manager.managers.some((managerId) => managerId === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    return data.employees
      .filter((employ) => employ.managers.includes(managerId))
      .map((employ) => `${employ.firstName} ${employ.lastName}`);
  }
}

module.exports = { isManager, getRelatedEmployees };
