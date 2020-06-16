const gulp = require('gulp');

return gulp.src([
    './src/img/**/*.*',
    './src/fonts/**/*.*',
    './uploads/**/*.*'
])
    .pipe(gulp.dest('./static/'));