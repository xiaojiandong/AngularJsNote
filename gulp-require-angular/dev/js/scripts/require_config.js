
require.config({
   'baseUrl' : '../js/scripts/',
   //'baseUrl' : 'dev/js/scripts/',
   'paths' : {
     'jquery' : 'http://cdn.bootcss.com/jquery/2.1.3/jquery.min',
     'jquery_confirm' : 'http://cdn.bootcss.com/jquery-confirm/2.0.0/jquery-confirm.min',
     'bootstrap' : 'http://cdn.bootcss.com/bootstrap/3.3.0/js/bootstrap.min',
     'angular' : 'common/angular-1.3.0',
     'router' : 'common/angular-ui-router',
     'base' : 'common/base',
     'swiper' : 'common/swiper.3.3.0.min',
     'controllers' : 'common/controllers',
     'services' : 'common/services'
   },
   'shim' : {
      'jquery' : {
          'exports' : 'jquery'
      },
      'jquery_confirm' : {
          'deps' : ['jquery'],
          'exports' : 'jquery_confirm'
      },
      'bootstrap' : {
          'deps' : ['jquery'],
          'exports' : 'bootstrap'
      },
      'swiper' : { // 这个插件模块根据业务需要而引入具体页面
        'deps' : ['jquery'],
        'exports' : 'swiper'
      },
      'router' : { // router依赖angular
          'deps' : ['angular'],
          'exports' : 'router'
      }
   },
    urlArgs: "bust=" + (new Date()).getTime() // 防止读取缓存，调试用
});

require(
    [   'jquery',
        'jquery_confirm',
        'bootstrap',
        'angular',
        'router',
        'base',
        'controllers',
        'services'
    ],
    function(
        jquery,
        jquery_confirm,
        bootstrap,
        angular,
        router,
        base,
        controllers,
        services){
});