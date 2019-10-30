const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const env = process.env.NODE_ENV || 'none';
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve('./src/index.ts'),
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loaders: ['babel-loader', 'ts-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(
    {
      terserOptions: {
        warnings: false,
        compress:{
          drop_console:true
        }
      }
    }
    )],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      }
    }),
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ],
  mode: 'production',
  output: {
    path: path.resolve('./dist'),
    filename: 'index.min.js',
    libraryTarget: 'umd',
    sourceMapFilename: 'index.min.js.map',
    library: 'H5SDK'
  }
};
