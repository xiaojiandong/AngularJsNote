var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
    	restrict:"AE",
    	transclude:true,
    	template:"<div>这是hello自定义元素的内容TOP<div ng-transclude></div>这是hello自定义元素的内容BOTTOM</div>"
    } 
});