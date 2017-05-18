var configValues = require('./config');

module.exports ={

	//connect to the database via string and you can pass dev or prod in the function param.
	getDbconnectionString: function(){
		return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds143081.mlab.com:43081/simplenodetodo';
	}

}