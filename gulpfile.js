var gulp = require('gulp'),
	sass = require('gulp-ruby-sass');

gulp.task('default', ['watch']);

gulp.task('watch', function(){
	gulp.watch('css/style.scss',['style']);
});

gulp.task('style', function() {
	return sass('css/style.scss')
		.pipe(gulp.dest('css'));
});