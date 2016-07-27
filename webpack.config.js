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
		path: path.resolve(__dirname, "build"),
		publicPath: '/build/'
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
	resolve: {
    extensions: ['', '.js', '.jsx']
  },
	devServer: {
	  devtool: 'eval',
	  hot: true,
	  historyApiFallback: true,
	  contentBase: './src',
	  outputPath: './',
	},
	devtool: 'eval'
}