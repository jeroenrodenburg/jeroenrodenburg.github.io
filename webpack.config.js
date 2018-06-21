var path = require('path');

module.exports = {
  mode: 'development',
  entry: "./assets/scripts/App.js",
  output: {
    path: path.resolve(__dirname, ""),
    filename: "App.js"
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['env']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}