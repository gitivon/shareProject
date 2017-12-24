var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprites');

gulp.task('svg', function() {
  return gulp.src('./svg-sprite/assets/*.svg')
    .pipe(svgSprite({
      mode: 'symbols',
      preview: {
        sprite: "index.html"
      }
    }))
    .pipe(gulp.dest('./svg-sprite/dist'))
})

gulp.run('svg')