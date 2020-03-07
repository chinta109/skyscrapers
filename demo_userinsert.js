var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ninja1db");
  var myobj = [
  { cust_id: 12546789, password: "Rare@741", account_number: "77040112345609",address:"Hyderabad-madinaguda", user_name: "Vamshi" ,DOB:"08/09/1991"},
  { cust_id: 24789217, password: "Rare@741", account_number: "77040154578902",address:"Hyderabad-chandanadar", user_name: "Hemanth" ,DOB:"09/10/1991"},
  { cust_id: 35897401, password: "Rare@741", account_number: "77040157894125",address:"Hyderabad-Adibatla", user_name: "Srilakshmi" ,DOB:"07/11/1990"},
  { cust_id: 12478902, password: "Rare@741", account_number: "77040157897527",address:"Hyderabad-Lbnagar", user_name: "Priyanka" ,DOB:"06/12/1991"},  
  { cust_id: 85454678, password: "Rare@741", account_number: "77040156743290",address:"Hyderabad-rsnagar", user_name: "Ganesh" ,DOB:"05/11/1989"},
  { cust_id: 85454678, password: "Rare@741", account_number: "77040156743290",address:"Hyderabad-rsnagar", user_name: "Swetha" ,DOB:"08/12/1989"},
  { user_id: 12546790, password: "Rare@741", account_number: "77040156743191",address:"Delhi-rsnagar", user_name: "Suchi" ,DOB:"04/05/1989"},  
  { user_id: 12546791, password: "Rare@741", account_number: "77040156743297",address:"Delhi-nagar", user_name: "Sandeep" ,DOB:"04/05/1984"},
  { user_id: 12546792, password: "Rare@741", account_number: "77040156743365",address:"Nagpur-rsnagar", user_name: "Deba" ,DOB:"04/11/1988"}, 
  { user_id: 12546793, password: "Rare@741", account_number: "77040156743852",address:"Hyd-rsnagar", user_name: "Sai" ,DOB:"04/05/1992"}, 
];
  dbo.collection("user_table").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("many document inserted");
    db.close();
  });
});