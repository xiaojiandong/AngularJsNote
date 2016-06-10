define(['jquery'],function(jquery){
    
    return SUBJ = {
        geturlstr:function(name){
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
            var r = window.location.search.substr(1).match(reg);
            if (r!=null) return decodeURI((r[2])); return null;
        },
        angularInit:function(){
            angular.element(document).ready(function () {
                angular.bootstrap(document, ['mlm']);
                $('body').addClass('ng-app');
            });
        },
        viewPortResize:function(){
            var jsVer=29;
            var useScaledViewportMeta=function(){
                var e=parseInt(window.screen.width),t=e/750;$('head').append('<meta name="viewport" content="width=750, user-scalable=no, target-densitydpi=device-dpi,minimum-scale='+t+",maximum-scale="+t+'">');
            };
            var ua=navigator.userAgent;
            if(/Android (\d+\.\d+)/.test(ua)){
                var version=parseFloat(RegExp.$1);version>2.3?useScaledViewportMeta():$('head').append('<meta name="viewport" content="width=750, target-densitydpi=device-dpi">')
            }else{
                useScaledViewportMeta();
            }
        }
    }

});