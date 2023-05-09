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
            ],
        },
    ]).then((userAdd) => {
        console.log(userAdd);
        switch (userAdd) {
            case "addDepartment":
                addDept();
                break;
            case "addRole":
                addRole();
                break;
            case "addEmployee":
                addEmployee();
                break;
            default:
                console.log("Error adding data");
                
        };
    });
};

function addDept() {
    inquirer.prompt([
        {   name: "departmentName",
            message: "Enter a name for the department",
            type: "input",
        },
    ]).then((newDept) => {
        employeeDb.query( "INSERT INTO departments (" + newDept + ")", (err) => {
            if (err) {
                console.log('Error adding department');
            }
        });
    });
};

function addRole() {
    inquirer.prompt([
        {   name: "roleTitle",
            message: "Enter a title for the role",
            type: "input",
        },
        {   name: "roleSalary",
            message: "Enter a salary",
            type: "number",
        },
        {   name: "roleDept",
            message: "Enter the department_id",
            input: "number"
        },
    ]).then((newRole) => {
        employeeDb.query("INSERT INTO roles (" + newRole.roleTitle + ", " + newRole.roleSalary + ", " + newRole.roleDept + ")", (err) => {
            if(err) {
                console.log("Error adding role");
            };
        });
    });
};

function addEmployee() {
    inquirer.prompt([
        {   name: "empFirstName",
            message: "Enter employee first name",
            type: "input",
        },
        {   name: "empLastName",
            message: "Enter employee last name",
            type: "input",
        },
        {   name: "empRole",
            message: "Enter the role_id",
            input: "number"
        },
        {   name: "empManager",
            message: "Enter the manager_id",
            input: "number",
        },
    ]).then((newEmployee) => {
        employeeDb.query("INSERT INTO employees (" + newEmployee.empFirstName + ", " + newEmployee.empLastName + ", " + newEmployee.empRole + ", " + newEmployee.empManager + ")", (err) => {
            if(err) {
                console.log("Error adding employee");
            };
        });
    });
};



module.exports = {  
    addData,
    addDept,
    addRole,
    addEmployee,
};