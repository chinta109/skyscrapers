var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ninja1db");
  dbo.createCollection("transaction_table", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});