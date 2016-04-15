/**
 *
 * @param $scope
 * @constructor
 * 创建一个单利服务，不同作用域通过这个服务进行通信
 * $on方法 用于接收event与data
 * $emit方法 从当前作用域向上进行通信
 * $broadcast方法 从当前作用域向下进行通信
 */
function EventController($scope) {
	$scope.count = 0;
    // $on 用于接收不同子控制器的event和data
	$scope.$on('MyEvent', function() {
		$scope.count++;
	});
}

