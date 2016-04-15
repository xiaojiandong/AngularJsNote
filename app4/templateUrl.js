var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
        // A-attribute,E-element,M-comment,C-class
        restrict: 'AECM',
        templateUrl: 'hello.html',
//        template : "<h1>heheda</h1>",
        replace: true
    }
});