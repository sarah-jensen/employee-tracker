INSERT INTO departments (name)
VALUES ("Royalty"),
        ("Nobility"),
        ("Maia"),
        ("Military"),
        ("Common Folk"),
        ("Creatures");

INSERT INTO roles (title, salary, department_id)
VALUES ("King", 100, 1),
        ("Steward", 95, 2),
        ("Lord", 90, 2),
        ("Lady", 90, 2),
        ("Wizard", 80, 3),
        ("Soldier", 60, 4),
        ("Archer", 60, 4),
        ("Inn Keeper", 50, 5),
        ("Ring Bearer", 50, 5),
        ("Gardener", 40, 5),
        ("Trouble Maker", 30, 5),
        ("Ent", 40, 6);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Gandalf", "Stormcrow", 04, 014),
        ("Frodo", "Baggins", 08, NULL),
        ("Aragorn", "son of Arathorn", 01, 002),
        ("Meriadoc", "Brandywine", 10, 001),
        ("Peregrin", "Took", 10, 001),
        ("Samwise", "Gamgee", 09, 002),
        ("Boromir", "son of Denethor", 05, 003),
        ("Legolas", "of the Woodland Realm", 06, 003),
        ("Gimli", "son of Gloin", 05, 003),
        ("Denethor", "son of Excelion", 02, 003),
        ("Theoden", "king of Rohan", 01, 011),
        ("Eowen", "Shieldmaiden", 04, 010),
        ("Eomer", "Rohirrim", 05, 010),
        ("Treebeard", "Treeherder", 12, 014),
        ("Saruman", "the white", 05, 015),
        ("Sauron", "Fire-eye", 05, 016);
