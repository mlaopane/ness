/********************/
/*** Webpack Config ***/
/********************/

var config = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "ness.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      }
    ]
  }
};
module.exports = config;
