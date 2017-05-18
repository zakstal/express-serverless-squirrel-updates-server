import path from 'path';
import fs from 'fs'
import webpack from 'webpack';

const nodeModules = {}
//fs.readdirSync('node_modules')
//  .filter(x => {
//    let isMenuBar = x === 'menubar';
//    console.log('x', x)
//    return ['.bin'].indexOf(x) === -1 && !isMenuBar
//  })
//  .forEach(mod => {
//    nodeModules[mod] = `commonjs ${mod}`
//  })

export default {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }],
    noParse: /node_modules\/json-schema\/lib\/validate\.js/
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'app'), 'node_modules'],
    root: path.resolve('./app'),
    extensions: ['', '.js', '.jsx'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },
  externals: [
    nodeModules,
  ],
  plugins: [
  ],

};
