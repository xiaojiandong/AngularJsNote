var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'tpls2/home.html',
            controller : function($scope){
                $scope.onListClick = function(){
                    console.log('当前点击的标签：' + event.target.tagName);
                }
            }
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
        templateUrl : 'tpls2/paragraph-list.html'
        //template: '<h1>I could sure use a scoop of ice-cream. </h1>' +
          //  '<h1>这里是一段paragraph</h1>'
    })
    .state('home.paragraph.test', {
          url: '/test',
          templateUrl : 'tpls2/test-paragraph.html',
          //template: '<h1>I could sure use a scoop of ice-cream. </h1>'
          controller : function($scope){
              //alert('test-paragraph.html');
          }
    })
    .state('home.paragraph.test.test_more', {
         url: '/test_more',
         templateUrl : 'tpls2/test-more-paragraph.html',
         controller : 'testMoreCtrl'
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

routerApp.controller('testMoreCtrl' , function($scope){
    $scope.str = '这里是tesMoreCtrl里面的内容';
    $scope.items = [
        {item : '再深层次的嵌套内容A'},
        {item : '再深层次的嵌套内容B'},
        {item : '再深层次的嵌套内容C'}
    ];
    $scope.isShowInfo = true;
    $scope.showInfoWords = '清空内容';
    $scope.clearStrInfo = function(){
        $scope.isShowInfo = !$scope.isShowInfo;
        if($scope.isShowInfo){
            $scope.showInfoWords = '清空内容';
        }else{
            $scope.showInfoWords = '恢复内容';
        }
    };
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
   ];
   $scope.onDelItemClick = function(currentItem){
     // 传递的是当前对象
     var currentItemIndex = currentItem.$index;
     console.log( currentItemIndex );
     $scope.userInfos.splice(currentItemIndex , 1);
   }

});