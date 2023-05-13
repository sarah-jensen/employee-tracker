const inquirer = require("inquirer");
const employeeDb = require("./connection/connection");
const { 
  displayDepartments,
  displayRoles,
  displayEmployees } = require("./helpers/viewData");
const {
  addData,
  addDept,
  addRole,
  addEmployee,
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
async function trackerInit() {
  console.log('get started');
  inquirer.prompt([
      {
        name: "purpose",
        message: "What would you like to do?",
        type: "list",
        choices: [
          { name: "View", 
            value: "viewData" 
          },
          {
            name: "Add",
            value: "addData",
          },
          {
            name: "Update",
            value: "updateData",
          },
          {
            name: "Quit",
            value: "exitDatabase",
          },
        ],
      },
    ])
    .then((userPurpose) => {
      switch (userPurpose.purpose) {
        case "viewData":
          inquirer.prompt([
            {
              name: "view",
              message: "What would you like to view?",
              type: "list",
              choices: [
                {
                  name: "All Departments",
                  value: "allDepts" 
               },
               {
                  name: "All Roles",
                  value: "allRoles"
               },
               {
                  name: "All Employees",
                  value: "allEmps"
               },
              ],
            },
          ]).then((userView) => {
            switch (userView.view) {
              case "allDepts":
                displayDepartments();
                return trackerInit();
              case "allRoles":
                displayRoles()
                return trackerInit();
              case "allEmps":
                displayEmployees()
                return trackerInit();
              default: 
                console.log("Error processing view request");
                return trackerInit();
            };
          });
          break;
        case "addData":
          addData();
          break;
        case "updateData":
          updateData();
          break;
        case "exitDatabase":
          process.exit();
        // default:
        //   console.log("Error, please try again");
      }
    });
}

trackerInit();

// (async function init(){
//   await trackerInit();
// })();
