/**
 *
 * @param $scope
 * @param $rootScope
 * 根作用域 $rootScope里面的属性和方法可以被其他控制器访问
 */
function GreetCtrl($scope, $rootScope) {
	$scope.name = 'World';
	$rootScope.department = ': rootScope Angular';
}

function LanguageListCtrl($scope) {
//	$scope.names = ['Igor', 'Misko', 'Vojta'];
	$scope.names = [
        {language : 'Java' , time : '1994'},
        {language : 'JavaScript' , time : '1995'},
        {language : 'C' , time : '1978'}
    ];
}
