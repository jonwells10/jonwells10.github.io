// // Dependencies
// var http = require("http");
// var fs = require("fs");

// // Set Port
// var port = 8080;

// //Create Server
// var server = http.createServer(function(req, res){

//     //Creat the Url the request is made to
//     var path = req.url;

//     //When visiting different URLS read and response with appropriate files
//     switch (path){

//         case "/food":
//             return fs.readFile(__dirname + "/food.html", function (err, data){
//                 res.writeHead(200, {"Content-Type": "text/html"});
//                 res.end(data);
//             });
//         case "/movies":
//             return fs.readFile(__dirname + "/movies.html", function(err,data){
//                 res.writeHead(200, {"Content-Type": "text/html"});
//                 res.end(data);
//             })
//         case "/frameworks":
//             return fs.readFile(__dirname + "/frameworks.html", function (err, data){
//                 res.writeHead(200, {"Content-Type": "text/html"});
//                 res.end(data);
//             })
//         default:
//             return fs.readFile(__dirname + "/index.html", function(err, data) {
//                 res.writeHead(200, { "Content-Type": "text/html" });
//                 res.end(data);
//               });

//     }
// })

// server.listen(8080, function(){
//         console.log("Listening on port 8080");
//     });

// Require dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

  // When we visit different urls, read and respond with different files
  switch (path) {

  case "/food":
    return fs.readFile(__dirname + "/food.html", function(err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });

  case "/movies":
    return fs.readFile(__dirname + "/movies.html", function(err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });

  case "/frameworks":
    return fs.readFile(__dirname + "/frameworks.html", function(err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });

    // default to rendering index.html, if none of above cases are hit
  default:
    return fs.readFile(__dirname + "/index.html", function(err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
}

// Starts our server.
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
