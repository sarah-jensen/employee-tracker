const inquirer = require("inquirer");

function viewData() {
    inquirer.prompt([
    {   name: "viewChoice",
        message: "What would you like to view?",
        type: "list",
        choices: [
            {   name: "All departments",
                value: "viewDepartments",
            },
            {   name: "All roles",
                value: "viewRoles",
            },
            {   name: "All employees",
                value: "viewEmployees",
            },
            {   name: "Utilization budget",
                value: "viewBudget",
            },
        ],
    },
    ]).then((userView) => {
        switch (userView) {
            case "viewDepartments":
                //Query database for departments
                employeeDb.query("SELECT * FROM departments", values, (err) => {
                  if (err) {
                       console.log('Error retrieving departments');
                  }
                });
                break; 
              case "viewRoles":
              //Query database for roles
                employeeDb.query("SELECT * FROM roles", (err) => {
                  if (err) {
                  console.log('Error retrieving roles');
                  }
                });
                break;
              case "viewEmployees":
              //Query database for employees
                employeeDb.query("SELECT * FROM employees", (err) => {
                  if (err) {
                  console.log('Error retrieving employees');
                  }
                });
                break;
              // case "viewBudget":
              // //Query database for budget
              // employeeDb.query('SELECT * FROM employees', (err) => {
              //   if (err) {
              //     console.log('Error retrieving employees');
              //   }
              // });
              default: 
                console.log("Error viewing data");
        };
    });
};

//TODO: function to get all salary info by department
//TODO: function to sum salaries by department
//TODO: function to render utilized budget by deparment



module.exports = { 
    viewData,
};

//                     //sqlRoleUpdate
//                  
//          
//   //             case "Add a department":
//   //             //Add one to database
//   //             //do I need to add prompts to the tree for these parameters?
//   //               
//   //             case "Add a role":
//   //               //Add one to database
//   //               //do I need to add prompts to the tree for these parameters?
//   //               employeeDb.query("INSERT INTO roles (id, title, salary, department_id)", (err) => {
//   //                 if (err) {
//   //                   console.log('Error adding role');
//   //                 }
//   //               });
//   //               break;
//   //             case "Add an employee":
//   //               //Add one to database
//   //               //do I need to add prompts to the tree for these parameters?
//   //               employeeDb.query("INSERT INTO employees (id, first_name, last_name, role_id, manager_id)", (err) => {
//   //                 if (err) {
//   //                   console.log('Error adding employee');
//   //                 }
//   //               });
//   //               break;
//   //             case "Update an employee role":
//   //                 let sqlRoleUpdate = `UPDATE employees
//   //                                     SET role_id = ?
//   //                                     WHERE id = ?`;
//   //                 let roleData = [?,?]; //data from user's prompt input
//   //                 //TODO: do I need to add prompts to the tree for these parameters?
//   //                 employeeDb.query(sqlRoleUpdate, roleData, (err, results) => {
//   //                   if (err) {
//   //                     console.log('Error updating employee role');
//   //                   }
//   //                 console.log('Rows affected', results.affectedRows);
//   //                 });
//   //                 break;
//   //               case "Update an employee manager":
//   //                 let sqlRoleUpdate = `UPDATE employees
//   //                                     SET manager_id = ?
//   //                                     WHERE id = ?`;
//   //                  //use roleData data from user's prompt input
//   //               //do I need to add prompts to the tree for these parameters?
//   //               employeeDb.query(sqlRoleUpdate, roleData, (err, results) => {
//   //                 if (err) {
//   //                   console.log('Error updating employee manager');
//   //                 }
//   //                 console.log('Rows affected', results.affectedRows);
//   //               });
//   //               break;
  
  
//   //             }           
   
//   //           }
//   //         };
//   //  };
     