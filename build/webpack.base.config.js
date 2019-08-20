const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

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
        rules: [
          {
            test: /\.css$/,
            loader: "style-loader!css-loader"
          }
        ]
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
      router: path.join(__dirname, "../src/router"),
      mock: path.join(__dirname, "../mock"),
      until: path.join(__dirname, "../src/utils")
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
    new webpack.DefinePlugin({
      Mock: true
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
