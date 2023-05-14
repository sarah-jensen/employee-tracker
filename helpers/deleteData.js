// For future development: 


//function deleteData() {
//     inquirer.prompt([
//         {   name: "deleteValue",
//             message: "Which field would you like to delete?",
//             type: "list",
//             choices: [
//                 {   name: "Delete department",
//                     value: "deleteDept",
//                 },
//                 {   name: "Delete manager",
//                     value: "deleteManager",
//                 },
//                 {   name: "Delete employee",
//                     value: "deleteEmployee",
//                 },
//             ]
//         }
//     ]).then((userDelete) => {
//         console.log(userDelete);
//         switch (userDelete) {
//             case "deleteDept":
//                 deleteDept();
//                 break;
//             case "deleteManager":
//                 deleteManager();
//                 break;
//             case "deleteEmployee":
//                 deleteEmployee();
//                 break;
//             default:
//                 console.log('Error deleting data');
//         };
//     });
// };

// function deleteDept() {
//     inquirer.prompt([
//         {   name: "deptId",
//             message: "Enter the department_id to delete",
//             input: "number"
//         },
//     ]).then((oldDeptId) => {
//         employeeDb.query("DELETE FROM departments WHERE id = " + oldDeptId +""), (err) => {
//             if (err) {
//                 console.log('Error deleting department');
//             }
//         };
//     });
// };

// function deleteManager() {
//     inquirer.prompt([
//         {   name: "MgrId",
//             message: "Enter the manager_id to delete",
//             type: "number",
//         },
//     ]).then((oldMgrId) => { //figure out how to only remove manager_id cell from row
//         employeeDb.query("DELETE FROM employees WHERE id = " + oldMrgtId +""), (err) => {
//             if (err) {
//                 console.log('Error deleting department');
//             }
//         };
//     });

// };

// function deleteEmployee() {
//     inquirer.prompt([
//         {   name: "empId",
//             message: "Enter employee_id to delete",
//             type: "number",
//         },
//     ]).then((oldEmpId) => {
//         employeeDb.query("DELETE FROM employees WHERE id = " + oldEmpId + ""), (err) => {
//             if (err) {
//                 console.log('Error deleting employee');
//             }
//         };
//     });

// };

// module.exports = {
//     deleteData,
//     deleteDept,
//     deleteManager,
//     deleteEmployee,
// };