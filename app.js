var express = require("express");
var app = express();
var PORT = 80;

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", function(req,res) {
    res.sendFile(__dirname + "/views/about.html");
});

app.listen(PORT, function() {
    console.log(`Connected ${PORT} port!`);
});

