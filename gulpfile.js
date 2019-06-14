/****************/
/* Dependencies */
/****************/

let autoprefixer = require('gulp-autoprefixer'),
  beautify = require('gulp-beautify'),
  browserSync = require('browser-sync').create(),
  concat = require ('gulp-concat'),
  gulp = require('gulp'),
  sass = require ('gulp-sass'),
  watch = require('gulp-watch');



gulp.task('sass', () => {
  return gulp.src(['assets/sass/*.scss', 'assets/sass/partials/*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(autoprefixer())
    .pipe(gulp.dest('assets/'))
    .pipe(browserSync.stream());
});

gulp.task('js', () => {
  return gulp.src('js/modules/*.js')
    .pipe(concat('index.min.js'))
    .pipe(beautify({indent_size: 2}))
    .pipe(gulp.dest('js/'));
});

gulp.task('watch', ['browserSync', 'sass', 'js'], () => {
  gulp.watch('index.html', browserSync.reload);
  gulp.watch('assets/sass/**/*.scss', ['sass']);
  gulp.watch('js/modules/*.js', ['js', browserSync.reload]);
});

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: './',
      serveStaticOptions: {
        extensions: ["html"]
      }
    },
  });
});

gulp.task('default', ['watch'], () => {});
