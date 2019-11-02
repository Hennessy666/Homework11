//Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table2");

//connecting to the bstamazon_db
var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
    
        //Username
        user: "root",
    
        //passowrd
        password: "Keiffer_11",
        database: "bstamazon_db",
    });
    connection.connect();

    