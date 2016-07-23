var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry:[
	'./src/index.js'
	],
	output:{
		path: __dirname + '/build',
		publicPath: './',
		filename: 'bundle.js'
	},
	module: {
	  loaders: [
	    {
	     include: path.join(__dirname, 'src'),
	     loader: 'babel',
	     exclude: /node_modules/
	    }
	  ]
	},
}