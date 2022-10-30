'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

const watch = function(){
  gulp.watch('./sass/**/*.scss',buildStyles);
};
exports.default=gulp.parallel(buildStyles,gulp.series(watch));

