var gulp = require('gulp');
var svgSymbols = require('gulp-svg-symbols');

gulp.task('svg', function() {
  return gulp.src('./svg-sprite/*.svg')
    .pipe(svgSymbols())
    .pipe(gulp.dest('svg-sprite/svgs'))
})

gulp.run('svg')