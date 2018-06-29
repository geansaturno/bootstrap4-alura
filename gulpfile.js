const gulp = require('gulp');
const sass = require('gulp-sass');
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');
const htmlmin = require('gulp-htmlmin');

gulp.task('sass', () => gulp.src('./src/assets/sass/style.scss').pipe(sass()).pipe(gulp.dest('./dist/assets/css')));

gulp.task('clean', () => gulp.src('./dist').pipe(clean()));

gulp.task('cssmin', ['sass'], () => gulp.src('./dist/assets/css/**/*.css').pipe(cssmin()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('dist/assets/css')));

gulp.task('htmlmin', () => gulp.src(['./src/**/*.html', '!./src/assets/**']).pipe(htmlmin({collapseWhitespace: true})).pipe(gulp.dest('./dist')));

gulp.task('copyimg', () => gulp.src('./src/assets/img/**/*').pipe(gulp.dest('./dist/assets/img')));
gulp.task('copyjs', () => gulp.src('./src/assets/js/**/*').pipe(gulp.dest('./dist/assets/js')));

gulp.task('copy', ['copyimg', 'copyjs']);
gulp.task('default', ['clean', 'sass', 'minify']);
