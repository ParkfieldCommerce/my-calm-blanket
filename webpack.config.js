var path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
   filename: 'app.css'
});

module.exports = {
  entry: {css:'./assets/app.scss'},
  output: {
    path: path.resolve(__dirname, 'assets'),
    publicPath: '/assets',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: extractPlugin.extract({
          use: [  
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer()]
              }
            },
            'sass-loader'  
          ]
        })
      }
    ]
  },
  plugins: [
      extractPlugin
  ]
};