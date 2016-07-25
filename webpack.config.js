var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry:[
	'webpack/hot/dev-server',
	'webpack/hot/only-dev-server',
	'./src/index.js'
	],
	output:{
		filename: 'bundle.js',
		path: __dirname + '/src/build/',
		publicPath: '/'
	},
	plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
	module: {
	  loaders: [
	    {
	     test: /\.js$/,
	     include: path.join(__dirname, 'src'),
	     loaders: ['react-hot','babel'],
	     exclude: /node_modules/
	    }
	  ]
	},
	devServer: {
	  devtool: 'eval',
	  hot: true,
	  historyApiFallback: true,
	  contentBase: './src',
	},
	devtool: 'eval',
}