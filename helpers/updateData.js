const inquirer = require("inquirer");
const employeeDb = require('../connection/connection.js');

async function updateEmployeeRole() {
    try {
      await inquirer.prompt([
        {
          name: "employee_id",
          message: "Enter employee_id to update",
          type: "number"
        },
        {
          name: "new_role_id",
          message: "Enter new role_id",
          type: "number"
        },
      ]).then(async (updateEmployee) => {     
          let sql = 
          `UPDATE employee 
          SET role_id = '${updateEmployee.new_role_id}' 
          WHERE id = '${updateEmployee.employee_id}'`
          employeeDb.promise().query(sql);
              console.log('Employee role updated successfully');
              
      });
    } catch (error) {
        console.log('Error updating employee role', error)
        return null;
      }
  };

module.exports = {
    updateEmployeeRole,
};