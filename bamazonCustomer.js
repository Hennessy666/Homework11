//Require mysql and inquirer and cli-table2
var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require("cli-table2");

// Connectingt to the bamazon_db
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
        connection.query("SELECT * FROM products WHERE id=?", selection, function (err, res) {
            if (err) throw err;
            if (res.length === 0) {
                console.log("That product doesn't exist! Please enter a product ID from above");

                shopping();
            } else {
                inquirer.prompt({
                    name: "quantity",
                    type: "input",
                    message: "How many items would you like to buy?"
                }.then(function (answer2) {
                    var quantity = answer2.quantity;
                    if (quantity > res[0].stock_quantity) {
                        console.log("Our Apologies we only have" + res[0].stock_quantity + "items of it left"
                        );

                        shopping();
                    } else {
                        console.log("");
                        console.log(res[0].products_name + "purchased");
                        console.log(quantity + "qty @ $" + res[0].price);

                        var newQuantity = res[0].stock_quantity - quantity;
                        connection.query(
                            "UPDATE products SET stock_quantity =" +
                            newQuantity + "WHERE id =" + res[0].id,
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
                );
            };
        });
    });
}; 

            display();


// //Show the table with products for consumer to view
// function showProducts(answer) {
//     var query = "SELECT product_name,price,stock_quantity FROM products";
//     connection.query(query,  function(err, res) {
//       var theDisplayTable = new Table({
//         head: ['Product Name', 'Price', 'Quantity'],

//           colWidths: [10, 30, 10, 14]
//         });

//         for (var i = 0; i < res.length; i++) {
//            theDisplayTable.push(
//             [res[i].product_name, res[i].price, res[i].stock_quantity]
//             );
//          }
//             console.log(theDisplayTable.toString());


//       pickProduct();
//     });
// }

// //Pick a product and how many
// function pickProduct(answer) {
//     inquirer.prompt([
//       {
//         name: "item",
//         type: "input",
//         message: "Enter the ID of the item you would like to purchase"
//       },
//       {
//         name: "count",
//         type: "input",
//         message: "How many would you like to buy?"
//       }

//       ]).then(function(answer) {
//           connection.query("SELECT product_name,price,stock_quantity FROM products WHERE ?",
//             {item_id: answer.item},  function(err, res) {

//               //console.log("count " + answer.count);

//               if (parseInt(answer.count) > res[0].stock_quantity) {

//                 console.log("sorry, there are only " + res[0].stock_quantity + " left");
//                 pickProduct();

//               }

//               else {
//                 console.log("Your purchase of " + answer.count + ' ' + res[0].product_name +"/s total cost is: $ " + parseInt(res[0].price) * parseInt(answer.count));
//                var quantityLeft = res[0].stock_quantity - answer.count;
//                       console.log(quantityLeft);
//                       connection.query(
//                         "UPDATE products SET ? WHERE ?",
//                         [
//                           {
//                             stock_quantity: quantityLeft
//                           },
//                           {
//                             item_id: answer.item
//                           }
//                         ],
//                         function(error) {
//                           if (error) throw err;


//                         }); 
//                       console.log("Inventory updated. There are  " + quantityLeft + " left"); 
//                       showProducts();
//                }


//             })
//       });

// };      

