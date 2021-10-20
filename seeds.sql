USE emptracker_db;

-- Insert into department table
INSERT INTO emptracker_db.department (name)
VALUES ("Technology"), ("Human Resources"), ("Sales/Marketing"), ("Accounting/Finance");

-- Insert into role table
INSERT INTO emptracker_db.role (title, salary, department_id)
VALUES
('Engineer', 90000, 1),
('HR Business Partner', 80000, 2),
('Sales Manager', 64990, 3),
('Accountant', 75000, 4);

-- Insert into employee table
INSERT INTO emptracker_db.employee (first_name, last_name, role_id)
VALUES
('Marisol', 'Smith', 1),
('Demetruc', 'Smith', 2),
('Lilyanna', 'Smith', 4),
('Zayden', 'Smith', 1),
('Lucy', 'Smith', 3),
('Sergio', 'Castillo', 1),
('Salina', 'Coleman', 4);

-- Add a manager to two employees
UPDATE emptracker_db.employee
SET manager_id = 7
WHERE (id = 1 OR id = 6)