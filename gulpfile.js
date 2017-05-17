/**
 * Created by Administrator on 2017/5/15.
 */


var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass');



// gulp.task('testSass', function () {
//     gulp.src('./scss/**/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('css'))
// });

gulp.task('testAutopre', function () {
    gulp.src('./stylesheets/style.css')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove: true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest('./dist/css'))
});


gulp.task('watchSass', function () {
    gulp.watch('./stylesheets/style.css', ['testAutopre']);
});