'use strict';

var gulp = require('gulp'),
 sass = require('gulp-sass'),
 autoprefixer = require('gulp-autoprefixer'),
 minify = require('gulp-minify-css'),
 gutil = require('gulp-util'),
 del = require('del');

gulp.task('sass', function () {
    gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minify())
        .pipe(gulp.dest('./css'));
});

gulp.task('scss:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('clean', function(cb) {
    del(['.styles/**'], cb);
});

gulp.task('default', function() {
    gulp.start('clean');
    gulp.start('sass');
});