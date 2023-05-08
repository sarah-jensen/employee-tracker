const inquirer = require('inquirer');
const employeeDb = require('./connection/connection');
const { viewData,
        addData,
        updateData,
        deleteData,
      } = require('./utils/userPurpose.js');


//Function to initialize app and display menu
async function trackerInit() {
  await inquirer.prompt([
    { name: "purpose",
      message: "What would you like to do?",
      type: 'list',
      choices: [
          { name: "View",
            value: "viewData",
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
            name: "Delete",
            value: "deleteData",
          },
        ],
      },
      ]).then((userPurpose) => {
        console.log(userPurpose);
        switch (userPurpose) {
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
  };
            
  trackerInit();
    
    
    
    
    
    
    
    
    
    
   
