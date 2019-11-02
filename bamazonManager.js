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

    function displayGoods(){
        connection.query("SELECT * FROM products", function(error, results){
            if(error) throw error;
            console.log("");
            console.log("Complete Inventory List");
            console.log("");

            var table = new Table({
                head: ["Product Item ID", "Description", "Cost", "Quantity"],
                colWidths: [9, 30, 8, 8],
                colAligns: ["center", "left", "right"],
                style: {
                    head: ["blue"],
                    compact: true
                }
            })
    });
        }; 
