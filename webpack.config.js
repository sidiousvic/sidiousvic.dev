// webpack v4
const path = require('path');
const webpack = require ('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: { main: './src/app.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
            'file-loader'
        ]
      },
        {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      } 
    ]
  },
  resolve: {
    alias: {
        'node_modules': path.join(__dirname, 'node_modules')
    }
},
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      THREE: 'three',
    }),
    new MiniCssExtractPlugin({filename: 'style.css',}),
    new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
  ]
};