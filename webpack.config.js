//const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js',
  },
  output: {
    //path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  target: 'node',
  externals: {
    //require: 'require',
  }
};
