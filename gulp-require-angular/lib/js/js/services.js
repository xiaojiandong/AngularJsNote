var routerAppSer=angular.module("routerServices",[]);routerAppSer.factory("testService",function(){var e={};return e.a=10,e.b="asas",e}),routerAppSer.factory("AllUserInfosFactory",function(){var e=["张三","李四","王五","赵六"],a={};return a.userInfo=e,a}),routerAppSer.factory("saveUserEditedInfo",function(){var e={};return e.editedInfo="",e}),routerAppSer.factory("allStudentsInfo",function(){var e={};return e.info=[{name:"刘天华",no:"2016210301",className:"高三(1)班",teacher:"吴老师",sex:"男",birthday:"1999.02.03",nativePlace:"上海-徐汇",index:"0",tel:"13952524141",totalScore:"570",classType:"1",avatar:"http://p.3761.com/pic/99751429577705.jpg"},{name:"李八折",no:"2016520303",className:"高三(3)班",teacher:"薛老师",sex:"男",birthday:"1998.11.13",nativePlace:"北京-朝阳",index:"1",tel:"13735241577",totalScore:"522",classType:"3",avatar:"http://www.ld12.com/upimg358/20160130/144305263177296.jpg"},{name:"张四风",no:"2016540304",className:"高三(4)班",teacher:"孔老师",sex:"女",birthday:"1999.05.26",nativePlace:"河北-秦皇岛",index:"2",tel:"13863527888",totalScore:"420",classType:"4",avatar:"http://www.ld12.com/upimg358/allimg/c150729/143Q5R552Y0-234603.jpg"},{name:"王浩浩",no:"2016650301",className:"高三(1)班",teacher:"吴老师",sex:"男",birthday:"2000.01.03",nativePlace:"山东-济宁",index:"3",tel:"12865244412",totalScore:"468",classType:"1",avatar:"http://www.qq1234.org/uploads/allimg/150728/8_150728144315_9.jpg"},{name:"王麻子",no:"2016540302",className:"高三(2)班",teacher:"刘老师",sex:"女",birthday:"1998.12.16",nativePlace:"山西-太原",index:"4",tel:"13854157474",totalScore:"340",classType:"2",avatar:"http://img4q.duitang.com/uploads/item/201501/24/20150124174550_3erfQ.png"},{name:"张明明",no:"2016740302",className:"高三(2)班",teacher:"刘老师",sex:"女",birthday:"1999.05.18",nativePlace:"河南-郑州",index:"5",tel:"13765235454",totalScore:"586",classType:"2",avatar:"http://www.qqleju.com/uploads/allimg/141022/22-032936_250.jpg"},{name:"赵晨晨",no:"2016770303",className:"高三(3)班",teacher:"薛老师",sex:"女",birthday:"1998.10.08",nativePlace:"湖北-荆州",index:"6",tel:"15252401745",totalScore:"473",classType:"3",avatar:"http://img1.3lian.com/gif/more/11/201207/d265a2ff997c4e4057681d4d0c14b6dc.jpg"},{name:"张洁洁",no:"2016690301",className:"高三(1)班",teacher:"吴老师",sex:"女",birthday:"1999.03.16",nativePlace:"福建-福州",index:"7",tel:"13565254881",totalScore:"361",classType:"1",avatar:"http://www.ld12.com/upimg358/allimg/c150729/143Q5R555PZ-243100.jpg"}],e.classInfo=[{name:"高三(1)班",teacher:"吴老师",subject:"文科",classType:"1"},{name:"高三(2)班",teacher:"刘老师",subject:"理科",classType:"2"},{name:"高三(3)班",teacher:"薛老师",subject:"理科",classType:"3"},{name:"高三(4)班",teacher:"孔老师",subject:"理科",classType:"4"}],e}),routerAppSer.factory("SUBJFac",function(){var e={};return e.getValueFromUrl=function(e){var a=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),t=window.location.search.substr(1).match(a);return null!=t?decodeURI(t[2]):null},e.hasUnitStr=function(e,a){return e.indexOf(a)>0},e.getBeforeOrAfterStr=function(e,a,t){var r=e.split(a)[0],c=e.split(a)[1];return 0==t?r:c},e.selectTopBarActive=function(e){setTimeout(function(){$(".common-topbar").removeClass("activeBar"),$(".topbar-"+e).addClass("activeBar")},30)},e.topBarInit=function(){var a=window.location.href;e.hasUnitStr(a,"usermng")?e.selectTopBarActive(1):e.hasUnitStr(a,"score")||e.hasUnitStr(a,"edit")?e.selectTopBarActive(2):e.hasUnitStr(a,"signup")?e.selectTopBarActive(3):e.hasUnitStr(a,"userInfo")&&e.selectTopBarActive(4)},e.countClassTeacherAndStudentsNum=function(e){var a=0,t=0,r=0,c=0;angular.forEach(e.info,function(e,n,s){"高三(1)班"==e.className?a+=1:"高三(2)班"==e.className?t+=1:"高三(3)班"==e.className?r+=1:"高三(4)班"==e.className&&(c+=1)});var n=[];return n[0]=a,n[1]=t,n[2]=r,n[3]=c,n},e});