module.exports = {
  entry: [
    'babel-polyfill',
    './src', //this is where our app lives
  ],
  output: {
    path: 'build',
    publicPath: 'build/',
    filename: 'bundle.js',
    // outputs everything to build/bundle.js
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
    }],
  },
};
