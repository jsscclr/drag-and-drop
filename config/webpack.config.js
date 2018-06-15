/* global require, __dirname, module */
const { resolve } = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  mode: "production",
  devtool: "cheap-module-eval-source-map",
  entry: resolve(__dirname, "../", "src", "index.js"),
  module: {
    rules: [
      {
        test: /\.js/,
        use: {
          loader: "babel-loader",
        },
        include: resolve(__dirname, "../", "src"),
      },
      {
        test: /\.css/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: { modules: true, importLoaders: 1 },
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: resolve(__dirname, "postcss.config.js"),
              },
            },
          },
        ],
        include: resolve(__dirname, "../", "src"),
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: resolve(__dirname, "../", "dist"),
    publicPath: "/drag-and-drop/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "../", "src", "index.html"),
    }),
    new CopyWebpackPlugin([{ from: resolve(__dirname, "../", "static") }]),
  ],
  serve: {
    content: resolve(__dirname, "../", "static"),
    publicPath: "/drag-and-drop/",
  },
}
