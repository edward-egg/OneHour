var express = require('express');
var router = express.Router();

var userDao = require('../dao/userDao');

router.get('/',function(req,res,callback){
	userDao.login(req.query.username,req.query.password,function(result){
		res.json({status:200,result});
	});
});

module.exports =router;
