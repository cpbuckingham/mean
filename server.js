var express = require ('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res){
  console.log("Recieved the GET request")
});

app.listen(3000)
console.log("Running ... then you better go catch it!");
