//Require mysql and inquirer 
var mysql = require('mysql');
var inquirer= require('inquirer');

// Connectingt to the bamazon_db
var connection = mysql.createConnection({
    host: "localhost",
    port: 3000,

    //Username
    user: "root",

    //passowrd
    password: "Keiffer_11",
    database: "bamazon"
});

connection.connect(function(err){
    if(err) throw err;
    showProducts();
});