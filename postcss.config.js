module.exports = {
  plugins: {
    'postcss-sprites': {
      "stylesheetPath": './dist',
      "spritePath": './dist/images/'
    },
    'autoprefixer': {
      "grid": true
    }
  }
};
