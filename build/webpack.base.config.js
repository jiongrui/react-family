const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    vendor: ["react", "react-router-dom", "redux", "react-dom", "react-redux"]
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "static/js/[name].[chunkhash].js",
    chunkFilename: "static/js/[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              {
                plugins: ["@babel/plugin-proposal-class-properties"]
              }
            ]
          }
        },
        include: path.join(__dirname, "../src")
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 8192 }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      pages: path.join(__dirname, "../src/pages"),
      components: path.join(__dirname, "../src/components"),
      router: path.join(__dirname, "../src/router")
    }
  },
  // plugins: [new webpack.HotModuleReplacementPlugin()]
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "../src/index.html")
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "../static"),
        to: "static",
        ignore: [".*"]
      }
    ]),
    new ExtractTextPlugin({
      filename: "static/css/[name].[md5:contenthash:hex:20].css",
      allChunks: true
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor",
          enforce: true
        }
      }
    }
  }
};
