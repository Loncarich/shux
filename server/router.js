var path = require('path');
var Auth = require('./controllers/authController')

module.exports = function(app){

	app.get('/', function(req, res, next){
		res.sendFile(path.join(__dirname, '../src/index.html'));
	});
	app.post('/login');

	app.post('/signup', Auth.sendMessage);
	
	app.get('*', function(req, res, next){
		res.redirect('/')
	});
}

