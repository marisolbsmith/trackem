// Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");
const chalk = require('chalk');
const trackerOptions = require('./assets/trackerOptions');
var queries = require('./assets/queries');

//Gets rid of the too many listeners warning
require('events').EventEmitter.defaultMaxListeners = 300;

//Create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Bianca0110",
  database: "empTracker_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  startTracker();
});

// function which initiates the actions within the employee tracker
startTracker = () => {
  inquirer
    .prompt({
      name: "trackerList",
      type: "list",
      message: "Please choose an action to get started:",
      choices: trackerOptions
    })
    .then(function (trackerChoice) {
      //Perform action based on user choice
      trackerAction(trackerChoice);
    });
}

// Using a function to store the if/else statement for the user choice
trackerAction = (choice) => {
  if (choice.trackerList === 'View all departments') {
    viewAllDepartments();
  }
  else if (choice.trackerList === 'View all roles') {
    viewAllRoles();
  }
  else if (choice.trackerList === 'View all employees') {
    viewAllEmployees();
  }
  else if (choice.trackerList === 'Add a department') {
    addDepartment();
  }
  else if (choice.trackerList === 'Add a role') {
    addRole();
  }
  else if (choice.trackerList === 'Add an employee') {
    addEmployee();
  }
  else if (choice.trackerList === 'Update an employee role') {
    updateEmpRole();
  }
  else if (choice.trackerList === 'Delete an employee') {
    deleteEmp();
  }
  else if (choice.trackerList === `I'm done`) {
    console.log(chalk.bgRed('Finish!'));
    connection.end();
  }
}



