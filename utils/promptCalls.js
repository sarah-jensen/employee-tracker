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
        console.log(userView);
        });
    };


function addData() {
    inquirer.prompt([
        {   name: "addColumn",
            message: "Which field would you like to add?",
            type: "list",
            choices: [
                {   name: "Add a department",
                    value: "addDepartment",
                },
                {   name: "Add a role",
                    value: "addRole",
                },
                {   name: "Add an employee",
                    value: "addEmployee",
                },
            ]
        },
    ]).then((userAdd) => {
        console.log(userAdd);
    });
};

function updateData() {
    inquirer.prompt([
        {   name: "updateValue",
            message: "Which field would you like to update?",
            type: "list",
            choices: [
                {   name: "Employee role",
                    value: "updateEmRole",
                },
                {   name: "Employee manager",
                    value: "updateEmManager",
                },
            ]
        }
    ]).then((userUpdate) => {
        console.log(userUpdate);
    });
};

function deleteData() {
    inquirer.prompt([
        {   name: "deleteValue",
            message: "Which field would you like to delete?",
            type: "list",
            choices: [
                {   name: "Delete department",
                    value: "deleteDept",
                },
                {   name: "Delete manager",
                    value: "deleteManager",
                },
                {   name: "Delete employee",
                    value: "deleteEmployee",
                },
            ]
        }
    ]).then((userDelete) => {
        console.log(userDelete);
    });
};


// }





//             { value: "Add",
//               open: false,
//               children: [
//                 { value: "Add a department",
//                   open: false,
//                   children: [
//                     { name: "department-name",
//                       message: "Enter a name for the new department",
//                       type: "input",
//                     },
//                   ]
//                 },
//                 { value: "Add a role",
//                   open: false,
//                   children: [
//                   { name: "roleTitle",
//                     message: "Enter a name for the new role",
//                     type: "input",
//                   },
//                   { name: "roleSalary",
//                     message: "Enter a salary for the new role",
//                     type: "number",
//                   },
//                   { name: "roleDepartment",
//                     message: "Enter the department_id for this role",
//                     type: "number",
//                     //TODO: add validation for valid department_id
//                   }
//                   ],
//                 },
//                 { value: "Add an employee",
//                   open: false,
//                   children: [
//                     { name: "firstName",
//                       message: "Enter employee first name",
//                       type: "input",
//                     },
//                     { name: "lastName",
//                       message: "Enter employee last name",
//                       type: "input",
//                     },
//                     { name: "roleId",
//                       message: "Enter employee's role_id",
//                       type: "number",
//                       //validate length of role_id
//                     },
//                     { name: "managerId",
//                       message: "Enter employee's manager_id",
//                       type: "number",
//                       //validate length of manager_id
//                     },
//                   ],            
//                  },
//               ],
//             },
//             { value: "Update",
//               open: false,
//               children: [
//                 { value: "Update an employee role",
//                   open: false,
//                   children: [
//                   { name: "employeeId",
//                     message: "Enter employee id",
//                     type: "number",
//                     //validate employee_id
//                   },
//                   { name: "employeeRole",
//                     message: "Enter new role_id",
//                     type: "number",
//                     //validate role_id
//                     //sqlRoleUpdate
//                   },
//                   ],
//                 },
//                 { value: "Update an employee manager",
//                   open: false,
//                   children: [
//                     { name: "employeeId",
//                       message: "Enter employee id",
//                       type: "number",
//                       //validate employee_id
//                     },
//                     { name: "employeeManager",
//                       message: "Enter new manager_id",
//                       type: "number",
//                       //validate manager_id
//                     },
//                     ],
//                 }  
//               ],
//             },
//             { value: "Delete",
//               open: false,
//               children: [
//                 { value: "Delete a department",
//                   open: false,
//                   children: [
//                     { name: "departmentId",
//                       message: "Enter department_id to delete",
//                       type: "number",
//                       //validate department_id exists
//                       //confirm delete y/N?
//                     },
//                     { name: "confirmDeptDelete",
//                       message: "Do you wish to delete this department?",
//                       type: "confirm",}
//                   ],
//                 },
//                 { value: "Delete a manager",
//                   open: false,
//                   children: [
//                     { name: "managerId",
//                       message: "Enter manager_id to delete",
//                       type: "number",
//                       //validate manager_id exists
//                       //confirm delete y/N?
//                     },
//                   ],
//                 },
//                 { value: "Delete an employee",
//                   open: false,
//                   children: [
//                       { name: "employeeId",
//                         message: "Enter employee_id to delete", 
//                         type: "number",
//                         //validate employee_id exists
//                         //confirm delete y/N?
//                       }
//                   ]
//                 },
//               ],
//             }
//           ]
//         },
//       ])
    
//           .then(userInput => {
//               console.log(userInput);
//         });
//       };
//   //           //TODO: if-else statement for userPurpose
//   //           switch (userInput) {
//   //             case "View all departments":
//   //               //Query database for departments
//   //               employeeDb.query("SELECT * FROM departments", (err) => {
//   //                 if (err) {
//   //                      console.log('Error retrieving departments');
//   //                 }
//   //               });
//   //               break; 
//   //             case "View all roles":
//   //             //Query database for roles
//   //               employeeDb.query("SELECT * FROM roles", (err) => {
//   //                 if (err) {
//   //                 console.log('Error retrieving roles');
//   //                 }
//   //               });
//   //               break;
//   //             case "View all employees":
//   //             //Query database for employees
//   //               employeeDb.query("SELECT * FROM employees", (err) => {
//   //                 if (err) {
//   //                 console.log('Error retrieving employees');
//   //                 }
//   //               });
//   //               break;
//   //             // case "View budget":
//   //             // //Query database for budget
//   //             // employeeDb.query('SELECT * FROM employees', (err) => {
//   //             //   if (err) {
//   //             //     console.log('Error retrieving employees');
//   //             //   }
//   //             // });
//   //             // break;
//   //             case "Add a department":
//   //             //Add one to database
//   //             //do I need to add prompts to the tree for these parameters?
//   //               employeeDb.query( "INSERT INTO departments (" + userInputid, name)", (err) => {
//   //                 if (err) {
//   //                 console.log('Error adding department');
//   //                 }
//   //               });
//   //               break;
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
     