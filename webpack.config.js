const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  target: 'node',
  externals: {
    //require: 'require',
  }
};


//const path = require('path');
//
//module.exports = {
//  mode: 'production',
//  // エントリーポイントの設定
//  entry: {
//    server: './server.js',
//    game: './static/game.js',
//  },
//  // ビルド後、'./dist/my-bundle.js'というbundleファイルを生成する
//  output: {
//    path: path.resolve(__dirname, 'dist'),
//    filename: '[name].bundle.js'
//  },
//  target: 'node',
//  externals: {
//    //require: 'require',
//    //bufferutil: 'bufferutil',
//    //utfvalidate: 'utfvalidate',
//  },
//};