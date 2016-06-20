
require(['ng','common'], function(ng,common){
  // 公共的service
  var services = angular.module('lagouServices',[]);
  services.factory('ser1' , function( ) {
    var ser1 = {};
      ser1.name = '张三';
      ser1.age = '20岁';
    return ser1;
  });

  services.factory('companyMainService' , function(){
      var companyMainService = {};
      companyMainService.companyName = '千百度公司';
      companyMainService.companyCash = '500亿';
      companyMainService.companyStaff = '3万员工';
      companyMainService.registerTime = '1998年10月';
      return companyMainService;
  });
  // 招聘职位service
  services.factory('jobService',function(){
    var jobService = {};
      jobService.jobTypes = [
          {'name' : '全部','jobId' : '0'},
          {'name' : '技术','jobId' : '1'},
          {'name' : '设计','jobId' : '2'},
          {'name' : '运营','jobId' : '3'},
          {'name' : '市场与销售','jobId' : '4'}
      ];
    return jobService;
  });

});
