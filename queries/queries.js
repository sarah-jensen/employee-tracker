const employeeDb = require('../connection/connection.js');

const VIEW_DEPARTMENTS = `SELECT * FROM department;`

const VIEW_ROLES = `SELECT * FROM role;`

const VIEW_EMPLOYEES = `SELECT * FROM employee;`




module.exports = {
    VIEW_DEPARTMENTS,
    VIEW_ROLES,
    VIEW_EMPLOYEES
 }