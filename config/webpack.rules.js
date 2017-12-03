module.exports = [
  { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
  {
    test: /\.sass$/,
    use: [{
      loader: "style-loader"
    }, {
      loader: "css-loader",
      options: {
        modules: true,
        sourceMap: true,
        localIdentName: '[local]___[hash:base64:5]',
      }
    }, {
      loader: "sass-loader",
      options: {
        includePaths: ["src"]
      }
    }]
  }
];