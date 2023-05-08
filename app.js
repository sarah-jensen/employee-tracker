const inquirer = require('inquirer');
const employeeDb = require('./connection/connection');


//Function to initialize app and display menu
async function trackerInit() {
  await inquirer.prompt([
    { name: "purpose",
      message: "What would you like to do?",
      type: 'list',
      choices: [
          { name: "View",
            value: "VIEW_DATA",
          },
          {
            name: "Add",
            value: "ADD_DATA",
          },
          {
            name: "Update",
            value: "UDPATE_DATA",
          },
          {
            name: "Delete",
            value: "DELETE_DATA",
          },
        ],
      },
      ]).then((userPurpose) => {
        console.log(userPurpose);
        switch (userPurpose) {
          case "View":
            viewData();
            break;
          case "Add":
            addData();
            break;
          case "Update":
            updateData();
            break;
          case "Delete":
            deleteData();
            break;
          default:
            console.log("Error, please try again");           
        }
      });
  };
            
  trackerInit();
    
    
    
    
    
    
    
    
    
    
   
