//Require mysql and inquirer and cli-table2
var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require("cli-table2");

// Connectingt to the bstamazon_db
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    //Username
    user: "root",

    //passowrd
    password: "Keiffer_11",
    database: "bstamazon_db",
});

// connection.connect();

var display = function () {

    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log("--------------------------------------------");
        console.log("     Thanks for shopping at bamazon         ");
        console.log("----------------------------------------------");
        console.log("");
        console.log("Shop for your products below");
        console.log("");

        var table = new Table({
            head: ["Product ID", "Production Description", "Cost"],
            colWidths: [12, 50, 8],
            colAligns: ["center", "left", "right"],
            style: {
                head: ["blue"],
                compact: true
            }
        });

        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].price]);
        }
        console.log(table.toString());
        console.log("");
    });


};


var shopping = function () {
    inquirer.prompt({
        name: "productToBuy",
        type: "input",
        message: "Please enter the Product Id of the item you wish to purchase"
    }).then(function (answer1) {
        //query for customers who selection
        var selection = answer1.productToBuy;
        connection.query("SELECT * FROM products WHERE item_id=?", selection, function (err, res) {
            if (err) throw err;
            if (res.length === 0) {
                console.log("That product doesn't exist! Please enter a product ID from above"
                );

                shopping();
            } else {
                inquirer.prompt({
                    name: "quantity",
                    type: "input",
                    message: "How many items would you like to buy?"
                      })
                      .then(function (answer2) {
                    var quantity = answer2.quantity;
                    if (quantity > res[0].stock_quantity) {
                        console.log("Our Apologies we only have" + res[0].stock_quantity + "items of it left"
                        );

                        shopping();
                    } else {
                        console.log("");
                        console.log(res[0].product_name + "purchased");
                        console.log(quantity + "qty @ $" + res[0].price);

                        var newQuantity = res[0].stock_quantity - stock_quantity;
                        connection.query(
                            "UPDATE products SET stock_quantity =" +
                            newQuantity + "WHERE item_id =" + res[0].item_id,
                            function (err, resUpdate) {
                                if (err) throw err;
                                console.log("");
                                console.log("Your order has been processed");
                                console.log("Thank you for shopping!")
                                connection.end();
                            });
                    };
                }
                )
            };
        });
    });
}; 

            display();
            shopping();