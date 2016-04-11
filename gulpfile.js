var gulp = require('gulp'),
	sass = require('gulp-ruby-sass');

gulp.task('default', ['watch']);

gulp.task('watch', function(){
	gulp.watch('*.scss',['style']);
});

gulp.task('style', function() {
	return sass('*.scss')
		.pipe(gulp.dest('.'));
});