const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  console.log("env: ", env);
  const modeConfig = env.production ? "production" : "development";
  const sourceMapConfig = env.production ? "source-map" : "inline-source-map";

  return {
    mode: modeConfig,
    entry: "./src/app.js",
    output: {
      path: path.resolve(__dirname, "public/"),
      filename: "app.bundle.js",
    },
    plugins: [new MiniCssExtractPlugin({ filename: "styles.css" })],
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
          test: /\.s?css$/i,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: "css-loader",
              options: { sourceMap: true },
            },
            {
              loader: "sass-loader",
              options: { sourceMap: true },
            },
          ],

          // use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
    devtool: sourceMapConfig,
    devServer: {
      contentBase: path.join(__dirname, "public"),
      compress: true,
      open: true,
      port: 7070,
      historyApiFallback: true,
    },
  };
};
