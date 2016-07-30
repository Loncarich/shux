var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry:[
	// 'webpack/hot/dev-server',
	// 'webpack/hot/only-dev-server',
	'./src/index.js'
	],
	output:{
		filename: 'bundle.js',
		path: path.join(__dirname, "/src/build"),
		publicPath: '/'
	},
	// plugins: [
 //    new webpack.HotModuleReplacementPlugin()
 //  ],
	module: {
	  loaders: [
	    {
	     test: /\.js$/,
	     include: path.join(__dirname, 'src'),
	     loaders: ['babel'],
	     exclude: /node_modules/
	    }
	  ]
	},
	resolve: {
    extensions: ['', '.js', '.jsx']
  },
	// devServer: {
	//   devtool: 'eval',
	//   hot: false,
	//   historyApiFallback: true,
	//   contentBase: './src',
	//   outputPath: './',
	// },
	// devtool: 'eval'
}