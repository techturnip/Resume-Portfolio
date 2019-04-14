'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Static Server + Watch Sass/HTML files
gulp.task('serve', ['sass'], function () {

  browserSync.init({
    server: "./"
  });

  gulp.watch("sass/**/*.scss", ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile Sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src("sass/**/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
});

// Watch and Compile Sass
gulp.task('sass:watch', function () {
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['serve']);