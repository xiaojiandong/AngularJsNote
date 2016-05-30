var myUIRoute = angular.module('MyUIRoute', ['ui.router', 'ngAnimate']);
myUIRoute.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/state1");
    $stateProvider
        .state('state1', {
            url: "/state1",
            templateUrl: "tpls/state1.html"
        })
        .state('state1.list', {
            url: "/list",
            templateUrl: "tpls/state1.list.html",
            controller: function($scope) {
                $scope.items = ["state1-list-A", "state1-list-List", "state1-list-Of", "state1-list-Items"];
                $scope.books = [
                    {name : '<<平凡的世界>>' , author : '张三'},
                    {name : '<<时间简史>>' , author : '李四'},
                    {name : '<<十万个为什么>>' , author : '王五'},
                    {name : '<<谁的青春不迷茫>>' , author : '赵六'}
                ]
            }
        })
        .state('state2', {
            url: "/state2",
            templateUrl: "tpls/state2.html"
        })
        .state('state2.list', {
            url: "/list",
            templateUrl: "tpls/state2.list.html",
            controller: function($scope) {
                $scope.nations = [
                    {name : '中国' , place : '亚洲'},
                    {name : '加拿大' , place : '北美洲'},
                    {name : '尼日尼亚' , place : '非洲'},
                    {name : '德国' , place : '欧洲'}
                ];
            }
        });
});
