var path = require('path');

module.exports = function(app){

	app.get('/', function(req, res, next){
		res.sendFile(path.join(__dirname, '../src/index.html'));
	});
}

