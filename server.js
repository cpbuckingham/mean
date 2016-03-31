var express = require ('express');
var app = express();
var mongojs = require ('mongojs');
var db = mongojs('contactlist', ['contactlist']);

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res){
  console.log("Recieved the GET request")
    db.contactlist.find(function(err, docs){
      console.log(docs);
      res.json(docs);
    });
  //respond to the get request by sending back the data
});

app.listen(3000)
console.log("Running ... then you better go catch it!");
