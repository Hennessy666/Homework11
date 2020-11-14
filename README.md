## What is Bamazon?

Bamazon is a command line CLI that allows fake users to purchase fake items from a local database and manipulate the inventory and number of items via the command line. There are three levels to Bamazon, the Customer level, Manager level, and Supervisor level where you can use Mysql to store items. It has an automated inventory audit and alert system that will not allow the customer to order more than quantity available in stock.

## How to Install and Create this App

In order to create your own Bamazon you first need to create and clone a repository from github onto your local terminal. Next run nmp install and build database from schema.sql. At command prompt run node bamazonCustomer.js.

This is an image of bamazonCustomer.js with the table of the items.
![Image of bamazonCustomer.js](https://github.com/Hennessy666/Homework11/blob/master/bamazonCustomer.png)

This is an image of bamazonCustomer.js with questions answered about how much of such item is in stock and how many the customer would like to purchase.
![Image of bamazonCustomer2.js](https://github.com/Hennessy666/Homework11/blob/master/bamazonCustomer2.png)

This is an image of bamazonManager.js where the manager is asked to select whether an item has Low Inventory or View Products for Sale.
![Image of bamazonManager.js](https://github.com/Hennessy666/Homework11/blob/master/bamazonmanager.png)

Managers also have the option of choosing to add inventory to a product department or adding a new item all together.
![Image of addnewproduct.js](https://github.com/Hennessy666/Homework11/blob/master/addnewproduct.png)

## Technologies Utilized

1. mySQL
2. NodeJS
3. JavaScript
4. NPM Inquirer
5. NPM Colors
6. NPM console.table
