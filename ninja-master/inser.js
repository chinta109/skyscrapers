var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ninja1db");
  var myobj = { user_id:35897401};
  var newobj = { $set: {account_number: 77040185147207, dob: "08/09/1989",address:"Hyderabad-adibatla"}};
  dbo.collection("user_table").updateOne( myobj, newobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});