var express = require ('express');
var app = express();

app.get('/', function(req, res){
  res.send("Hello Cam")
});

app.listen(3000)
console.log("Server running on port 3000");
