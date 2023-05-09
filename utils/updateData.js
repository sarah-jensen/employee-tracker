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
        switch (userUpdate) {
            case "updateEmRole":
                updateEmRole();
                break;
            case "updateEmManager":
                updateEmManager();
                break;
            default:
                console.log("Error updating field");
        };
    });
};

function updateEmRole() {
    inquirer.prompt([
        {   name: "emId",
            message: "Enter employee_id",
            type: "number",
        },
        {   name: "roleId",
            message: "Enter new role_id",
            type: "number",
        },
    ]).then((newRole) => {
        console.log(newRole);
        employeeDb.query("UPDATE employees SET role_id = " + newRole.roleId + " WHERE id = " + newRole.emId + ""), (err) => {
            if (err) {
                console.log('Error updating role');
            }
        };
    });
};


function updateEmManager() {
    inquirer.prompt([
        {   name: "emId",
            message: "Enter employee_id",
            type: "number",
        },
        {   name: "managerId",
            message: "Enter new manager_id",
            input: "number"
        },
    ]).then((newManager) => {
        console.log(newManager);
        employeeDb.query("UPDATE employees SET manager_id = " + newManager.managerId + " WHERE id = " + newManager.emId + ""), (err) => {
            if(err) {
                console.log('Error updating manager');
            }
        };
    });
};

module.exports = {
    updateData,
    updateEmRole,
    updateEmManager,
};