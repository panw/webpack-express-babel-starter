var path = require('path')

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "./build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css'}
    ]
  }
}
