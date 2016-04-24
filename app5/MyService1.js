
/**
 * service的特性
 * 1. service都是单例的
 * 2. service由$injector注入来负责实例化
 * 3. service在整个app的生命周期中存在，可用来共享数据
 * 4. 自定义的service要写在内置的service后面，
 * 5. 内置的service以$开头，自定义的service没有$ 
 */

/**
 * service,provider,factory 本质上都是provider
 * provider模式是 “策略模式” + “抽象工厂模式” 的混合体
 */

var myServiceApp = angular.module("MyServiceApp", []);
// 抽出一个公共的服务 userListService，这个服务可以被不同的 controller调用
myServiceApp.factory('userListService', ['$http',
    function($http) {
        var doRequest = function(username, path) {
            return $http({
                method: 'GET',
                url: 'MyService1.json'
            });
        };
        return {
            userList: function(username) {
            	// 调用上面的 doRequest() 方法
                return doRequest(username, 'userList');
            }
        };
    }
]);

// 自定义的 userListService 放在 中括号最后面 , 依次注入
myServiceApp.controller('ServiceController', ['$scope', '$timeout', 'userListService',
    function($scope, $timeout, userListService) {
    	/**
    	 * 初始化 ng-model='username'，
    	 * 若username不存在，则ng-show 为false 
    	 */
    	//$scope.username = '初始化输入框中的ng-model=username';
    	var timeout1 = $timeout(function(){
    		// $scope.username = '初始化输入框中的ng-model=username';
    		// console.log($scope.username);
    	} , 1500);
    	
        var timeout;
        // 注册监听 ，监听参数的变化 username -> ng-model="username"
        $scope.$watch('username', function(newUserName) { // newUserName -> 输入的值
            if (newUserName) {
                if (timeout) {
                    $timeout.cancel(timeout); // 防止页面重复请求
                }
                // console.log('刚才在input中输入的是：newUserName');
                // console.log(newUserName);
                timeout = $timeout(function() { // angular中的延迟方法 $timeout(function(){});
                   // 调用公共服务中的 userList方法
                    userListService.userList(newUserName)
                        .success(function(data, status) {
                            $scope.users = data;
                            console.log('MyService1.json中的data');
                            console.log(data);
                        });
                }, 350); // 设置请求延时
            }
        });
    }
]);

/**
 * 其他常用service：内置24个
 * $compile:编译服务
 * $filter:数据格式化工具
 * $interval
 * $timeout
 * $location
 * $locale
 * $log
 * $parse
 * $http:封装了ajax
 */
