const inquirer = require('inquirer');
const employeeDb = require('./connection/connection');




//Function to initialize app and display menu
function trackerInit() {
  inquirer.prompt([
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
            
        }
      });
    };
            

  trackerInit();
    
    
    
    
    
    
    
    
    
    
   
