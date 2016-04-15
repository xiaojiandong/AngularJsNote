var myModule = angular.module("MyModule", []);
myModule.directive("animal", function() {
    return {
        scope: {}, // ?
        restrict: 'AE',
        // 公共被外部调用的方法publick，写在controller里
        controller: function($scope) { // 指令内部的controller
            $scope.abilities = [];
            this.addRun = function() {
                $scope.abilities.push(" 跑的快 ");
            };
            this.addEat = function() {
                $scope.abilities.push(" 吃的多 ");
            };
            this.addSleep = function() {
                $scope.abilities.push(" 睡的饱 ");
            };
        },
        // 指令自有的方法写在link中
        link: function(scope, element, attrs) {
            element.addClass('btn btn-primary');
//            element.bind("mouseenter", function() {
//                console.log(scope.abilities);
//            });
            element.on("click", function() {
                alert(scope.abilities);
            });

        }
    }
});
myModule.directive("run", function() {
    return {
        require: '^animal', // 注入 animal这个指令
        // link方法的参数：作用域，元素，属性，一级父控制器
        link: function(scope, element, attrs, animalCtrl) {
            animalCtrl.addRun();
        }
    }
});
myModule.directive("eat", function() {
    return {
        require: '^animal',
        link: function(scope, element, attrs, animalCtrl) {
            animalCtrl.addEat();
        }
    }
});
myModule.directive("sleep", function() {
    return {
        require: '^animal',
        link: function(scope, element, attrs, animalCtrl) {
            animalCtrl.addSleep();
        }
    }
});