//HTTP Module
var http = require("http");

//Create Server One
var serverOne = http.createServer(function(req, res){
    console.log("Server recieved a request");

    res.end("You are an awesome being")
});

serverOne.listen(7000, function(){
    console.log("Listening on port 7000");
});

//Create Server Two
var serverTwo = http.createServer(function(req, res){
    console.log("Server recieved a request");

    res.end("Life is not your strong point")
});

serverTwo.listen(7500, function(){
    console.log("Listening on port 7500");
});

var goodResonse = [
    'Life is cool, and you are the best at it',
    'You are a winner',
    'A genius is what you should be referred as',
    'Imagine how bad life would be without you',
    'I am believer in your awesomeness',
]

var badResponse = [
    'Give it up your not any good coding',
    'You could say intelligence is not your strong point',
    'Small brains should be your name',
    'It is immpossible to concieve how dumb you are',
]

