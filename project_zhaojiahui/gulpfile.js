var gulp = require('gulp');
var gulpHtml = require('gulp-htmlmin');
var sass = require('gulp-sass');
var gulpJs = require('gulp-uglify');
var concat = require('gulp-concat');
var gulpImg = require('gulp-smushit');
var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    }
var browserSync = require('browser-sync');
//压缩html
gulp.task('taskHtml', function () {
	gulp.src('./src/*.html')
	.pipe(gulpHtml(options))
	.pipe(gulp.dest('./dist'))
	.pipe(browserSync.reload({
		stream: true
	}))
})
//压缩sass
gulp.task('sass', function() {
    gulp.src('./src/css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
})
//压缩js
gulp.task('taskJs', function () {
	gulp.src('./src/js/*.js')
	.pipe(concat('all.js'))
	.pipe(gulpJs())
	.pipe(gulp.dest('./dist/js'))
	.pipe(browserSync.reload({
		stream: true
	}))
})
//压缩图片
gulp.task('taskImg', function () {
	gulp.src('./src/img/*.{jpg,png,gif}')
	.pipe(gulpImg({verbose:true}))
	.pipe(gulp.dest('./dist/images'))
})

//浏览器同步
gulp.task('servers', function () {
	browserSync({
		server: {baseDir: ['dist/']}
	}, function (err, bs) {
		console.log(bs.options.getIn('urls', 'local'));
	});
	gulp.watch('src/*.html', ['taskHtml']);
	gulp.watch('src/css/*.scss', ['sass']);
	gulp.watch('src/js/*.js', ['taskJs']);
})
//执行多个任务
gulp.task('mainTask', ['taskHtml', 'sass', 'taskJs', 'servers']);

