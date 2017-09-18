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
        .pipe(autoprefixer({
            browsers: ['Android >= 2.3', 'BlackBerry >= 7', 'Chrome >= 9', 'Firefox >= 4', 'Explorer >= 9', 'iOS >= 5', 'Opera >= 11', 'Safari >= 5', 'OperaMobile >= 11', 'OperaMini >= 6', 'ChromeAndroid >= 9', 'FirefoxAndroid >= 4', 'ExplorerMobile >= 9'],
            cascade: false
        }))
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