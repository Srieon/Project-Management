var express = require('express');
var router = express.Router();
var db=require('../database');

// another routes also appear here
// this script to fetch data from MySQL databse table
router.post('/form', function(req, res, next) {
  console.log("hi");
    var sid = req.body.sid
    var fname = req.body.fname
    var lname = req.body.lname
    var course = req.body.course
    var sql="insert into student VALUES ('" + sid + "','" + fname + "','" + lname + "','" + course +"');";
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    console.log("Valued Entered")
  });
});
module.exports = router;