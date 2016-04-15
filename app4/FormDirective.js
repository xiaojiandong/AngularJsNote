/**
 * Created by Administrator on 2016/4/9.
 */

 var formDirective = angular.module('FormDirective' , []);

formDirective.directive('hello' , function (){
   return {
       scope : {}, // 独立 scope
       restrict : 'AE',
       template : "<input ng-model='inpForm'><label ng-bind='inpForm'></label><br>"
//       replace : true
   }
});