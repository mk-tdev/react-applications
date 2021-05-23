const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "test") {
  require("dotenv").config({ path: ".env.test" });
} else if (process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: ".env.development" });
}

module.exports = (env) => {
  const modeConfig = env.production ? "production" : "development";
  const sourceMapConfig = env.production ? "source-map" : "inline-source-map";

  return {
    mode: modeConfig,
    entry: "./src/app.js",
    output: {
      path: path.resolve(__dirname, "public/"),
      filename: "app.bundle.js",
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: "styles.css" }),
      new webpack.DefinePlugin({
        "process.env.FIREBASE_API_KEY": JSON.stringify(
          process.env.FIREBASE_API_KEY
        ),
        "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(
          process.env.FIREBASE_AUTH_DOMAIN
        ),
        "process.env.FIREBASE_DB_URL": JSON.stringify(
          process.env.FIREBASE_DB_URL
        ),
        "process.env.FIREBASE_PROJECT_ID": JSON.stringify(
          process.env.FIREBASE_PROJECT_ID
        ),
        "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(
          process.env.FIREBASE_STORAGE_BUCKET
        ),
        "process.env.FIREBASE_MESSAGESENDERID": JSON.stringify(
          process.env.FIREBASE_MESSAGESENDERID
        ),
        "process.env.FIREBASE_APPID": JSON.stringify(
          process.env.FIREBASE_APPID
        ),
      }),
    ],
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
