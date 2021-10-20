//select all from departments table
selectAllDepts = () => {
  return "SELECT * FROM ??";
};
//selecting all from roles table and joining to dept table
selectAllRoles = () => {
  return `
    SELECT 
    A.??, 
    A.??,
    A.??,
    B.?? as 'department'

    FROM ?? A
    LEFT JOIN ?? B on A.?? = B.??
    `;
};
//selcting all from roles table
selectAllRawRoles = () => {
    return `
    SELECT * from ??
    `
}
//select all emp from emp table (joining to dept table and emp table to get manager )
selectAllEmployees = () => {
    return `
    SELECT 
    A.??,
    concat(A.??, ' ', A.??) as ??,
    B.??,
    C.?? as 'department',
    B.??,
    concat(D.??, ' ', D.??) as manager
   
    FROM ?? A 
    LEFT JOIN ?? B on A.?? = B.??
    LEFT JOIN ?? C on B.?? = C.??
    LEFT JOIN ?? D on A.manager_id = D.id`
}
//inserting a new dept to the dept table
insertDepartment = (dept) => {
    return `INSERT INTO emptracker_db.department SET name = '${dept}'`
}
//insert a new role in the role table
insertRole = (title, salary, department) => {
    return `
    INSERT INTO emptracker_db.role (title, salary, department_id)
    SELECT 
    '${title}',
    ${salary},
    A.id
    from emptracker_db.department A
    WHERE A.name = '${department}'
    `
}
//insert a new emp to the emp table
insertEmployee = (firstName, lastName, roleTitle) => {
    return `
    INSERT INTO emptracker_db.employee (first_name, last_name, role_id)
	Select
	'${firstName}', 
	'${lastName}', 
	A.id
	FROM emptracker_db.role A
	WHERE A.title = '${roleTitle}';

    `
}
//update emp manager in the table
updateEmpManager = (managerId, empId) => {
    return `
    UPDATE emptracker_db.employee
    SET manager_id = ${managerId}
    WHERE id = ${empId}
    `
};
//update emp role in the table
updateEmpRole = (roleTitle, empName) => {
    return `
    Update emptracker_db.employee 
    SET role_id = (Select id from emptracker_db.role where title = '${roleTitle}')
    Where CONCAT(first_name, ' ', last_name) = '${empName}'
    `
}

//delete emp

deleteEmployee = (empName) => {
    return `
    DELETE from emptracker_db.employee where CONCAT(first_name, ' ', last_name) = '${empName}'
    `
}


module.exports = { selectAllDepts, selectAllRoles, selectAllEmployees, insertDepartment, insertRole,
     insertEmployee, updateEmpManager, selectAllRawRoles, updateEmpRole, deleteEmployee };
