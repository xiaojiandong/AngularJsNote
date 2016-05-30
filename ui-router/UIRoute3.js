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
                    templateUrl: 'tpls3/topbar.html'
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
            templateUrl: 'tpls3/allusers.html',
            controller : 'allUsersCtrl'
        })
        // 编辑页面
        .state('index.usermng.edit', {
            url: '/edit',
            templateUrl: 'tpls3/edit.html',
            controller : 'editUsersCtrl'
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
            //controller: function($scope, $state) {
            //    $scope.backToPrevious = function() {
            //        window.history.back();
            //    }
            //},
            controller : 'addUserTypeCtrl'
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
                }
            }
        })
});

// 创建一个公共的服务
routerApp.factory('AllUserInfosFactory' , function(){
   var userInfo = ['张三' , '李四' , '王五' , '赵六'];
   var factory = {};
       factory.userInfo = userInfo;
   return  factory;
});
// 创建一个公共服务，存储修改过的用户
routerApp.factory('saveUserEditedInfo' , function(){
   var provide = {};
    provide.editedInfo = '';
    return provide;
});

routerApp.controller('UserMngCtrl' ,function($scope,$state,AllUserInfosFactory , saveUserEditedInfo){
	// $scope.isActive = true;
	$scope.currentIndex = 0;
	$scope.names = AllUserInfosFactory.userInfo;
	$scope.uiSrefs = [
	 {url : 'allusers' , word : '用户分类'},
	 {url : 'highendusers' , word : '高端用户'},
	 {url : 'normalusers' , word : '中端用户'},
	 {url : 'lowusers' , word : '低端用户'},
	 {url : 'blackusers' , word : '黑名单'}
	 //{url : 'edit' , word : '编辑'}
	];
	//console.log(AllUserInfosFactory.userInfo);
	$scope.setUiSrefClick = function(index){
	  $scope.currentIndex = index;
	};
	$scope.addUserType = function() {
        $state.go("index.usermng.addusertype");
    };

    $scope.clickedIndex;
    $scope.currentUserInfo;
    // 点击编辑
    $scope.onEditClick = function(tar){
        // alert("确定要去编辑？");
        // console.log(saveUserEditedInfo);
        $scope.clickedIndex = tar.$index;
        $scope.currentUserInfo = AllUserInfosFactory.userInfo[$scope.clickedIndex];
        console.log('你确定要编辑该信息？' + $scope.clickedIndex);
        $state.go("index.usermng.edit");
        saveUserEditedInfo.editedInfo = AllUserInfosFactory.userInfo[$scope.clickedIndex];
        saveUserEditedInfo.aIndex = $scope.clickedIndex;

    };
});

// 全部用户分类控制器
routerApp.controller('allUsersCtrl',function( $scope , AllUserInfosFactory){
  $scope.names = AllUserInfosFactory.userInfo;
});

// 添加用户的控制器
routerApp.controller('addUserTypeCtrl' , function( $scope , AllUserInfosFactory){
   $scope.userName = '';
   $scope.userEmail = '';
   $scope.userPassword = '';
   $scope.onAddUserInfoClick = function(){
     console.log('添加成功');
     AllUserInfosFactory.userInfo.push($scope.userName);
   }
});

// 编辑页面
routerApp.controller('editUsersCtrl' , function( $scope , $state , AllUserInfosFactory , saveUserEditedInfo){
   $scope.currentUserInfo = saveUserEditedInfo.editedInfo;
   $scope.onSubmitClick = function(){
      //alert('提交已经编辑的信息');
      saveUserEditedInfo.editedInfo = $scope.currentUserInfo;
      AllUserInfosFactory.userInfo[saveUserEditedInfo.aIndex] = saveUserEditedInfo.editedInfo;
    };
    // 返回上一页
    $scope.onGoBackClick = function(){
      $state.go('index.usermng.allusers');
    };
});