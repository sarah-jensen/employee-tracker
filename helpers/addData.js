const inquirer = require("inquirer");
const employeeDb = require('../connection/connection.js');


//add a Department
async function addDepartment() {
  try {
    await inquirer.prompt([
      {
        name: "deptName",
        message: "Enter new department name",
        type: "input"
      }
    ]).then(async (newDept) => {     
        let sql = `INSERT INTO department (name) VALUES ('${newDept.deptName}');`
        employeeDb.promise().query(sql);
            console.log('Department added successfully');
            
    });
  } catch (error) {
      console.log('Error adding department', error)
      return null;
    }
  };
 
  
  //add a Role
  async function addRole() {
    try {
      await inquirer.prompt([
        {
          name: "title",
          message: "Enter new role title",
          type: "input"
        },
        {
          name: "salary",
          message: "Enter salary",
          type: "number"
        },
        {
          name: "department_id",
          message: "Enter the department_id",
          type: "number"
        },
      ]).then(async (newRole) => {     
          let sql = `INSERT INTO role (title, salary, department_id) VALUES ('${newRole.title}', '${newRole.salary}', '${newRole.department_id}');`
          employeeDb.promise().query(sql);
              console.log('Role added successfully');
              
      });
    } catch (error) {
        console.log('Error adding role', error)
        return null;
      }
  };
  
  //add an Employee
  async function addEmployee() {
    try {
      await inquirer.prompt([
        {
          name: "first_name",
          message: "Enter first name",
          type: "input"
        },
        {
          name: "last_name",
          message: "Enter last name",
          type: "input"
        },
        {
          name: "role_id",
          message: "Enter the role_id",
          type: "number"
        },
        {
          name: "manager_id",
          message: "Enter the manager_id",
          type: "number"
        },
      ]).then(async (newEmployee) => {     
          let sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${newEmployee.first_name}', '${newEmployee.last_name}', '${newEmployee.role_id}', '${newEmployee.manager_id}');`
          employeeDb.promise().query(sql);
              console.log('Employee added successfully');
              
      });
    } catch (error) {
        console.log('Error adding employee', error)
        return null;
      }
  };


module.exports = {  
    addDepartment,
    addRole,
    addEmployee
};