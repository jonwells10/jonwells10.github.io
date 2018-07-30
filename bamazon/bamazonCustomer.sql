DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;


USE bamazon_DB;

CREATE TABLE products (
 item_ID INT NOT NULL AUTO_INCREMENT,
 product_name VARCHAR(50) NOT NULL,
 department_Name VARCHAR(50) NOT NULL,
 price DECIMAL(10,2) NULL,
 stock_qty INTEGER(100) NULL,
 PRIMARY KEY (item_ID)
);
