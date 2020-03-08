var path = require("path");
const WebpackShellPlugin = require('webpack-shell-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );


module.exports = {
  entry: {
    contentScript: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname + '/../docs'),
    filename: '[name].js',
  },
  mode: "development",// development //production
  devtool:"source-map",
	optimization: {
		minimize: false
	},
  devServer: {
		historyApiFallback: true
	 },
  module: {
    rules: [
        {
            test: /\.js?$/,
            exclude: /node_module/,
            use: 'babel-loader'
        },
        {
          test: /\.css?$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
        }
      ]
  },
  plugins: [
      new HtmlWebPackPlugin({
          template: path.resolve( __dirname, '../src/index.html' ),
          filename: 'index.html'
      })
  ]
};