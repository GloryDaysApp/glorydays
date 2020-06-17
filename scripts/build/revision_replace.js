const gulp = require('gulp');
const revReplace = require('gulp-rev-replace');

gulp.src([
    './static/service-worker.js',
])
    .pipe(revReplace({
        manifest: gulp.src('./static/rev-manifest.json')
    }))
    .pipe(gulp.dest('./static'));