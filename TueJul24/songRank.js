var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "songs_DB"
});

// Join topSongs table and topAlbums table
connection.connect(function(err){
    if (err) throw err;
    var sql = "SELECT Artist.topSongs AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });





