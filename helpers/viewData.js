const employeeDb = require('../connection/connection.js');

const {
  VIEW_DEPARTMENTS,
  VIEW_ROLES,
  VIEW_EMPLOYEES
} = require('../queries/queries.js');

//show all Departments
async function displayDepartments() {
  console.log('retrieve');
  try {
    let results = await employeeDb.promise().query(VIEW_DEPARTMENTS);
    return results[0];
  } catch (error) {
    console.log('Error retrieving departments', error)
    return null;
  }
}; 

//show all Roles
async function displayRoles() {
  try {
    let results = await employeeDb.promise().query(VIEW_ROLES);
    console.table(results[0]);
  } catch (error) {
    console.log('Error retrieving roles')
  }
};

//show all Employees
async function displayEmployees() {
  try {
    let results = await employeeDb.promise().query(VIEW_EMPLOYEES);
    console.table(results[0]);
  } catch (error) {
    console.log('Error retrieving employees')
  }
};

module.exports = {
  displayDepartments,
  displayRoles,
  displayEmployees
}