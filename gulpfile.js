var gulp = require('gulp');

var cssmin = require('gulp-cssmin');
var uglify  = require('gulp-uglify');
var concat  = require('gulp-concat');
var rename = require('gulp-rename');

/* ------------------------------------------------------------------------ */
var css = [
  'node_modules/bootstrap/dist/css/bootstrap.min.css',
  'node_modules/font-awesome/css/font-awesome.min.css',
  'node_modules/admin-lte/dist/css/AdminLTE.min.css',
  //'node_modules/admin-lte/dist/css/skins/skin-red.min.css',
  'node_modules/admin-lte/dist/css/skins/black-light.min.css',
  'node_modules/sweetalert2/dist/sweetalert2.min.css',
];

gulp.task('css', function(){
  gulp.src(css)
    .pipe(cssmin())
    .pipe(concat('app.css'))
    .pipe(gulp.dest(__dirname+'/app'));
});
/* ------------------------------------------------------------------------ */


/* ------------------------------------------------------------------------ */
var js = [
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/bootstrap/dist/js/bootstrap.min.js',
  'node_modules/sweetalert2/dist/sweetalert2.min.js',


];

gulp.task('js', function () {
  gulp.src(js)
    .pipe(uglify({mangle: false}))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(__dirname+'/app'));
});
/* ------------------------------------------------------------------------ */

gulp.task('default', ['css', 'js' ]);