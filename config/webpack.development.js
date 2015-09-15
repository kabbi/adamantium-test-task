var webpack = require('webpack');
var webpackConfig = require('./webpack.production');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

webpackConfig.debug = true;
webpackConfig.devtool = 'source-map'

webpackConfig.plugins = [
  new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify('development')
  }),
  new ExtractTextPlugin("style.css"),
];

module.exports = webpackConfig;
