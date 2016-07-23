var express = require('express');
var morgan  = require('morgan');
var cors = require('cors');
var app = express();
var path = require('path');
var router = require('./router');
var bodyParser = require('body-parser');

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
app.use('/node_modules', express.static(__dirname + '/../node_modules'));
app.use(express.static(path.join(__dirname, '../src')));
app.use(express.static(path.join(__dirname, '/')));

var port = process.env.PORT || 8080;
var server = require('http').createServer(app);
router(app);

server.listen(port, function(){
	console.log('Example app listening on port',port);
});
