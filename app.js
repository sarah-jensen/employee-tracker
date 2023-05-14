const inquirer = require("inquirer");
const employeeDb = require("./connection/connection");
const { 
  displayDepartments,
  displayRoles,
  displayEmployees } = require("./helpers/viewData.js");
const {
  addDepartment,
  addRole,
  addEmployee
} = require("./helpers/addData.js");
const {
  updateEmployeeRole
} = require("./helpers/updateData.js");




//Function to initialize app and display menu
function trackerInit() {
  inquirer.prompt([
    {
      name: "purpose",
      message: "What would you like to do?",
      type: "list",
      choices: [
        "View all departments",
        "View all roles",
        "View all Employees", 
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Quit",   
        ]
    }
  ]).then(async (userResponse) => {
     switch(userResponse.purpose) {
        case "View all departments": {
          let deptTable = await displayDepartments();
          console.table(deptTable);
        return trackerInit();
        }
        case "View all roles": {
          let roleTable = await displayRoles()
          console.table(roleTable);
          return trackerInit();
        }
        case "View all Employees": {
          let employeeTable = await displayEmployees()
          console.table(employeeTable);
          return trackerInit();
        }
        case "Add a department": {
          await addDepartment();
          return trackerInit();
        }
        case "Add a role": {
          await addRole();
          return trackerInit();
        }
        case "Add an employee":  {
          await addEmployee();
          return trackerInit();
        }
        case "Update an employee role": {
          await updateEmployeeRole();
          return trackerInit();
        }
        case "Quit": {
          process.exit();
      }
    };
  });
};



trackerInit();


