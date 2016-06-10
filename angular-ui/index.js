require(['ng','common'], function(ng,common){

    //var myApp = angular.module('homeApp',[]);

    var routerApp = angular.module('MyRouteApp' ,
        ['ui.router','lagouServices','lagouControlers','lagouFilters']); // 模块依赖注入

    $('body').css({
       'background' : 'pink'
    });

    // ui路由
    routerApp.config(function($stateProvider , $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            // 首页
            .state('home' , {
              url : '/home',
              templateUrl : 'tpls/home.html',
              controller : 'homeCtrl'
            })
            // 公司
            .state('company' , {
              url : '/company',
              templateUrl : 'tpls/company.html',
              controller : 'companyCtrl'
            })
            // 公司-主页
            .state('company.company_main_page' , {
              url : '/company_main_page',
              templateUrl : 'tpls/company_main_page.html'
            })
            // 公司-招聘职位
            .state('company.company_jobs_page' , {
               url : '/company_jobs_page',
               templateUrl : 'tpls/company_jobs_page.html',
               controller : 'companyJobCtrl'
            })
            // 一拍
            .state('deal' , {
              url : '/deal',
              templateUrl : 'tpls/deal.html',
              controller : 'dealCtrl'
            })
    });

    //routerApp.controller('homeCtrl' , function($scope){
    //    $scope.str = 'homeCtrl控制器中的str';
    //});

    //mlm.commentInit();//初始化评论弹窗
    //mlm.scoreInit();//初始化打分弹窗
    //手动启动 angular mlm模块加载
    //mlm.angularInit();
});