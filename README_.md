# bAmazonApp

### Overview

bAmazonCustomer.js is a Node.js & MySQL command line Amazon-like storefront app that takes in customers orders and depletes stock from the stores Inventory. 

### Usage

1) clone the git repository
2) navigate to the repository
3) to reset the database, from the $ prompt 

patrickmoroneys-MacBook-Pro:bAmazonApp patrickmoroney$ mysql -u root -p
Enter password: ********
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 240
Server version: 8.0.16 Homebrew

Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> source bAmazon.sql
Query OK, 1 row affected (0.12 sec)

Query OK, 1 row affected (0.00 sec)

Database changed
Query OK, 0 rows affected (0.02 sec)

Query OK, 1 row affected (0.00 sec)...


+----+----------------+-----------------+-------+----------------+
| id | product_name   | department_name | price | stock_quantity |
+----+----------------+-----------------+-------+----------------+
|  1 | work desk      | officeFurnature | 73.99 |             10 |
|  2 | office chair   | officeFurnature | 44.99 |             10 |
|  3 | desk lamp      | officeFurnature | 29.45 |             10 |
|  4 | stapler        | officeSupplies  | 21.50 |             10 |
|  5 | tape dispenser | officeSupplies  |  3.98 |             10 |
|  6 | desk fan       | officeSupplies  | 25.00 |             10 |
|  7 | pencils        | officeSupplies  | 12.95 |             10 |
|  8 | pens           | officeSupplies  | 11.37 |             10 |
|  9 | scissors       | officeSupplies  |  9.99 |             10 |
| 10 | sharpies       | officeSupplies  |  7.99 |             10 |
| 11 | post-its       | officeSupplies  | 13.04 |             10 |
+----+----------------+-----------------+-------+----------------+
11 rows in set (0.00 sec)

mysql> exit
Bye
patrickmoroneys-MacBook-Pro:bAmazonApp patrickmoroney$

4) Next at the dollar sign prompt, execute the bAmazonCustomer.js.  The user will see the following and be prompted to enter the item ID they want to purchase.

patrickmoroneys-MacBook-Pro:bAmazonApp patrickmoroney$ node bAmazonCustomer.js 
connected as id 241

┌───────────────┬─────────────────────────┬───────────────┬───────────────┐
│ Item ID       │ Product Name            │ Price         │ Quantity      │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 1             │ work desk               │ 73.99         │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 2             │ office chair            │ 44.99         │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 3             │ desk lamp               │ 29.45         │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 4             │ stapler                 │ 21.5          │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 5             │ tape dispenser          │ 3.98          │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 6             │ desk fan                │ 25            │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 7             │ pencils                 │ 12.95         │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 8             │ pens                    │ 11.37         │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 9             │ scissors                │ 9.99          │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 10            │ sharpies                │ 7.99          │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 11            │ post-its                │ 13.04         │ 10            │
└───────────────┴─────────────────────────┴───────────────┴───────────────┘
? What is ID of the item you want to purchase: 

Selecting ID #1 work desk, the app will next ask you how many you want to purchase.

? What is ID of the item you want to purchase:  1
? How many would you like to purchase? 1

Good news sufficent quantity in stock!


Your total cost for 1 work desk is 73.99.  We'll ship that out to you pronto!!


Updating work desk quantities...

? Do you wish to make another purchase?  (Y/n) 

If there is sufficent stock on hand, the app will display the cost of the item and let the user know if will be shipped pronto. The database will be updated to reflect inventory levels, and then prompt the user asking if they want to make another purchase.

Your total cost for 1 work desk is 73.99.  We'll ship that out to you pronto!!

If the user selects yes, an updated inventory list will be displayed and the user will be asked to select an item for purchase.

Updating work desk quantities...

? Do you wish to make another purchase?  Yes
┌───────────────┬─────────────────────────┬───────────────┬───────────────┐
│ Item ID       │ Product Name            │ Price         │ Quantity      │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 1             │ work desk               │ 73.99         │ 9             │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 2             │ office chair            │ 44.99         │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 3             │ desk lamp               │ 29.45         │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 4             │ stapler                 │ 21.5          │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 5             │ tape dispenser          │ 3.98          │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 6             │ desk fan                │ 25            │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 7             │ pencils                 │ 12.95         │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 8             │ pens                    │ 11.37         │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 9             │ scissors                │ 9.99          │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 10            │ sharpies                │ 7.99          │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 11            │ post-its                │ 13.04         │ 10            │
└───────────────┴─────────────────────────┴───────────────┴───────────────┘
? What is ID of the item you want to purchase:  

If there is insufficent stock the user will receive a message saying as much.

? Do you wish to make another purchase?  Yes
┌───────────────┬─────────────────────────┬───────────────┬───────────────┐
│ Item ID       │ Product Name            │ Price         │ Quantity      │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 1             │ work desk               │ 73.99         │ 0             │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 2             │ office chair            │ 44.99         │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 3             │ desk lamp               │ 29.45         │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 4             │ stapler                 │ 21.5          │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 5             │ tape dispenser          │ 3.98          │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 6             │ desk fan                │ 25            │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 7             │ pencils                 │ 12.95         │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 8             │ pens                    │ 11.37         │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 9             │ scissors                │ 9.99          │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 10            │ sharpies                │ 7.99          │ 10            │
├───────────────┼─────────────────────────┼───────────────┼───────────────┤
│ 11            │ post-its                │ 13.04         │ 10            │
└───────────────┴─────────────────────────┴───────────────┴───────────────┘
? What is ID of the item you want to purchase:  1
? How many would you like to purchase? 1

Insufficient stock on hand to complete your work desk purchase request.

? Do you wish to make another purchase?  (Y/n)

Once the user is done shopping, the can answer No and the app will close leaving the user at the $ prompt.

? Do you wish to make another purchase?  No

That's okay come again

patrickmoroneys-MacBook-Pro:bAmazonApp patrickmoroney$ 

### Technologies Used

- MySql database
- NPM - MySql
- NPM - inquirer
- NPM - cli-table









