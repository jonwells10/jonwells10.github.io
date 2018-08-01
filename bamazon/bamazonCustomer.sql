DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;


USE bamazon_DB;

CREATE TABLE products (
 item_ID INTEGER (11) AUTO_INCREMENT NOT NULL,
 product_name VARCHAR(50) NOT NULL,
 department_Name VARCHAR(50) NOT NULL,
 price DECIMAL(10,2) NULL,
 stock_qty INTEGER(100) NULL,
 PRIMARY KEY (item_ID)
);

INSERT INTO bamazon_DB.products (product_name, department_name, price, stock_qty)
VALUES ("Soap", "Cosmetics", 30.50, 40);

INSERT INTO bamazon_DB.products (product_name, department_name, price, stock_qty)
VALUES ("Gatorade", "Grocery", 2.35, 90);

INSERT INTO bamazon_DB.products (product_name, department_name, price, stock_qty)
VALUES ("Football", "Sports", 8.55, 60);

INSERT INTO bamazon_DB.products (product_name, department_name, price, stock_qty)
VALUES ("Basketball", "Sports", 5.55, 80);

INSERT INTO bamazon_DB.products (product_name, department_name, price, stock_qty)
VALUES ("Leggingsl", "Sports", 5.95, 120);

INSERT INTO bamazon_DB.products (product_name, department_name, price, stock_qty)
VALUES ("Frying Pan", "Kitchen", 17.25, 20);

INSERT INTO bamazon_DB.products (product_name, department_name, price, stock_qty)
VALUES ("Pizza Cutter", "Kitchen", 3.99, 80);

INSERT INTO bamazon_DB.products (product_name, department_name, price, stock_qty)
VALUES ("Vitamins", "Health",10.75, 40);

INSERT INTO bamazon_DB.products (product_name, department_name, price, stock_qty)
VALUES ("Icy Hot", "Health", 4.15, 110);