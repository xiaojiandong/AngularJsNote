require.config({
    'baseUrl':'js/',
    'paths':{
        'jquery':'main_js/jquery-1.11.1.min',
        'ng':'main_js/angular.min',
        'ngUiRouter':'main_js/angular-ui-router',
        'common':'main_js/common_subj',
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