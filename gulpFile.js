var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var concat = require("gulp-concat");

gulp.task('sass', function(){
  return gulp.src('src/reactTemplates/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(rename({
            basename: 'style',
            extname: '.css'
        })
    )
    .pipe(concat('style.css'))
    .pipe(gulp.dest('public/stylesheets/'))
});

gulp.task('default', ['sass']);