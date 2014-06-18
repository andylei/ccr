var bower = require('gulp-bower');
var gulp = require('gulp');

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('build/vendor/'));
});


