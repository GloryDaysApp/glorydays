const gulp = require('gulp');

return gulp.src([
    './src/img/**/*.*',
    './src/fonts/**/*.*'
])
    .pipe(gulp.dest('./static/'));