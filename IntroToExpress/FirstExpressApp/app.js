var express = require('express');
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there");
});

app.get("/bye", function(req, res) {
    res.send("GOod bye");    
});

app.get("*", function(req, res) {
    res.send("You are a star!!!");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server started.");
});