const gulp = require('gulp');

return gulp.src([
    './src/img/**/*.*',
    './src/fonts/**/*.*',
    './uploads/**/*.*',
    './src/manifest.json',
    './src/service-worker.js'
])
    .pipe(gulp.dest('./static/'));