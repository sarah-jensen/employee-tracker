INSERT INTO department (id, name)
VALUES (1, "Royalty"),
        (2, "Nobility"),
        (3, "Maia"),
        (4, "Military"),
        (5, "Common Folk"),
        (6, "Creatures");

INSERT INTO role (id, title, salary, department_id)
VALUES (01, "King", 100, 1),
        (02, "Steward", 95, 2),
        (03, "Lord", 90, 2),
        (04, "Lady", 90, 2),
        (05, "Wizard", 80, 3),
        (06, "Soldier", 60, 4),
        (07, "Archer", 60, 4),
        (08, "Inn Keeper", 50, 5),
        (09, "Ring Bearer", 50, 5),
        (10, "Gardener", 40, 5),
        (11, "Trouble Maker", 30, 5),
        (12, "Ent", 40, 6);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Gandalf", "Stormcrow", 04, 014),
        (002, "Frodo", "Baggins", 08),
        (003, "Aragorn", "son of Arathorn", 01)
        (003, "Meriadoc", "Brandywine", 10, 001),
        (004, "Peregrin", "Took", 10, 001),
        (005, "Samwise", "Gamgee" 09, 002),
        (006, "Boromir", "son of Denethor", 05, 003),
        (007, "Legolas", "of the Woodland Realm", 06, 003),
        (008, "Gimli", "son of Gloin", 05, 003),
        (009, "Denethor", "son of Excelion", 02),
        (010, "Theoden", "king of Rohan", 01),
        (011, "Eowen", "Shieldmaiden", 04, 010),
        (012, "Eomer", "Rohirrim", 05, 010),
        (013, "Treebeard", "Treeherder", 12),
        (014, "Saruman", "the white", 05, 015),
        (015, "Sauron", "Fire-eye", 05);
