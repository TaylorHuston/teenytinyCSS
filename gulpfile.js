var gulp = require('gulp'),
  less = require('gulp-less'),
  clean = require('gulp-clean'),
  concatCSS = require('gulp-concat-css'),
  prefix = require('gulp-autoprefixer'),
  dest = 'dist/';

gulp.task('clean', function () {
  return gulp.src(dest)
    .pipe(clean());
});

gulp.task('convertLess', ['clean'], function () {
  return gulp.src('src/**/*.less')
    .pipe(less())
    .pipe(prefix({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('src'));
});

gulp.task('concatCSS', ['convertLess'], function () {
  return gulp.src('src/**/*.css')
    .pipe(concatCSS('teenytiny.css'))
    .pipe(gulp.dest(dest+'css'));
});

gulp.task('build', ['clean', 'convertLess', 'concatCSS']);