const gulp = require('gulp')
const sass = require('gulp-sass')
const autoPrefixer = require('gulp-autoprefixer')

gulp.task('sass', async () => {
  await gulp.src('./sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
})


