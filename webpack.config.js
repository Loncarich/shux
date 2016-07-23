var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry:[
	'./src/index.js'
	],
	ouput:{
		path: path.join(__dirname, '/build'),
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