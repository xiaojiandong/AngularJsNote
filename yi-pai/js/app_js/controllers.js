
require(['ng','common'] , function(ng,common){
    // 定义一个控制器模块 lagouControllers，依赖 lagouServices模块
    var lagouControlers = angular.module('lagouControlers' , ['lagouServices']);
    // 调用 lagouServices 模块中的 ser1 服务
    lagouControlers.controller('homeCtrl' , ['$scope','ser1',function($scope,ser1){ // 首页homeCtrl控制器
        $scope.str = '在另外一个控制器模块注入aas : ' + ser1.name;
        //console.log(ser1);
    }]);
    // 公司companyCtrl控制器
    lagouControlers.controller('companyCtrl',['$scope','companyMainService',
        function($scope,companyMainService){
        //console.log("companyMainService : ");
        //console.log(companyMainService);
        $scope.companyName = companyMainService.companyName;
        $scope.registerTime = companyMainService.registerTime;
        $scope.companyStaff = companyMainService.companyStaff;
    }]);
    // 在招职位控制器
    lagouControlers.controller('companyJobCtrl',['$scope','jobService',
        function($scope,jobService){
        //console.log(jobService);
        $scope.jobTypes = jobService.jobTypes;
        $scope.onChcekJobTypeClick = function(jobType){
           console.log(jobType);
        };
    }]);
});

