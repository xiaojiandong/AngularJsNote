var expModule=angular.module('expanderModule',[]);
// 父级指令 accordion
expModule.directive('accordion', function() {
	return {
		restrict : 'EA',
		replace : true,
		transclude : true,
	    // ng-transclude 表示内部可嵌套
		template : "<div ng-transclude class='accordion-wrap'></div>",
		controller : function() {
			var expanders = []; // 初始化传入了 下面3个expander的作用域
			// 向外暴露两个方法 gotOpened和addExpander
			this.gotOpened = function(selectedExpander) {
				angular.forEach(expanders, function(expander) {
					if (selectedExpander != expander) {
						expander.showMe = false;	
					}
				});
			};
			// 初始化，通过addExpander方法，将下面3个子expander指令添加到数组expanders中
			this.addExpander = function(expander) {
				expanders.push(expander);
			};
		}
	};
});

// 子级指令 expander
expModule.directive('expander', function() {
	return {
		restrict : 'EA',
		replace : true,
		transclude : true,
		require : '^?accordion', // 依赖父级的指令
		scope : {
			// html中，控制器的 expander-title属性
			title : '=expanderTitle'
		},
		template : '<div>'
				  + '<div class="title" ng-click="toggle()">{{title}}</div>'
				  + '<div class="body" ng-show="showMe" ng-transclude></div>'
				  + '</div>',
		// link方法是expander指令私有的
		link : function(scope, element, attrs, accordionController) {
			scope.showMe = false;
			// 引用父级指令的 addExpander 方法
			accordionController.addExpander(scope);
			scope.toggle = function toggle() {
				scope.showMe = !scope.showMe;
                // 将选中的 expander作为scope，传入gotOpened中
			    accordionController.gotOpened(scope);
				// console.log( accordionController.gotOpened(scope) );
			};
		}
	};
});


expModule.controller("SomeController",function($scope) {
	$scope.expanders = [{
		title : '1. 语文课',
		text : '点击打开语文课，点击关闭语文课.'
	}, {
		title : '2. 数学课',
		text : '数学课哈哈哈'
	}, {
		title : '3. Test',
		text : '测试测试测试测试测试测试测试测试测试测试测试'
	}];
});
