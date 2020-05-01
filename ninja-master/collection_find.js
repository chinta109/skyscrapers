var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ninja1db");
  dbo.collection("user_table").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.user_id);
    db.close();
  });
});