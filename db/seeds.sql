INSERT INTO department (name) VALUES 
        ("Hobbit"),
        ("Dwarf"),
        ("Maia"),
        ("Human"),
        ("Elf");

INSERT INTO role (title, salary, department_id)
VALUES ("Ring_Bearer", 50000, 1),
        ("Wizard", 50000, 3),
        ("Human_Fighter", 40000, 4),
        ("Elf_Fighter", 50000, 5),
        ("Dwarf_Fighter", 45000, 2),
        ("Gardener", 20000, 1),
        ("Misfit", 10000, 1);
        
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Frodo", "Baggins", 1, NULL),
        ("Gandalf", "Stormcrow", 2, NULL),
        ("Aragorn", "son of Arathorn", 3, 1),
        ("Meriadoc", "Brandywine", 7, 2),
        ("Peregrin", "Took", 7, 2),
        ("Samwise", "Gamgee", 6, 1),
        ("Boromir", "son of Denethor", 3, 2),
        ("Legolas", "of the Woodland Realm", 4, 2),
        ("Gimli", "son of Gloin", 5, 2),
        ("Sauron", "of Mordor", 2, NULL);
      
