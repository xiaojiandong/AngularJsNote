/**
 * Created by Administrator on 2016/6/6.
 */

require(['ng','common'], function(ng,common){
    var filterss = angular.module('lagouFilters',[]);
    filterss.filter('testFilter11' , function(){
        return function(num){
            if(num > 25){
                return 2666;
            }else{
                return 2444;
            }
        };
    });

    // 一拍，过滤国家
    filterss.filter('dealNationFilter',function(){
       return function(items){ // 根据成立时间做判断

           angular.forEach(items,function(item, i){
               item.name = i+'、'+ item + '===';
               console.log(item);
               items[i] = item;
           });
           return items;
       }
    });

    filterss.filter('filter3', function(){
        return function(items){
            /*
            angular.forEach(items,function(item, i){
                item = i+'、'+ item + '===';
                console.log(item);
                items[i] = item;
            });
            return items;
            */
            //console.log(items);

            //angular.forEach(items,function(item, i){
            //    //item = i+'、'+ item + '===';
            //    //item = item[i] + 'asasas';
            //    item.name = item.name + '4';
            //    console.log(item);
            //    //items[i] = item;
            //});
            //return items;
            //console.log(typeof items);
            return items.age > 24;

        }
    });


});
