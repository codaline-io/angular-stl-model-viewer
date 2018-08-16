let _config = {
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: {
    'angular-stl-model-viewer': './index.ts'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.ts$/,
      use: [{
        loader: 'ts-loader'
      }]
    }, {
      // instrument only testing sources with Istanbul, covers ts files
      test: /\.ts$/,
      enforce: 'post',
      use: [{
        loader: 'istanbul-instrumenter-loader',
        options: {
          embedSource: true,
          noAutoWrap: true
        }
      }],
      exclude: [
        /node_modules/,
        /examples/,
        /\.(e2e|spec)\.ts$/
      ]
    }]
  }
}

module.exports = _config
