var myModule=angular.module("MyModule",[]);
myModule.controller('LoadDataCtrl', ['$scope','$http', function($scope,$http){
	// 链式操作
   $http({
        method: 'GET', // 请求方式
        url: 'data.json' // 请求路径
    }).success(function(data, status, headers, config) { // 请求成功的处理
        console.log("请求成功success...");
        console.log(data);
        $scope.users=data;
    }).error(function(data, status, headers, config) { // 请求失败的处理
        console.log("error...");
    });
    
    /**
     *ajax的操作：
     * $.ajax({
     * 	 url : '/path/to/file/index.php',
     *   type : 'GET/POST', // 默认GET
     *   dataType : 'Intelligent Guess',
     *   data : {param1 : 'value1'},
     *   success : function(){ // 这种写法现在不推荐使用
     * 	  // todo 请求成功的处理
     *   },
     *   fail : function(){
     * 	 // todo 请求失败的处理
     *   }
     * }).done(function(){ // 请求成功的处理
     * 	  console.log('success');
     * }).fail(function(){ // 请求失败的处理
     * 	  console.log('error');
     * }).always(function(){
     * 	  console.log('complete'); // 始终执行的部分
     * });
     */
    
}]);