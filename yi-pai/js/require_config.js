require.config({
    'baseUrl':'js/',
    'paths':{
        'jquery':'main_js/jquery-1.11.1.min',
        'ng':'main_js/angular.min',
        //'ngbase':'base',
        'ngUiRouter':'main_js/angular-ui-router',
        //'loadingbar':'angular/loading-bar.min',
        //'route':'angular/angular-route',
        //'echo':'echo.min',
        //'slider':'TouchSlide.1.1',
        'common':'main_js/common',
        //'swiper':'swiper/swiper.min',
        //'share':'share/shareCtrl',
        //'timeago':'timeago',
        //'ymconfig':'ymconfig',
        'wxjs':'https://res.wx.qq.com/open/js/jweixin-1.0.0'
    },
    'shim': {
        'wxjs': {'exports': 'wxjs'}
    }
});

//require(['jquery','ng','ngbase','loadingbar','common','ymconfig','wxjs'],
//    function(jquery,ng,ngbase,loadingbar,common,ymconfig,wxjs){
//});

require(['jquery','ng','ngUiRouter','common','wxjs'],
    function(jquery,ng,ngUiRouter,common,wxjs){
      //console.log('jquery');
});