INSERT INTO department (id, name)
VALUES (001, "dept1"),
        (002, "dept2"),
        (003, "dept3"),
        (004, "dept4");

INSERT INTO role (id, title, salary, department_id)
VALUES (001, "manager", "100", "dept1"),
        (002, "manager", "100", "dept2"),
        (003, "team lead", "90", "dept1"),
        (004, "team lead", "90", "dept2"),
        (005, "maker", "80", "dept 1"),
        (006, "maker", "80", "dept 2"),

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "gandalf", "stormcrow", 001),
        (002, "frodo", "baggins", 002),
        (003, "meriadoc", "brandywine", 005, 001),
        (004, "peregrin", "took", 005, 001),
        (005, "samwise", "gamgee" 004, 002);
