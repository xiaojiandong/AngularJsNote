define(['ng','main_js/common','angularUiRouter'],function(ng,common,angularUiRouter){
    
    //angular config
    return app = angular.module('mlm',['']) // angular-loading-bar
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    }])
    //处理金额返回2位数
    .filter('money',function(){
        return function(money,num){
            return Number(money).toFixed(num);
        }
    });
});