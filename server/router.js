var path = require('path');

module.exports = function(app){

	app.get('/', function(req, res, next){
		res.sendFile(path.join(__dirname, '../src/index.html'));
	});
	app.post('/login', function(req, res, next){
		res.send('token');
	});
		app.post('/signup', function(req, res, next){
		res.send('token');
	});
		app.get('*', function(req, res, next){
		res.sendFile(path.join(__dirname, '../src/index.html'));
	});
}

