
var routerApp = angular.module('MyRouteApp' , ['ui.router']);
// 注入 ui-router模块
routerApp.config(function($stateProvider , $urlRouterProvider){
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        // 首页
        .state('index' , {
         url : '/index',
         templateUrl : 'tpl4/index.html'
         })
        // 用户管理
        .state('user_admin' , {
            url : '/user_admin',
            templateUrl : 'tpl4/user_admin.html',
            controller : 'userAdminCtrl'
        })
        .state('user_admin.vip_user' , { // 高端用户
            url : '/vip_user', // 对应的url路由
            templateUrl : 'tpl4/user_admin_vip_user.html', // 对应的模板
            controller : 'vipUserCtrl'
        })
        .state('user_admin.middle_user' , { // 中端用户
            url : '/middle_user',
            templateUrl : 'tpl4/user_admin_middle_user.html',
            controller : 'middleUserCtrl'
        })
        .state('user_admin.lower_user' , { // 低端用户
            url : '/lower_user',
            templateUrl : 'tpl4/user_admin_lower_user.html',
            controller : 'lowerUserCtrl'
        })
        .state('user_admin.edit' , { // 编辑界面
            url : '/edit',
            templateUrl : 'tpl4/edit.html',
            controller : 'editCtrl'
        })
        .state('user_admin.detail' , { // 详情界面
            url : '/detail',
            templateUrl : 'tpl4/detail.html',
            controller : 'detailCtrl'
        })
        // 权限管理
        .state('power_admin' , {
            url : '/power_admin',
            templateUrl : 'tpl4/power_admin.html'
        })
        // 报表管理
        .state('report_admin' , {
            url : '/report_admin',
            templateUrl : 'tpl4/report_admin.html'
        })
        // 系统设置
        .state('system_setting' , {
            url : '/system_setting',
            templateUrl : 'tpl4/system_setting.html'
        })
        // 注册
        .state('register' , {
            url : '/register',
            templateUrl : 'tpl4/register.html',
            controller : 'registerCtrl'
        })
        // 个人中心
        .state('personal_center' , {
            url : '/personal_center',
            templateUrl : 'tpl4/personal_center.html'
        })
        // 编辑
        //.state('edit' , {
        //    url : '/edit',
        //    templateUrl : 'tpl4/edit.html',
        //    controller : 'editCtrl'
        //})
});

// 提取公共服务，存储全部用户
routerApp.factory('allUserInfoFactory' , function( $http ){
        var factory = {};
        factory.allUserInfo = {};
        $http({
            url : 'data.json',
            method : 'GET',
            data : {}
         }).success(function( data ){
                factory.allUserInfo = data;
         });
        return factory;
    }
);

// 设置全局变量，保存编辑后的信息
routerApp.value('saveEditedInfo' , {
   "userInfo" : ""
});

// 设置全局变量，存储当前用户的全部详情信息
routerApp.value('singleUserInfoDetailVal' , {
     'userDetail' : {}
});

// 用户管理的父控制器
routerApp.controller('userAdminCtrl' , function( $scope , $state , allUserInfoFactory , saveEditedInfo , singleUserInfoDetailVal ){
    //console.log('userAdminCtrl');
    //console.log(allUserInfoFactory);
    //console.log(allUserInfoFactory.allUserInfo[1]);
    $scope.allUser = allUserInfoFactory.allUserInfo;
    // 低端用户，点击编辑btn
    $scope.onEditClick = function(user){
        saveEditedInfo.userInfo = user;
        $state.go('user_admin.edit');
    };
    // 点击查看详情btn
    $scope.onShowDetailClick = function(user){
        //singleUserInfoDetailVal
        singleUserInfoDetailVal.userDetail = user;
        $state.go('user_admin.detail');
        //console.log(singleUserInfoDetailVal);
    };


});

// 高端用户控制器
routerApp.controller('vipUserCtrl' , function( $scope , allUserInfoFactory ){
    $scope.allUserV = allUserInfoFactory.allUserInfo;
});

// 中端用户控制器
routerApp.controller('middleUserCtrl' , function( $scope , allUserInfoFactory ){
    //$scope.middle
});

// 低端用户控制器
routerApp.controller('lowerUserCtrl' , function( $scope , $state , allUserInfoFactory  ){

});

// 编辑控制器
routerApp.controller('editCtrl' , function( $scope ,  $timeout , $state , allUserInfoFactory , saveEditedInfo ){
   // 初始化的信息
   $scope.currentUserName = saveEditedInfo.userInfo.name;
   $scope.currentUserEmail = saveEditedInfo.userInfo.user_email;
   $scope.currentUserCountry = saveEditedInfo.userInfo.user_country;
   $scope.onSubmitClick = function(){
      //console.log(saveEditedInfo);
      // 点击编辑后保存的信息，再次存入saveEditedInfo中
      var currentIndex = parseInt(saveEditedInfo.userInfo.user_id);
      saveEditedInfo.userInfo.name = $scope.currentUserName;
      saveEditedInfo.userInfo.user_email = $scope.currentUserEmail;
      saveEditedInfo.userInfo.user_country = $scope.currentUserCountry;
      //allUserInfoFactory.allUserInfo[currentIndex].name = $scope.currentUser;
      allUserInfoFactory.allUserInfo[currentIndex] = saveEditedInfo.userInfo;
   };
   $scope.onGoBackClick = function(){
       //alert('返回低端用户');
       $state.go('user_admin.lower_user');
   }
});

// 详情控制器
routerApp.controller('detailCtrl' , function($scope , singleUserInfoDetailVal){
    //console.log(singleUserInfoDetailVal);
    $scope.userDetail = singleUserInfoDetailVal.userDetail;
    $scope.onReturnBack = function(){
        history.go(-1);
    };
});

// 注册控制器
routerApp.controller('registerCtrl', function($scope , allUserInfoFactory){

   $scope.selectedType = '';
   $scope.newUserObj = {};
   $scope.newUserObj.name = ''; // 名字
   $scope.newUserObj.user_email = ''; // 邮箱

   $scope.newUserObj.user_country = ''; // 国籍

   // 点击保存用户信息
   $scope.onRegisterClick = function(){
      var user_id = allUserInfoFactory.allUserInfo.length;
      $scope.newUserObj.user_attr = $scope.user_attr; // 类型
      $scope.newUserObj.user_id = user_id; // ID
      $scope.newUserObj.attr_id = 1; // attr_id
       //console.log( $scope.newUserObj );
       //console.log( $scope.selectedType );
       allUserInfoFactory.allUserInfo[user_id] = $scope.newUserObj;
       console.log(allUserInfoFactory.allUserInfo[user_id]);

       /*
       // 新创建一个用户
       allUserInfoFactory.allUserInfo[user_id].user_id =  user_id;
       allUserInfoFactory.allUserInfo[user_id].name =  $scope.newUserObj.userName;
       allUserInfoFactory.allUserInfo[user_id].user_attr =  $scope.selectedType;
       allUserInfoFactory.allUserInfo[user_id].user_email =  $scope.newUserObj.userEmail;
       allUserInfoFactory.allUserInfo[user_id].user_country =  $scope.newUserObj.userCountry;
       */

       console.log(allUserInfoFactory.allUserInfo);
      //allUserInfoFactory.allUserInfo.push();
   };

   // 下拉框
   $scope.types = [
       {type : 'vip'},
       {type : 'middle'},
       {type : 'lower'}
   ];


    /*
    $scope.user = '请输入您的用户名:张三';
    $scope.email = 'john.doe@gmail.com';
    */
    $scope.user = 'name';
    $scope.email = 'abc.name@gmail.com';


});