/**
 * @param $scope
 * @constructor
 * 不推荐下面这样继承，或者说这种继承是错误的
 *
 * 关于 $scope的几点说明 :
 * $scope 是一个POJO对象(Plain Old JavaScript Object)
 * $scope 提供了一些工具方法 $watch(),$apply() 等
 * $scope 作用域，一般用于单个控制器内
 * $scope 是一个树型结构。与DOM树平行
 * $scope 子$scope对象能继承父$scope的属性和方法
 * $scope 每一个angular应用只有一个根$scope，一般位于ng-app上
 * $scope 可以向上或向下传播事件
 * $scope 不仅是MVC的基础，也是后面实现双向数据绑定的基础
 * $scope 可以用angular.element($0).scope() 进行调试
 *
 */
function CommonController($scope){
	$scope.commonFn1=function(){
    	alert("这里是通用功能！父控制器方法 commonFn1");
    };

    $scope.commonFn2=function(){
        alert("父控制器方法 commonFn2");
    };
}

function Controller1($scope) {
    $scope.greeting = {
        text: 'Hello controller1'
    };
    $scope.ctrl1Fn=function(){
    	alert("ctrl1 controller1");
    };
}

function Controller2($scope) {
    $scope.greeting = {
        text: 'Hello controller2'
    };
    $scope.ctrl2Fn=function(){
    	alert("ctrl2 controller2");
    }
}