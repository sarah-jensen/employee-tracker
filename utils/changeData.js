function addDept() {
    inquirer.prompt([
        {   name: "departmentName",
            message: "Enter a name for the department",
            type: "input",
        },
    ]);
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
    ]);
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
    ]);
};

function updateField() {
    inquirer.prompt([
        {   name: "getEmpId",
            message: "Enter employee_id",
            type: "number",
        },
        {   name: "updateRole",
            message: "Enter new role_id",
            type: "number",
        },
        {   name: "updateManager",
            message: "Enter the new manager_id",
            input: "number"
        },
    ]);
};

function deleteField() {
    inquirer.prompt([
        {   name: "deleteDept",
            message: "Enter the department_id to delete",
            input: "number"
        },
        {   name: "deleteManager",
            message: "Enter the manager_id to delete",
            type: "number",
        },
        {   name: "deleteEmp",
            message: "Enter employee_id to delete",
            type: "number",
        },
    ]);
};

module.exports = {  
    addDept,
    addRole,
    addEmployee,
    updateField,
    deleteField,
};