var path = require('path')
var webpack = require('webpack')


module.exports = {
  cache: true
, debug: true
, devtool: 'source-map'
, entry: {
    app: ['webpack/hot/dev-server', './src/js/app']
  }
, devServer: {
    contentBase: './src'
  }
, output: {
    path: process.env.NODE_ENV === 'production' ? './src/dist' : './build'
  , publicPath: '/dist'
  , filename: '[name].js'
  , chunkFilename: '[chunkhash].js'
  , sourceMapFilename: 'debugging/[file].map'
  , hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js'
  , hotUpdateMainFilename: 'hot/[hash].hot-update.json'
  }
, module: {
    loaders: [
      {test: /\.js$/, exclude:[/node_modules/, /public\/components/, /build/,], loader: 'babel-loader?optional=runtime'}
    , {test: /\.jsx$/, exclude:[/node_modules/, /public\/components/, /build/], loaders: [ 'react-hot', 'babel-loader?optional=runtime']}
    , {test: /\.css$/, exclude:[/build/], loader: 'style-loader!css-loader'}
    ]
  , noParse: /\.min\.js/
  }
, resolve: {
    modulesDirectories: ['bower_components', 'node_modules']
  , extensions: ['', '.js', '.jsx', '.json']
  }
, plugins: [
    new webpack.HotModuleReplacementPlugin()
  , new webpack.ProvidePlugin({
      jQuery: 'jquery'
    , $: 'jquery'
    })
  ]
}
