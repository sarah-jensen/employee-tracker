-- budget/salary related queries
SELECT *
FROM roles;

SELECT department_id, SUM(salary) AS utilized_budget
FROM rolesGROUP BY department;