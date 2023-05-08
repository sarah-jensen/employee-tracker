//Prompts to collect user input
const inits = [
      {
        name: "purpose",
        message: "What would you like to do?",
        type: "list",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
        ],
      },
    ]; //returns (purpose)

module.exports = inits;

//view all department

//view all roles

//view all employees

//add a department
// const addDepartment = 
//   {
//     name: "dept_name",
//     message: "Enter the name of the department",
//     type: "input",
//   };

//   module.exports = addDepartment

// //add a role
// const addRole = 
// {
//   name: "role_name",
//   message: "Enter the name of the role you wish to add",
//   type: "input",
// };

// module.exports = addRole

// //add an employee
// const addEmployee = [
//   {
//     name: "first_name",
//     message: "Employee's first name:",
//     type: "input",
//   },
//   {
//     name: "last_name",
//     message: "Employee's last name:",
//     type: "input",
//   },
//   {
//     name: "role_id",
//     message: "Enter the role id",
//     type:  "input", // objects with id + role title + role salary + dept name?,
//   },
//   {
//     name: "manager_id",
//     message: "Select the manager id",
//     type: "input", // objects with id + manager id?
//   },
// ]
// module.exports = addEmployee

// //update employee role
// module.exports = updateRole