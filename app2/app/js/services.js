/**
 * 创建服务脚本 service.js
 * 不同的控制器可以从 service.js中继承属性和动作
 */
var bookStoreServices = angular.module('bookStoreServices', []);

bookStoreServices.service('bookStoreService_1', ['$scope',
    function($scope) {}
]);

bookStoreServices.service('bookStoreService_2', ['$scope',
    function($scope) {}
]);
