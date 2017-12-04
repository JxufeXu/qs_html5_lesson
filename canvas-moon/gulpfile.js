// 引入gulp
// commonJS 模块化方案
var gulp = require('gulp');
// 前端多任务自动化脚本
// 添加一个任务
// build 编译
gulp.task('build',function() {
    // 将你的默认的任务代码放在这
    // 找到某个文件
    return gulp.src('./src/js/main.js')
    // 送到流水线上 dest目录下
    // ......
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('watch',['build'], function() {
    //监听js目录下所有文件
    gulp.watch('./src/js/*.js',['build']);
});
//自动将其他几个任务组合起来执行
gulp.task('default',['watch']);
