var path = require('path')

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "http://localhost:8080/build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css'}
    ]
  }
}
