/**
 * bookStoreCtrls一个模块，里面由控制器，服务，过滤器，视图等组成
 *
 */
var bookStoreCtrls = angular.module('bookStoreCtrls', []);

// HelloCtrl对应 hello.html模板
bookStoreCtrls.controller('HelloCtrl', ['$scope',
    function($scope) {
        $scope.greeting = {
            text: 'Hello'
        };
        $scope.pageClass="hello";
    }
]);

// BookListCtrl对应 bookList.html模板
bookStoreCtrls.controller('BookListCtrl', ['$scope',
    function($scope) {
        $scope.books =[
        	{title:"《C语言从入门到放弃》",author:"张三"},
        	{title:"《ActionScript从入门到放弃》",author:"李四"},
        	{title:"《用AngularJS从入门到放弃》",author:"王五"},
        	{title:"《JavaScript从入门到放弃》",author:"赵六"},
        	{title:"《Jquery从入门到放弃》",author:"田七"}
        ];
        $scope.pageClass="list";
    }
]);

// SongsListCtrl对应 songsList.html模板
bookStoreCtrls.controller('SongsListCtrl' , ['$scope' ,
    function ( $scope ) {
        $scope.songs = [
            {name : '雾里看花' , author : '刘德华'},
            {name : '青花瓷' , author : '周杰伦'},
            {name : '心中的日月' , author : '王力宏'},
            {name : '模特' , author : '李荣浩'}
        ];

        $scope.books =[
                {title:"《语文》",author:"张三"},
                {title:"《数学》",author:"李四"},
                {title:"《外语》",author:"王五"},
                {title:"《综合》",author:"赵六"}
        ]
        $scope.pageClass = 'songsList'
    }
]);

// DoSomethingCtrl对应 doSomething.html模板
bookStoreCtrls.controller('DoSomethingCtrl' , ['$scope' ,
   function( $scope ){
       $scope.grettingFn = function(){
           alert('打个招呼把，哈哈');
       }

       $scope.pageClass = 'doSomething'

   }
]);




/**
 * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
 */