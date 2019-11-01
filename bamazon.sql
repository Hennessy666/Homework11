CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
-- 	item_id INTEGER(10) NULL AUTO_INCREMENT,---
    product_name VARCHAR (100) NOT NULL,
    department_name VARCHAR (100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INTEGER(11) NULL,
    PRIMARY KEY (item_id)
);
-- Insert mock items into the database--
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Ballpoint Pens', 'Office Supplies', 2.00, 200),
		('Taco Shells', 'Grocery', 6.99, 100),
        ('Game of Thrones by George RR Martin', 'books', 13.95, 32),
        ('The Best of the Grateful Dead', 'CD/Music', 10.00, 19),
        ('Java for Dummies', 'books', 9.00, 3),
        ('Harry Potter and the sorcerers stone', 'books', 8.95, 25),
        ('Whole Milk', 'Grocery', 4.90, 350),
        ('Printer Paper', 'Office Supplies', 50.00, 500),
        ('VR Occulus', 'Technology', 350.00, 3000),
        ('Spanish for Intermediate Students', 'books', 4.45, 89),
        ('Silver Alarm Clock', 'bedroom', 29.00, 23),
        ('Star Wars Poster', 'teens/young adult', 3.00, 48),
        ('Green Medium BeanBag', 'teens/young adult', 60.00, 10);
        
ALTER TABLE products
DROP COLUMN item_id;

DESCRIBE products;
        select * FROM products