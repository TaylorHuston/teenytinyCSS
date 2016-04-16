var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('convertLess', function() {
  return gulp.src('src/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('src'));
});
