const path = require('path');

module.exports = {
    mode: 'development',  // or 'production'
    resolve: {
        fallback: {
          // Node.js 모듈을 브라우저에서 사용할 수 있도록 설정
          'readline': require.resolve('readline')
          // 다른 필요한 모듈이 있다면 위와 같이 추가할 수 있음
        }
      },
  entry: './src/index.js',  // 진입점 파일
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
  
};