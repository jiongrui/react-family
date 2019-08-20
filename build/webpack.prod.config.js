const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const baseConfig = require("./webpack.base.config");
// const env = require("../config/" + process.env.BUILD_ENV + ".env");

const prodConfig = {
  mode: "production",
  entry: {
    app: [path.join(__dirname, "../src/index.js")]
  },
  output: {
    publicPath: "./"
  },
  devtool: "cheap-module-source-map",
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: ExtractTextPlugin.extract({
  //         fallback: "style-loader",
  //         use: "css-loader"
  //       })
  //     }
  //   ]
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.BUILD_ENV": "'prod'"
    })

    // new ExtractTextPlugin({
    //   filename: "static/css/[name].[md5:contenthash:hex:20].css",
    //   allChunks: true
    // })
  ]
};

module.exports = merge(baseConfig, prodConfig);
