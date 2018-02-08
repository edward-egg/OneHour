var mysql = require("mysql");
var connection ={};

//建立数据库连接
connection.createConnection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"zxcasd123",
	database:"onehour",
	port:3306
});
//对外返回数据库连接
exports.getConnection = connection.createConnection;
