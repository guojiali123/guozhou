var express = require('express');
var router = express.Router();
var fs=require("fs")
/* GET home page. */
router.post('/', function(req, res, next) {
	res.header("Access-Control-Allow-Origin","*");
  fs.readFile("guo.txt","utf-8",function(err,data){
  	var num={};
  	fs.writeFile("guo.txt",function(err){
  		res.render("index",{title:num});
  	})
  }) 
});
module.exports = router;
