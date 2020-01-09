const PORT = 8001;
//启动服务的根目录
const server_root = "./src/";
//引用gulp
var gulp = require("gulp");
//引用gulp开启服务的插件
var connect = require("gulp-connect");
//引用插件 gulp代理中间件插件
var proxy = require("http-proxy-middleware");

//开启服务
gulp.task("proxyServer", function() {
  connect.server({
    root: [server_root],
    port: PORT,
    livereload: true,
    middleware: function(connect, opt) {
      return [
        proxy("/api", {
          target: "https://jsonplaceholder.typicode.com", //代理的目标地址
          changeOrigin: true, 
          pathRewrite: {
            //路径重写规则
            "^/api": ""
          }
        })
      ];
    }
  });
});

// 本地模拟数据调试
//建立一个配置对象变量，后面我们要传递给插件用来启动server
var serverConfig={
  root:'src',//从哪个目录开启server
  port:8080,//将服务开启在哪个端口
}
//建立一个server任务 直接可以用 gulp server就可以执行这个任务
gulp.task('server', function() {
  connect.server(serverConfig);
});

gulp.task("watch", function() {
    // gulp.watch('./app/js/*.js', gulp.series('js') );
    // gulp.watch('./app/css/*.css', gulp.series('css'));
    gulp.watch('./src/index.html', gulp.series('html') ); // gulp4.0任务统一使用回调函数，不再支持 ['html'] 这种形
});

gulp.task('html',function(){
    return gulp.src('./src/*.html').pipe(connect.reload());    // 刷新浏览器
})

gulp.task("default", gulp.series(gulp.parallel('proxyServer','watch','html')))