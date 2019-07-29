var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bAmazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  managerInterfacePrompt();
});

function managerInterfacePrompt() {
  inquirer
    .prompt([

      {
        type: "list",
        message: "Managerial Menu - which action would you like to perform?",
        name: "actionItem",
        choices: [
            "View Products for Sale", 
            "View Low Inventory", 
            "Add to Inventory", 
            "Add New Product"]
      }

    ])

    .then(
      function(answers) {

      switch (answers.actionItem) {
        case "View Products for Sale":
          displayProduct();
          break;
        
        case "View Low Inventory":
          displayLowInventory();
          break;
        
        case "Add to Inventory":
          addToInventory();
          break;
        
        case "Add New Product":
          addNewProduct();
          break;
        }
      
    });
 };

 function displayProduct() {

  connection.query(

    "SELECT * FROM products", 

    function(err, res) {
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

    managerInterfacePrompt();

  });
}

function displayLowInventory() {

  connection.query(

  "SELECT * FROM products WHERE stock_quantity <= 5", 

  function(err, res) {
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

    managerInterfacePrompt();

  });

}



//  function purchaseOrder(purchaseID, purchaseQuantity) {

//   connection.query("Select * FROM products WHERE id = " + purchaseID, function(err,res){

//     if (err){console.log(err)};

//     if (purchaseQuantity <= res[0].stock_quantity){

//       var totalCost = res[0].price * purchaseQuantity;
//       var remainingStock =  res[0].stock_quantity - purchaseQuantity;

//       console.log("\nGood news suffiencent quantity in stock!\n");
//       console.log("\nYour total cost for " + purchaseQuantity + " " +res[0].product_name + " is " + totalCost + ".  We'll ship that out to you pronto!!\n");

//       console.log("\nUpdating " + res[0].product_name + " quantities...\n");
//       var query = connection.query(
//         "UPDATE products SET ? WHERE ?",
//         [
//           {
//             stock_quantity: remainingStock
//           },
//           {
//             id: purchaseID
//           }
//         ],
//         function(err, res) {

//           if (err) throw err;

//         }
        
//       );


//     } else {

//       console.log("\nInsufficient stock on hand to complete your " + res[0].product_name + " purchase request.\n");

//     };

//     anotherPurchasePrompt() 

//   });
// };


// function anotherPurchasePrompt() {
//   inquirer
//     .prompt([

//       {
//         type: "confirm",
//         message: "Do you wish to make another purchase? ",
//         name: "confirm"
//       }

//     ])

//     .then(function(answers) {

//       if (answers.confirm === true) {

//         displayProduct();
        
//       }

//       else {

//         console.log("\nThat's okay come again\n");
//         connection.end();

//       }
//     });

//  }


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


