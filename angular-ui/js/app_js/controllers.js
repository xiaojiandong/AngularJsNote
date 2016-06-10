
require(['ng','common'] , function(ng,common){
    // 定义一个控制器模块 lagouControllers，依赖 lagouServices模块
    var lagouControlers = angular.module('lagouControlers' , ['lagouServices','lagouFilters']);
    // 整个页面的根控制器
    lagouControlers.controller('rootPageCtrl',['$rootScope','$scope','companyMainService',
        function($rootScope,$scope,companyMainService){
        $rootScope.activeCompany = companyMainService.companyArr[0]; // company页面的全部info 初始化index=0
        $rootScope.companyImg = companyMainService.companyArr[0].companyImg;
    }]);

    // 调用 lagouServices 模块中的 ser1 服务
    lagouControlers.controller('homeCtrl' , ['$scope','ser1',function($scope,ser1){ // 首页homeCtrl控制器
        $scope.str = '在另外一个控制器模块注入aas : ' + ser1.name;
        //console.log(ser1);
    }]);
    // 公司companyCtrl控制器
    lagouControlers.controller('companyCtrl',['$rootScope','$scope','companyMainService',
        function($rootScope,$scope,companyMainService){
    }]);

    lagouControlers.filter('testFilter' , function(){
       return function(num){
          if(num > 25){
              return 26;
          }else{
              return 24;
          }
       };
    });

    // 在招职位控制器
    lagouControlers.controller('companyJobCtrl',['$scope','companyMainService',
        function($scope,companyMainService){
        $scope.type = '';
        // 方法1，click中传参jobType
        /*
        $scope.onChcekJobTypeClick = function(jobType){
            if(jobType.jobId == 0){ // 全部
                $scope.type = '';
            }else{ // 按不同类型排序
                $scope.type = jobType.jobId;
            }
        };
        */
        // 方法2，click中传参$event
        $scope.currentIndex = 0; // 判断高亮的那个类
        $scope.onChcekJobTypeClick = function($event){ // 传递当前事件对象
            var target = $event.target; // 当前点击的对象
            var jobid = target.getAttribute('data-jobid'); // angular获取属性
            $scope.currentIndex = jobid;
            if(jobid == '0'){ // 全部
                $scope.type = '';
            }else{ // 按不同类型排序
                $scope.type = jobid;
            }
        };
        // $state.go("index.usermng.addusertype");
    }]);

    // 一拍
    lagouControlers.controller('dealCtrl' , ['$rootScope','$scope','$location','$state',
        'dealCompanyService','companyMainService',
        function($rootScope,$scope,$location,$state,dealCompanyService,companyMainService){
            $scope.allCompanys = dealCompanyService.allCompany;
            // 点击进入到每个公司中
            $scope.onEnterCompanyClick = function($event){
                var target = $event.target;
                var attrId = target.getAttribute('attr-id');
                if(attrId <= 3){
                  // 改变全局属性
                  $rootScope.activeCompany = companyMainService.companyArr[attrId]; // 公司详细信息
                  $rootScope.companyImg = companyMainService.companyArr[attrId].companyImg;//公司img
                  $state.go("company.company_jobs_page");// 跳转到公司页面
                }else{
                   alert('当前公司并未开通一拍服务');
                }
            };
    }]);
});

