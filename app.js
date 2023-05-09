const inquirer = require("inquirer");
const employeeDb = require("./connection/connection");
const { viewData } = require("./utils/viewData.js");
const {
  addData,
  addDept,
  addRole,
  addEmployee,
} = require("./utils/addData.js");
const {
  updateData,
  updateEmRole,
  updateEmManager,
} = require("./utils/updateData.js");
const {
  deleteData,
  deleteDept,
  deleteManager,
  deleteEmployee,
} = require("./utils/deleteData.js");

//Function to initialize app and display menu
function trackerInit() {
  console.log('get started');
  inquirer.prompt([
      {
        name: "purpose",
        message: "What would you like to do?",
        type: "list",
        choices: [
          { name: "View", value: "viewData" },
          {
            name: "Add",
            value: "addData",
          },
          {
            name: "Update",
            value: "updateData",
          },
          {
            name: "Delete",
            value: "deleteData",
          },
        ],
      },
    ])
    .then((userPurpose) => {
      switch (userPurpose.purpose) {
        case "viewData":
          viewData();
          break;
        case "addData":
          addData();
          break;
        case "updateData":
          updateData();
          break;
        case "deleteData":
          deleteData();
          break;
        default:
          console.log("Error, please try again");
      }
    });
}

trackerInit();

// (async function init(){
//   await trackerInit();
// })();
