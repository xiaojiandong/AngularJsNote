/**
 * 一个module由controller + directive + route 组成
 * @type {module}
 */
var myModule = angular.module("MyModule", []);
myModule.directive("mymark", function() {
    return {
        restrict: 'E',
        template: '<div>directive指令编译的my-mark</div>',
        replace: true
    }
});