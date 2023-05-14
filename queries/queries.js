const employeeDb = require('../connection/connection.js');

const VIEW_DEPARTMENTS = `SELECT * FROM department;`
const ADD_DEPARTMENT = `INSERT INTO department (name) VALUES (?)`

const VIEW_ROLES = `SELECT * FROM role;`
const ADD_ROLE = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`

const VIEW_EMPLOYEES = `SELECT * FROM employee;`
const ADD_EMPLOYEE = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`




module.exports = {
    VIEW_DEPARTMENTS,
    ADD_DEPARTMENT,
    VIEW_ROLES,
    ADD_ROLE,
    VIEW_EMPLOYEES,
    ADD_EMPLOYEE
 }