const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const baseConfig = require("./webpack.base.config");
// const env = require("../config/" + process.env.BUILD_ENV + ".env");

const devConfig = {
  devtool: "inline-source-map",
  entry: {
    app: [
      // "babel-polyfill",
      "react-hot-loader/patch",
      path.join(__dirname, "../src/index.js")
    ]
  },
  output: {
    filename: "[name].[hash].js",
    publicPath: "/"
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    historyApiFallback: true,
    port: 8080
    // open: true
    // host: "0.0.0.0"
    // hot: true
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       loader: "style-loader!css-loader"
  //     }
  //   ]
  // },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.BUILD_ENV": "'dev'"
    })
  ]
};

module.exports = merge(baseConfig, devConfig);
