var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'tpls2/home.html'
        })
    // nested list with custom controller
    .state('home.list', {
        url: '/list',
        templateUrl: 'tpls2/home-list.html',
        controller: function($scope) {
            $scope.topics = ['Butterscotch', 'Black Current', 'Mango'];
            $scope.homeLists = [
                '张三的Home' , '李四的Home' , '王五的Home' , '赵六的Home'
            ];
        }
    })
    // nested list with just some random string data
    .state('home.paragraph', {
        url: '/paragraph',
        template: '<h1>I could sure use a scoop of ice-cream. </h1>' +
            '<h1>这里是一段paragraph</h1>'
    })
    .state('about', {
        url: '/about',
        views: {
            '': {
                templateUrl: 'tpls2/about.html'
            },
            'columnOne@about': {
                template: '这里是第一列的内容'
            },
            'columnTwo@about': {
                templateUrl: 'tpls2/table-data.html',
                controller: 'Controller'
            },
            'testDiv@about': {
                templateUrl: 'tpls2/test-div.html',
                controller: 'testDivCtrl'
            }
        }
    });
});
routerApp.controller('Controller', function($scope) {
    $scope.message = 'columnTwo@about中的内容';
    $scope.topics = [{
        name: 'Butterscotch',
        price: 50
    }, {
        name: 'Black Current',
        price: 100
    }, {
        name: 'Mango',
        price: 20
    }];
});
routerApp.controller('testDivCtrl' , function($scope){
   $scope.userInfos = [
       {name : '张三' , age : '20岁' , home : '山西'},
       {name : '李四' , age : '30岁' , home : '山东'},
       {name : '王五' , age : '40岁' , home : '山北'},
       {name : '赵六' , age : '50岁' , home : '山南'}
   ]
});