var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ninja1db");
  var myobj = [
    { transaction_id: 1,user_id: 12546789, transaction_type: "petrol", Amount: 1000, user_name: "Vamshi" },
    { transaction_id: 2,user_id: 12546789, transaction_type: "petrol", Amount: 1000, user_name: "Vamshi" },
    { transaction_id: 3,user_id: 12546789, transaction_type: "petrol", Amount: 1000, user_name: "Vamshi" },
    { transaction_id: 4,user_id: 12546789, transaction_type: "petrol", Amount: 1000, user_name: "Vamshi" },
    { transaction_id: 5,user_id: 12546789, transaction_type: "petrol", Amount: 1000, user_name: "Vamshi" },
    { transaction_id: 6,user_id: 12546789, transaction_type: "petrol", Amount: 1000, user_name: "Vamshi" },
    { transaction_id: 7,user_id: 12546789, transaction_type: "petrol", Amount: 1000, user_name: "Vamshi" },
    { transaction_id: 8,user_id: 12546789, transaction_type: "petrol", Amount: 1000, user_name: "Vamshi" },
    { transaction_id: 9,user_id: 12546789, transaction_type: "petrol", Amount: 1000, user_name: "Vamshi" },
    { transaction_id: 10,user_id: 12546789, transaction_type: "shoping", Amount: 500, user_name: "Vamshi" },
    { transaction_id: 11,user_id: 12546789, transaction_type: "movie", Amount: 700, user_name: "Vamshi" },
    { transaction_id: 12,user_id: 24789217, transaction_type: "movie", Amount: 700, user_name: "Hemanth" },
    { transaction_id: 13,user_id: 24789217, transaction_type: "movie", Amount: 700, user_name: "Hemanth" },
    { transaction_id: 14,user_id: 24789217, transaction_type: "movie", Amount: 700, user_name: "Hemanth" },
    { transaction_id: 15,user_id: 24789217, transaction_type: "movie", Amount: 700, user_name: "Hemanth" },
    { transaction_id: 16,user_id: 24789217, transaction_type: "movie", Amount: 700, user_name: "Hemanth" },
    { transaction_id: 17,user_id: 24789217, transaction_type: "movie", Amount: 700, user_name: "Hemanth" },
    { transaction_id: 18,user_id: 24789217, transaction_type: "movie", Amount: 700, user_name: "Hemanth" },
    { transaction_id: 19,user_id: 24789217, transaction_type: "movie", Amount: 700, user_name: "Hemanth" },
    { transaction_id: 20,user_id: 24789217, transaction_type: "petrol", Amount: 500, user_name: "Hemanth" },
    { transaction_id: 21,user_id: 24789217, transaction_type: "shoping", Amount: 1500, user_name: "Hemanth" },
    { transaction_id: 22,user_id: 35897401, transaction_type: "shoping", Amount: 1900, user_name: "Srilakshmi" },
    { transaction_id: 23,user_id: 35897401, transaction_type: "shoping", Amount: 1900, user_name: "Srilakshmi" },
    { transaction_id: 24,user_id: 35897401, transaction_type: "shoping", Amount: 1900, user_name: "Srilakshmi" },
    { transaction_id: 25,user_id: 35897401, transaction_type: "shoping", Amount: 1900, user_name: "Srilakshmi" },
    { transaction_id: 26,user_id: 35897401, transaction_type: "shoping", Amount: 1900, user_name: "Srilakshmi" },
    { transaction_id: 27,user_id: 35897401, transaction_type: "shoping", Amount: 1900, user_name: "Srilakshmi" },
    { transaction_id: 28,user_id: 35897401, transaction_type: "shoping", Amount: 1900, user_name: "Srilakshmi" },
    { transaction_id: 29,user_id: 35897401, transaction_type: "shoping", Amount: 1900, user_name: "Srilakshmi" },
    { transaction_id: 30,user_id: 35897401, transaction_type: "shoping", Amount: 1900, user_name: "Srilakshmi" },
    { transaction_id: 31,user_id: 35897401, transaction_type: "petrol", Amount: 850, user_name: "Srilakshmi" },
    { transaction_id: 32,user_id: 35897401, transaction_type: "movie", Amount: 900, user_name: "Srilakshmi" },

  ];
  dbo.collection("transaction_table").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("many document inserted");
    db.close();
  });
});