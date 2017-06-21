'use strict';

var path = require('path');

var config = {
  entry: {
    demoview: path.resolve('src'),
    home: path.resolve('./home.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    library: '[name]'
  },
  externals: {
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'jsx-loader?harmony'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};

module.exports = config;
