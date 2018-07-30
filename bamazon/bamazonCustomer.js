// Dependencies 
var express = require("express");
var inquire = require('inquirer');

var app = express();
var PORT = 3000;

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3000,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon_DB"
  });


//   inquirer
//   .prompt([
//     // Ask if the user wants to Post and Item or Bid on a Current Item
//     {
//         type: "list",
//         message: "Which Item would you like to purchase?",
//         choices: ["item_id"],
//         name:"Bid or Post"
//     }]);




// Listenser
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });