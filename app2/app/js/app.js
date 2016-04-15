/**
 * app.js是作为启动点的js
 * 相当于java的main方法
 * 任何一个ng应用都是由控制器，指令，服务路由，过滤器等有限模块类型构成（依赖注入）
 * app.js = controller.js + directives.js + services.js + routes.js + filters.js
 */
var bookStoreApp = angular.module('bookStoreApp', [
    'ngRoute', 'ngAnimate', 'bookStoreCtrls', 'bookStoreFilters',
    'bookStoreServices', 'bookStoreDirectives'
]);

/**
 * 使用ngRoute进行视图之间的路由交互
 * Angular中应用的路由通过 $routeProvider 来声明，
 * 他是$route服务的提供者，这项服务使得控制器(ctrl)，视图模板(view-tpl)，与当前浏览器的URL可以轻易集成，
 * 应用这个特性我们就可以实现 深链接，他允许我们使用浏览器的历史(go/back)和书签
 */
bookStoreApp.config(function($routeProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'tpls/hello.html',
        controller: 'HelloCtrl'
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
