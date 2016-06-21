/**
 * Created by Administrator on 2016/6/17.
 */
console.log('方法1：require+angular模块依赖');
require(['base','controllers','services'],function(base,controllers,services){

    var routerApp = angular.module('AppModule', ['ui.router','routerCtrls','routerServices']);

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
                    'home@index': { // index路由下对应的main ui-view
                        templateUrl: 'tpls/home.html'
                    }
                }
            })
            .state('index.usermng', {
                url: '/usermng',
                views: {
                    'home@index': {
                        templateUrl: 'tpls/usermng.html',
                        controller : 'UserMngCtrl'
                    }
                }
            })
            // 全部学生
            .state('index.usermng.allstudents', {
                url: '/allstudents',
                templateUrl: 'tpls/allstudents.html',
                controller : 'allUsersCtrl'
            })
            // 学生详情页面
            .state('index.usermng.detail', {
                url: '/detail',
                templateUrl: 'tpls/detail.html',
                controller : 'detailUsersCtrl'
            })
            // 全部班级
            .state('index.usermng.allclass',{
                url : '/allclass',
                templateUrl : 'tpls/allclass.html',
                controller : 'classCtrl'
            })
            // 班级详情
            .state('index.usermng.classdetail',{
                url : '/classdetail',
                templateUrl : 'tpls/classdetail.html',
                controller : 'classDetailCtrl'
            })
            // 光荣榜
            .state('index.usermng.honorlist',{
                url : '/honorlist',
                templateUrl : 'tpls/honorlist.html',
                controller : 'honorCtrl'
            })
            // 补考名单
            .state('index.usermng.blacklist',{
                url : '/blacklist',
                templateUrl : 'tpls/blacklist.html',
                controller : 'blackCtrl'
            })
            // 成绩管理
            .state('index.score',{
                url : '/score',
                views : {
                    'home@index' : {
                        templateUrl : 'tpls/score.html',
                        controller : 'scoreCtrl'
                    }
                }
            })
            // 编辑页面
            .state('index.edit',{
                url: '/edit',
                views: {
                    'home@index': {
                        templateUrl: 'tpls/edit.html',
                        controller : 'editCtrl'
                    }
                }
            })
            // 学生注册
            .state('index.signup', {
                url: '/signup',
                views: {
                    'home@index': {
                        templateUrl: 'tpls/signup.html',
                        controller : 'signupCtrl'
                    }
                }
            })
            // 个人中心
            .state('index.userInfo', {
                url: '/userInfo',
                views: {
                    'home@index': {
                        templateUrl: 'tpls/userInfo.html'
                    }
                }
            })

    });

    // 启动angular
    angular.bootstrap(document,['AppModule']);
});