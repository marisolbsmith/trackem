//select all from departments table
selectAllDepts = () => {
    return 'SELECT * FROM ??'
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
    `
}

