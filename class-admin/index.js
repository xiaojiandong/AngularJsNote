
var routerApp = angular.module('routerApp', ['ui.router','ngAnimate','routerAppServices','routerAppCtrls']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'tpls/index.html'
                },
                'topbar@index': { // index路由下对应的topbar ui-view
                    templateUrl: 'tpls/topbar.html',
                    controller : 'topbarCtrl'
                },
                'main@index': { // index路由下对应的main ui-view
                    templateUrl: 'tpls/home.html'
                }
            }
        })
        .state('index.usermng', {
            url: '/usermng',
            views: {
                'main@index': {
                    templateUrl: 'tpls/usermng.html',
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
        // 全部学生
        .state('index.usermng.allstudents', {
            url: '/allstudents',
            templateUrl: 'tpls/allstudents.html',
            controller : 'allUsersCtrl'
        })
        // 详情页面
        .state('index.usermng.detail', {
            url: '/detail',
            templateUrl: 'tpls/detail.html',
            controller : 'detailUsersCtrl'
        })
        // 全部班级
        .state('index.usermng.allclass', {
            url: '/allclass',
            templateUrl: 'tpls/allclass.html',
            controller : 'classCtrl'
        })
        // 班级详情
        .state('index.usermng.classdetail',{
            url : '/classdetail',
            templateUrl : 'tpls/classdetail.html',
            controller : 'classDetailCtrl'
        })
        // 光荣榜
        .state('index.usermng.honorlist', {
            url: '/honorlist',
            templateUrl: 'tpls/honorlist.html',
            controller : 'honorCtrl'
        })
        .state('index.usermng.lowusers', {
            url: '/lowusers',
            templateUrl: 'tpls/lowusers.html'
        })
        // 补考名单
        .state('index.usermng.blacklist', {
            url: '/blacklist',
            templateUrl: 'tpls/blacklist.html',
            controller : 'blackCtrl'
        })
        // 新增用户
        .state('index.usermng.addusertype', {
            url: '/addusertype',
            templateUrl: 'tpls/addusertypeform.html',
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
        // 成绩管理
        .state('index.score', {
            url: '/score',
            views: {
                'main@index': {
                    //template: '这里是成绩管理',
                    templateUrl: 'tpls/score.html',
                    controller : 'scoreCtrl'
                }
            }
        })
        // 编辑页面
        .state('index.edit',{
            url: '/edit',
            views: {
                'main@index': {
                    templateUrl: 'tpls/edit.html',
                    controller : 'editCtrl'
                }
            }
        })
        // 学生注册
        .state('index.signup', {
            url: '/signup',
            views: {
                'main@index': {
                    templateUrl: 'tpls/signup.html',
                    controller : 'signupCtrl'
                }
            }
        })
        .state('index.userInfo', {
            url: '/userInfo',
            views: {
                 'main@index': {
                    templateUrl: 'tpls/userInfo.html'
                }
            }
        })
});



