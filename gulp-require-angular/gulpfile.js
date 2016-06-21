
var gulp = require('gulp'); // 插件依赖
var less = require('gulp-less'); // less编译插件
var minifycss = require('gulp-minify-css'); //css压缩插件
var uglify = require('gulp-uglify');//js压缩插件
var htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat'); //合并文件(js/css/html等)
var rename = require('gulp-rename'); // 重命名
var del = require('del'); //删除文件
var livereload = require('gulp-livereload'); // 监听页面变化
var notify = require('gulp-notify'); // 消息提醒
var imagemin = require('gulp-imagemin');   //图片压缩
var cache = require('gulp-cache');
//var shell = require('gulp-shell');
//var amdOptimize = require('amd-optimize');// 关键插件：gulp与require集成
//var requirejs = require('gulp-requirejs-simple'); // 合并打包requirejs(未用到)
//var requireStream = require('gulp-requirejs-stream');


// 创建任务 watchhtml，监听html的变化
gulp.task('htmlmin',function(){
    return gulp.src('./dev/html/**/*.html')// 开发目录下的.html文件
   .pipe(gulp.dest('./lib/html')) // 一次输出，未压缩
   .pipe(htmlmin({collapseWhitespace: true})) // 压缩html
   //.pipe(rename({suffix:'.min'}))
   .pipe(gulp.dest('./lib/html'))// 二次输出 index.min.html，已压缩
   .pipe(notify({message:'html编译成功！'}))
   .pipe(livereload({start:true}));
});

gulp.task('tplsmin',function(){
    return gulp.src('./dev/html/tpls/**/*.html')
       .pipe(htmlmin({collapseWhitespace : true})) // 压缩html
       .pipe(gulp.dest('./lib/html/tpls'));
});


// 创建任务stylemin，编译less并压缩成css
gulp.task('cssmin',function(){
    return gulp.src('./dev/css/*.less') //开发目录下的.less文件
  .pipe(less()) // 执行less插件压缩
  .pipe(minifycss())
  .pipe(gulp.dest('./lib/css')) // 编译压缩后的输出目录
  .pipe(notify({message:'css编译成功！'}))
  .pipe(livereload({start:true})); // 监听变化true
});

// 创建任务jsmin，压缩js
gulp.task('jsmin',function(){
   //gulp.src('./dev/js/**/*.js')//开发目录下全部文件夹的.js文件
   //gulp.src('./dev/js/scripts/index.js')
    return gulp.src('./dev/js/scripts/**/*.js')
   .pipe(uglify())
   .pipe(gulp.dest('./lib/js')) // 一次压缩
   .pipe(concat('all.js'))
   .pipe(rename({suffix:'.min'}))
   .pipe(uglify())
   .pipe(gulp.dest('./lib/js/all')) // 二次压缩
   .pipe(livereload({start:true}));
});

// 压缩合并css(引入到./dev/html/index1.html)
gulp.task('maincss',function(){
    var mainCssPath = './dev/css/';
     return gulp.src([
         mainCssPath + 'bootstrap.min.css',
         mainCssPath + 'jquery-confirm.min.css', // 第3三方css
         mainCssPath + 'common.css' // 项目公共的css
     ])
         .pipe(gulp.dest('./lib/css/main')) //1次输出
         .pipe(concat('main.css')) //合并
         .pipe(gulp.dest('./lib/css')) //2次输出
         .pipe(minifycss()) // 压缩css
         //.pipe(concat('main.css')) //合并
         .pipe(rename({suffix:'.min'}))
         .pipe(notify({message:'合并压缩全部css'}))
         .pipe(gulp.dest('./lib/css/main/min')) //3次输出
         .pipe(livereload({start:true}));
});

// 创建任务mainjs，合并/压缩/打包全部js(引入到./dev/html/index1.html)
gulp.task('mainjs',function(){
   var mainJsPath = './dev/js/scripts/';
    return gulp.src([ // 依赖的脚本顺序
       mainJsPath + 'common/jquery.2.1.3.min.js',
       mainJsPath + 'common/jquery-confirm.min.js',
       mainJsPath + 'common/bootstrap.min.js',
       mainJsPath + 'common/angular-1.3.0.js',
       mainJsPath + 'common/angular-ui-router.js',
       mainJsPath + 'js/services.js',
       mainJsPath + 'js/controllers.js',
       mainJsPath + 'index1.js' // 当前页面入口js
   ])
       .pipe(gulp.dest('./lib/js/main')) // 1次输出
       .pipe(concat('main.js'))
       .pipe(gulp.dest('./lib/js/main/a')) // 2次输出
       .pipe(uglify())
       .pipe(rename({suffix : '.min'}))
       .pipe(gulp.dest('./lib/js/main/min')) //3次输出(合并/压缩/打包)
       .pipe(notify({message:'main.all.js压缩成功'}))
       .pipe(livereload({start:true}));
});

// 压缩图片
gulp.task('imgmin', function() {
    return gulp.src('./dev/images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe(gulp.dest('./lib/images'));
});

// 创建任务clean，清空lib里之前的的压缩文件
gulp.task('clean' , function (cb) {
   return del(['./lib/'],cb); //加上return表示同步
});


gulp.task('default',['clean'],function(){//先执行clean，再执行下面的任务
   gulp.start(['htmlmin','cssmin','jsmin','tplsmin','mainjs','maincss','imgmin']);
});

gulp.task('watch',function(){
   livereload.listen();
   // 监听开发文件的变化，并执行该任务
   gulp.watch('./dev/html/**/*.html',['htmlmin']);
   gulp.watch('./dev/css/*.less',['cssmin']);
   gulp.watch('./dev/css/**/*.css',['maincss']);
   gulp.watch('./dev/js/**/*.js',['jsmin','mainjs']);
});
