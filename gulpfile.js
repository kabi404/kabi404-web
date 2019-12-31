const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('styles', async () => gulp
  .src('./styles/*.scss')
    .pipe(sass())
  .pipe(gulp.dest('./css')))
