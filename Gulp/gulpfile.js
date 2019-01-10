var gulp = require('gulp')
var del = require('del')
var postcss = require('gulp-postcss')
const babel = require('gulp-babel')
var minify = require('gulp-minify')

gulp.task('rm',function(){
  return del(['dist/**'])
})

gulp.task('css',['rm'],function(){
  var postcss = require('gulp-postcss')
  var sourcemaps = require('gulp-sourcemaps')
  var autoprefixer = require('autoprefixer')

  return gulp.src('./src/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'))
})
gulp.task('css-watch',function(){
  var postcss = require('gulp-postcss')
  var sourcemaps = require('gulp-sourcemaps')
  var autoprefixer = require('autoprefixer')

  return gulp.src('./src/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('js',['rm'],()=>{
  gulp.src('src/*.js')
  .pipe(babel({
    presets: ['env']
  }))
  .pipe(minify({noSource: true,ext:{min:'.js'}}))
  .pipe(gulp.dest('dist'))
})