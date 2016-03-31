var express = require ('express');
var app = express();
var mongojs = require ('mongojs');
var db = mongojs('contactlist', ['contactlist']);

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res){
  console.log("Recieved the GET request")
  person1={
    name: "Tim",
    email: "tim@gmail.com",
    number: "111-111-1111"
  }
  person2={
    name: "John",
    email: "john@gmail.com",
    number: "222-111-1111"
  }
  person3={
    name: "Ally",
    email: "ally@gmail.com",
    number: "333-111-1111"
  }

  var contactlist= [person1, person2, person3];
  res.json(contactlist)
  //respond to the get request by sending back the data
});

app.listen(3000)
console.log("Running ... then you better go catch it!");
