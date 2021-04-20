const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/playground/redux-expensify.js",
  output: {
    path: path.resolve(__dirname, "public/"),
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    open: true,
    port: 7070,
    historyApiFallback: true,
  },
};
