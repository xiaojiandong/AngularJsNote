var myModule=angular.module("MyModule",[]);

myModule.filter('filter1',function(){
    return function(item){ // 对模板中的数据进行处理
        return item + ' o(∩_∩)o';
    };
});  

myModule.filter('filter2' , function(){
	return function( name ){
		return "~@ " + name + " @~"; 
	};
});
