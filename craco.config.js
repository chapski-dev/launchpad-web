const path = require('path')
const webpack = require('webpack')

module.exports = {
  webpack: {
    // alias: {
    //   '@': path.resolve(__dirname, 'src'),
    // },
    configure: {
      resolve: {
        fallback: {
          buffer: require.resolve('buffer'),
        },
      },
    },
    plugins: {
      add: [
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
        }),
      ],
    },
  },
}
