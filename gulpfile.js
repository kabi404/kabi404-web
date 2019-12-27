const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', async () => {
  await gulp.src('./sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
})


