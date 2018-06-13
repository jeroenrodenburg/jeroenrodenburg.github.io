var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');
postcssPresetEnv = require('postcss-preset-env');

gulp.task('styles', function() {
  var processors = [
    cssImport,
    nested,
    autoprefixer,
    postcssPresetEnv({
      features: {
        'custom-media-queries': true,
      }
    })
  ];
  return gulp.src('./assets/styles/styles.css')
    .pipe(postcss(processors))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest(''));
});