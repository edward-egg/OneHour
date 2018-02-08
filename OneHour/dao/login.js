var connection = require("../config/config");
var login = function(username,password,callback){
	var data ={}
	connection.getConnection.query('select * from agency where username = "'+username+'";',function(error,rows,fields){
		if(rows.length == 0){
			data.type ="fail";
			data.message = "用户不存在！";
			callback(data);
		}else{
			if(rows[0].password == password){
				data.type = "success";
				data.message = "登陆成功";
				callback(data);
			}else{
				data.type = "fail";
				data.message = "密码错误！";
				callback(data);
			}
		}
	});
}

//对外提供login方法
exports.login = login;