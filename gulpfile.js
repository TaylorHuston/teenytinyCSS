var gulp = require('gulp'),
  less = require('gulp-less'),
  clean = require('gulp-clean'),
  concatCSS = require('gulp-concat-css');

gulp.task('convertLess', function () {
  return gulp.src('src/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('src'));
});

gulp.task('clean', function () {
  return gulp.src('dist')
    .pipe(clean());
});

gulp.task('concatCSS', function() {
  return gulp.src('src/**/*.css')
    .pipe(concatCSS('teenytiny.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('build', ['clean', 'convertLess', 'concatCSS']);
