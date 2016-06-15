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

## app4 directive指令
![image](https://github.com/xiaojiandong/AngularJsNote/blob/master/image/directive-view.png)
## 局部 Directive&Direcive.html代码：
```html
    <h1>指令之间如何进行交互</h1>
	<div class="row">
		<div class="col-md-3">
			<animal run>动物A---跑</animal>
		</div>
	</div>
	<div class="row">
		<div class="col-md-3">
			<animal run eat>动物B---跑+吃</animal>
		</div>
	</div>
	<div class="row">
		<div class="col-md-3">
			<animal run eat sleep>动物C---跑+吃+睡</animal>
		</div>
	</div>
```
## 局部 Directive&Directive.js代码：
```js
 var myModule = angular.module("MyModule", []);
myModule.directive("animal", function() {
    return {
        scope: {}, // 独立作用域，里面可传3种参数 ：=，@,&
        // A-attribute,E-element,M-comment,C-class
        restrict: 'AE',
        // 公共被外部调用的方法public，写在controller里
        controller: function($scope) { // 指令内部的controller
            $scope.abilities = [];
            this.addRun = function() {
                $scope.abilities.push(" 跑的快 ");
            };
            this.addEat = function() {
                $scope.abilities.push(" 吃的多 ");
            };
            this.addSleep = function() {
                $scope.abilities.push(" 睡的饱 ");
            };
        },
        // 指令自有的方法写在link中
        link: function(scope, element, attrs) {
            element.addClass('btn btn-primary');
//            element.bind("mouseenter", function() {
//                console.log(scope.abilities);
//            });
            element.on("click", function() {
                alert(scope.abilities);
            });
        }
    }
});
myModule.directive("run", function() {
    return {
        require: '^animal', // 注入 animal这个指令
        // link方法的参数：作用域，元素，属性，一级父控制器
        link: function(scope, element, attrs, animalCtrl) {
            animalCtrl.addRun();
        }
    }
});
myModule.directive("eat", function() {
    return {
        require: '^animal',
        link: function(scope, element, attrs, animalCtrl) {
            animalCtrl.addEat();
        }
    }
});
myModule.directive("sleep", function() {
    return {
        require: '^animal',
        link: function(scope, element, attrs, animalCtrl) {
            animalCtrl.addSleep();
        }
    }
});
```
## filter 过滤器：
![image](https://github.com/xiaojiandong/AngularJsNote/blob/master/image/filter.png)

## class-admin，CRUD操作，局部视图：
#### create创建
![image](https://github.com/xiaojiandong/AngularJsNote/blob/master/class-admin/image/1-create.png)
#### retrieve查询
![image](https://github.com/xiaojiandong/AngularJsNote/blob/master/class-admin/image/2-retrieve.png)
#### update更新,delete删除
![image](https://github.com/xiaojiandong/AngularJsNote/blob/master/class-admin/image/4-delete-3-update.png)
