console.log("方法1：require+angular模块依赖"),require(["base","controllers","services"],function(l,e,t){var r=angular.module("AppModule",["ui.router","routerCtrls","routerServices"]);r.config(function(l,e){e.otherwise("/index"),l.state("index",{url:"/index",views:{"":{templateUrl:"tpls/index.html"},"topbar@index":{templateUrl:"tpls/topbar.html",controller:"topbarCtrl"},"home@index":{templateUrl:"tpls/home.html"}}}).state("index.usermng",{url:"/usermng",views:{"home@index":{templateUrl:"tpls/usermng.html",controller:"UserMngCtrl"}}}).state("index.usermng.allstudents",{url:"/allstudents",templateUrl:"tpls/allstudents.html",controller:"allUsersCtrl"}).state("index.usermng.detail",{url:"/detail",templateUrl:"tpls/detail.html",controller:"detailUsersCtrl"}).state("index.usermng.allclass",{url:"/allclass",templateUrl:"tpls/allclass.html",controller:"classCtrl"}).state("index.usermng.classdetail",{url:"/classdetail",templateUrl:"tpls/classdetail.html",controller:"classDetailCtrl"}).state("index.usermng.honorlist",{url:"/honorlist",templateUrl:"tpls/honorlist.html",controller:"honorCtrl"}).state("index.usermng.blacklist",{url:"/blacklist",templateUrl:"tpls/blacklist.html",controller:"blackCtrl"}).state("index.score",{url:"/score",views:{"home@index":{templateUrl:"tpls/score.html",controller:"scoreCtrl"}}}).state("index.edit",{url:"/edit",views:{"home@index":{templateUrl:"tpls/edit.html",controller:"editCtrl"}}}).state("index.signup",{url:"/signup",views:{"home@index":{templateUrl:"tpls/signup.html",controller:"signupCtrl"}}}).state("index.userInfo",{url:"/userInfo",views:{"home@index":{templateUrl:"tpls/userInfo.html"}}})}),angular.bootstrap(document,["AppModule"])});