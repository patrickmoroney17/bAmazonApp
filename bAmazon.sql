DROP DATABASE IF EXISTS bAmazonDB;

CREATE DATABASE bAmazonDB;

USE bAmazonDB;

CREATE TABLE products(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name varchar (50) not null,
  department_name varchar(50) not null,
  price decimal(10, 2),
  stock_quantity integer(10),
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
	values ("work desk", "officeFurnature", 73.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
	values ("office chair", "officeFurnature", 44.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
	values ("desk lamp", "officeFurnature", 29.45, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
	values ("stapler", "officeSupplies", 21.50, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
	values ("tape dispenser", "officeSupplies",  3.98, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
	values ("desk fan", "officeSupplies",  25.00, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
	values ("pencils", "officeSupplies",  12.95, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
	values ("pens", "officeSupplies",  11.37, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
	values ("scissors", "officeSupplies",  9.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
	values ("sharpies", "officeSupplies",  7.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
	values ("post-its", "officeSupplies",  13.04, 10);
    
select * from products;