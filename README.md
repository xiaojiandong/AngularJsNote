# AngularJsNote
AngularJs practice

## app2 angular-route，angular-animate，路由与动画
![image](https://github.com/xiaojiandong/AngularJsNote/blob/master/image/animate-route.png)
## 局部app.js代码：
```js
// 创建一个模块
var bookStoreApp = angular.module('bookStoreApp', [
    'ngRoute', 'ngAnimate', 'bookStoreCtrls', 'bookStoreFilters',
    'bookStoreServices', 'bookStoreDirectives'
]);
bookStoreApp.config(function($routeProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'tpls/hello.html', // 对应的模板
        controller: 'HelloCtrl' // 对应的控制器
    }).when('/booksList',{ // '/booksList:bookId'
    	templateUrl:'tpls/bookList.html',
    	controller:'BookListCtrl'
    }).when('/songsList',{
        templateUrl:'tpls/songsList.html',
        controller:'SongsListCtrl'
    }).when('/doSomething',{
        templateUrl:'tpls/doSomething.html',
        controller:'DoSomethingCtrl'
    }).otherwise({ // 路由重定向
        redirectTo: '/hello'
    })
});
```
## 局部index.css代码：
```css
/* angular-animate脚本能识别的指令 ng-enter与ng-leave */
.ng-enter {
    z-index: 8888;
}
.ng-leave {
    z-index: 9999;
}
/*.hello 这个类进入的时候，ng-enter引用scaleUp这个动画*/
.hello.ng-enter {
    -webkit-animation: scaleUp 0.5s both ease-in;
}
.hello.ng-leave {
    transform-origin: 0% 0%;
    -webkit-animation: rotateFall 1s both ease-in;
}
.list.ng-enter {
    -webkit-animation:slideInRight 0.5s both ease-in;
}
.list.ng-leave {
    -webkit-animation:slideOutLeft 0.5s both ease-in;
}
.doSomething.ng-enter{
    -webkit-animation: doTopToDown 0.5s both ease-in;
}
.doSomething.ng-leave{
    -webkit-animation: doDownToTop 0.5s both ease-in;
}
.songsList.ng-enter{
    -webkit-animation: songLineToArea 0.5s both ease-in;
}
.songsList.ng-leave{
    -webkit-animation: songAreaToLine 0.5s both ease-in;
}
```
