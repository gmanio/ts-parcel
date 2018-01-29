module.exports = {
  plugins: {
    autoprefixer: {
      grid: true
    },
    'postcss-easysprites': {
      imagePath: '../../../public/img',
      spritePath: './public/sprites',
      stylesheetPath: './src/assets/sprites/spr-img.css'
    }
  }
};
