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
  updateData,
  updateEmRole,
  updateEmManager,
} = require("./helpers/updateData.js");
const {
  deleteData,
  deleteDept,
  deleteManager,
  deleteEmployee,
} = require("./helpers/deleteData.js");




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
        "Update a role",
        "Update an employee",
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
          console.log('New department added');
          return trackerInit();
        }
        case "Add a role": {
          await addRole()
          console.log('New role added');
          return trackerInit();
        }
        case "Add an employee":  {
          await addEmployee();
          console.log('New employee added');
          return trackerInit();
        }
        case "Update a role": {
          await updateRole();
          console.log('Role updated');
        }
        case "Update an employee": {
          await updateEmployee();
          console.log('Employee updated');
        }
        case "Quit": {
          process.exit();
      }
    };
  });
};



trackerInit();

// (async function init(){
//   await trackerInit();
// })();
