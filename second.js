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