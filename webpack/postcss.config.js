module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-preset-env': {
      browsers: 'last 2 versions',
      features: {
        'custom-media-queries': true,
      }
    },
    'autoprefixer': {},
    'cssnano': {}
  },
};