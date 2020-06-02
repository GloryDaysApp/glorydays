const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css');

return gulp.src('src/scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(cleanCSS())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('./static/'));