var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bAmazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  // addProduct();
  displayProduct();
});

//////////


// function addProduct() {
//   console.log("Inserting a new product...\n");
//   var query = connection.query(
//     "INSERT INTO products SET ?",
//     {
//       product_name: "Laptop Bag",
//       department_name: "Computer Accessories",
//       price: 19.99,
//       stock_quantity: 50
//     },
//     function(err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " product inserted!\n");
//       // Call updateProduct AFTER the INSERT completes
//       updateProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }


function displayProduct() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    var table = new Table ({
			head: ["Item ID", "Product Name", "Price", "Quantity"],
			colWidths: [15,25,15,15]
		});

    for (i = 0; i < res.length; i++) {
      table.push(
        [res[i].id, 
        res[i].product_name, 
        res[i].price, 
        res[i].stock_quantity]
      );
    }
    console.log(table.toString());

    purchasePrompt();

  });
}

function purchasePrompt() {
  inquirer
    .prompt([

      {
        type: "input",
        message: "What is ID of the item you want to purchase: ",
        name: "desiredID"
      },

      {
        type: "number",
        message: "How many would you like to purchase?",
        name: "desiredQuantity"
      },

    ])

    .then(function(answers) {

      var IDrequested = answers.desiredID;
      var quantityRequested = answers.desiredQuantity;

      purchaseOrder(IDrequested, quantityRequested);
      
    });
 };

 function purchaseOrder(purchaseID, purchaseQuantity) {

  connection.query("Select * FROM products WHERE id = " + purchaseID, function(err,res){

    if (err){console.log(err)};

    if (purchaseQuantity <= res[0].stock_quantity){

      var totalCost = res[0].price * purchaseQuantity;
      var remainingStock =  res[0].stock_quantity - purchaseQuantity;

      console.log("Good news suffiencent quantity in stock!");
      console.log("Your total cost for " + purchaseQuantity + " " +res[0].product_name + " is " + totalCost + ".  We'll ship that out to you pronto!!");

      console.log("Updating " + res[0].product_name + " quantities...\n");
      var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: remainingStock
          },
          {
            id: purchaseID
          }
        ],
        function(err, res) {

          if (err) throw err;
          // console.log(res.affectedRows + " products updated!\n");

        }
        
      );


    } else {

      console.log("Insufficient stock on hand to complete your " + res[0].product_name + " purchase request.");

    };

    connection.end();

  });
};


// function anotherPurchasePrompt() {
//   inquirer
//     .prompt([

//       {
//         type: "input",
//         message: "Do you wish to make another purchase?",
//         name: "continue"
//       },
//       {
//         type: "confirm",
//         message: "Please confirm: ",
//         name: "confirm"
//       }

//     ])

//     .then(function(answers) {
//       console.log("dog " + answers.continue);

//       if (answers === "y") {

//         displayProduct();
        
//       }

//       else {

//         console.log("\nThat's okay come again\n");
//         connection.end();

//       }
//     });

//  }