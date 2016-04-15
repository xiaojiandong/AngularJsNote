var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'tpls3/index.html'
                },
                'topbar@index': {
                    templateUrl: 'tpls3/topbar.html',
                    controller : 'IndexTopbarCtrl'
                },
                'main@index': {
                    templateUrl: 'tpls3/home.html'
                }
            }
        })
        .state('index.usermng', {
            url: '/usermng',
            views: {
                'main@index': {
                    templateUrl: 'tpls3/usermng.html',
                    controller : 'UserMngCtrl'
                    // controller: function($scope, $state) {
                        // $scope.isActive = true;
                        // $scope.addUserType = function() {
                            // $state.go("index.usermng.addusertype");
                        // };
                    // }
                }
            }
        })
        .state('index.usermng.allusers', {
            url: '/allusers',
            templateUrl: 'tpls3/allusers.html'
        })
        .state('index.usermng.highendusers', {
            url: '/highendusers',
            templateUrl: 'tpls3/highendusers.html'
        })
        .state('index.usermng.normalusers', {
            url: '/normalusers',
            templateUrl: 'tpls3/normalusers.html'
        })
        .state('index.usermng.lowusers', {
            url: '/lowusers',
            templateUrl: 'tpls3/lowusers.html'
        })
        .state('index.usermng.blackusers', {
            url: '/blackusers',
            templateUrl: 'tpls3/blackusers.html'
        })
        .state('index.usermng.addusertype', {
            url: '/addusertype',
            templateUrl: 'tpls3/addusertypeform.html',
            controller: function($scope, $state) {
                $scope.backToPrevious = function() {
                    window.history.back();
                }
            }
        })
        .state('index.permission', {
            url: '/permission',
            views: {
                'main@index': {
                    template: '这里是权限管理'
                }
            }
        })
        .state('index.report', {
            url: '/report',
            views: {
                'main@index': {
                    template: '这里是报表管理'
                }
            }
        })
        .state('index.settings', {
            url: '/settings',
            views: {
                'main@index': {
                    template: '这里是系统设置'
                }
            }
        })
        .state('index.userInfo', {
            url: '/userInfo',
            views: {
                 'main@index': {
                    templateUrl: 'tpls3/userInfo.html'
                },
            }
        })
});

routerApp.controller('UserMngCtrl' ,function($scope,$state){
	// $scope.isActive = true;
	$scope.currentIndex = 0;
	$scope.names = ['张三' , '李四' , '王五' , '赵六'];
	$scope.uiSrefs = [
	 {url : 'allusers' , word : '用户分类'},
	 {url : 'highendusers' , word : '高端用户'},
	 {url : 'normalusers' , word : '中端用户'},
	 {url : 'lowusers' , word : '低端用户'},
	 {url : 'blackusers' , word : '黑名单'}
	];
	
	$scope.setUiSrefClick = function(index){
	  $scope.currentIndex = index;
	};
	$scope.addUserType = function() {
        $state.go("index.usermng.addusertype");
    };
});

routerApp.controller('IndexTopbarCtrl' , function( $scope ){
    $scope.uiSrefs = [
        { sref : '' ,nav : '首页'},
        { sref : '.usermng' ,nav : '用户管理'},
        { sref : '.permission' ,nav : '权限管理'},
        { sref : '.report' ,nav : '报表管理'},
        { sref : '.settings' ,nav : '系统管理'},
        { sref : '.userInfo' ,nav : '个人中心'}
    ];
});