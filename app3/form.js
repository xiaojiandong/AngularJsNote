
var userInfoModule = angular.module('UserInfoModule' , []);

userInfoModule.controller('UserInfoCtrl' , [ '$scope' , function( $scope ){
	$scope.userInfo = {
	  email : '1234567@163.com',
	  password : '1234567890',
	  isAutoLogin : true	 
	};
	
	// 获取form表单的值
	$scope.getFormDataClick = function(){
		console.log('获取form表单的值 $scope.userInfo : ');
		console.log($scope.userInfo);
	};
	
	// 设置form表单的值
	$scope.setFormDataClick = function(){
		$scope.userInfo = {
		 email : 'abcdef@gmail.com',
		 password : 'abc123',
		 isAutoLogin : false
		};
		console.log('设置form表单的值 $scope.userInfo : ');
		console.log($scope.userInfo);
	};
	
	$scope.resetFormDataClick = function(){
	  $scope.userInfo = {
	   email : '1234567@163.com',
	   password : '1234567890',
	   isAutoLogin : true	 
	  };
	};
	
}]);
