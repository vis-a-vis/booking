const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.join(__dirname, 'client/src');
const DIST_DIR = path.join(__dirname, 'public/build');

module.exports = {
  context: SRC_DIR,
  entry: './index.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env'],
        },
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: DIST_DIR,
    filename: 'app.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
