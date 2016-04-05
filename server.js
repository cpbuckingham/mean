var express = require ('express');
var app = express();
var mongojs = require ('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var austinSoBE = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(austinSoBE.json());

app.get('/contactlist', function(req, res){
  console.log("Recieved the GET request")
    db.contactlist.find(function(err, docs){
      console.log(docs);
      res.json(docs);
    });
  //respond to the get request by sending back the data
});

app.post('/contactlist', function(req, res){
  console.log(req.body);
  db.contactlist.insert(req.body, function(err, doc){
    res.json(doc);
  })
});

app.delete('/contactlist/:id', function(req, res){
  var id=req.params.id;
  console.log(id);
  db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
    res.json(doc);
  });
});

app.get('/contactlist/:id', function(req, res){
  var id = req.params.id;
  db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
    res.json(doc);
  });
});

app.put('/contactlist/:id', function(req, res){
  var id = req.params.id;
  db.contactlist.update({_id: mongojs.ObjectId(id)}, function(err, doc){
    res.json(doc);
  });
});

app.listen(3000)
console.log("Running ... then you better go catch it!");
