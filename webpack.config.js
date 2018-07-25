module.exports = {
  mode: 'development',
  entry: './lib/iprotocol.js',
  output: {
    'path': require('path').resolve(process.cwd(), 'build'),
    'filename': 'neighborhood-wrtc.bundle.debug.js',
    'library': 'neighborhood',
    'libraryTarget': 'umd',
    'umdNamedDefine': true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: () => {
          return true
        },
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'env' ]
          }
        }
      }
    ]
  },
  devtool: 'source-map'
}
