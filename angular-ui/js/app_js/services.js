
require(['ng','common'], function(ng,common){
  // 公共的service
  var services = angular.module('lagouServices',[]);
  services.factory('ser1' , function( ) {
    var ser1 = {};
      ser1.name = '张三';
      ser1.age = '20岁';
    return ser1;
  });

  //services.factory('companyMainService' , function(){
      //var companyMainService = {};
      //companyMainService.companyName = '千百度公司';
      //companyMainService.companyCash = '500亿';
      //companyMainService.companyStaff = '3万员工';
      //companyMainService.registerTime = '1998年10月';
      //return companyMainService;
  //});
  // 招聘职位service
  services.factory('companyMainService',function(){
    var jobService = {};
      // 工作类型
      jobService.jobTypes = [
          {'name' : '全部','jobId' : '0'},
          {'name' : '技术','jobId' : '1'},
          {'name' : '设计','jobId' : '2'},
          {'name' : '运营','jobId' : '3'},
          {'name' : '市场与销售','jobId' : '4'}
      ];
      // 工作信息
      jobService.jobInfos = [
          {'name' : '市场销售经理','location':'深圳','salary':'12k-18k','experience':'经验3-5年/本科/全职','time':'2016-05-27发布','type':'4'},
          {'name' : '地区市场专员','location':'广州','salary':'5k-8k','experience':'经验1-3年/本科/全职','time':'2016-06-02发布','type':'4'},
          {'name' : '市场策划','location':'深圳','salary':'6k-10k','experience':'经验1-3年/本科/全职','time':'2016-05-29发布','type':'4'},
          {'name' : 'MySQL','location':'深圳','salary':'15k-22k','experience':'经验1-3年/本科/全职','time':'2016-05-30发布','type':'1'},
          {'name' : 'PHP工程师','location':'深圳','salary':'11k-16k','experience':'经验1-3年/本科/全职','time':'2016-06-03发布','type':'1'},
          {'name' : '.NET工程师','location':'深圳','salary':'9k-15k','experience':'经验1-3年/本科/全职','time':'2016-05-28发布','type':'1'},
          {'name' : 'IOS工程师','location':'广州','salary':'12k-18k','experience':'经验1-3年/本科/全职','time':'2016-05-30发布','type':'1'},
          {'name' : '平面设计师','location':'深圳','salary':'5k-8k','experience':'经验1-3年/本科/全职','time':'2016-05-31发布','type':'2'},
          {'name' : '插画设计师','location':'北京','salary':'6k-9k','experience':'经验1-3年/本科/全职','time':'2016-06-05发布','type':'2'},
          {'name' : 'UI设计师','location':'广州','salary':'6k-9k','experience':'经验1-3年/本科/全职','time':'2016-06-01发布','type':'2'},
          {'name' : '运营专员','location':'北京','salary':'5k-9k','experience':'经验1-3年/本科/全职','time':'2016-05-25发布','type':'3'},
          {'name' : '新媒体运营','location':'北京','salary':'7k-10k','experience':'经验1-3年/本科/全职','time':'2016-05-27发布','type':'3'}
      ];
      jobService.companyArr={
          '0' : {
              'companyImg' : 'http://my.csdn.net/uploads/201205/09/1336543861_6929.jpg',
              'companyName' : '千百度',
              'jobType' : {
                  '0' : {'name' : '全部','jobId' : '0'},
                  '1' : {'name' : '技术','jobId' : '1'},
                  '2' : {'name' : '设计','jobId' : '2'},
                  '3' : {'name' : '运营','jobId' : '3'},
                  '4' : {'name' : '市场与销售','jobId' : '4'}
              },
              'companyJobs' : [
                  {'name' : '市场销售经理','location':'深圳','salary':'12k-18k','experience':'经验3-5年/本科/全职','time':'2016-05-27发布','type':'4'},
                  {'name' : '地区市场专员','location':'广州','salary':'5k-8k','experience':'经验1-3年/本科/全职','time':'2016-06-02发布','type':'4'},
                  {'name' : '市场策划','location':'深圳','salary':'6k-10k','experience':'经验1-3年/本科/全职','time':'2016-05-29发布','type':'4'},
                  {'name' : 'MySQL','location':'深圳','salary':'15k-22k','experience':'经验1-3年/本科/全职','time':'2016-05-30发布','type':'1'},
                  {'name' : 'PHP工程师','location':'深圳','salary':'11k-16k','experience':'经验1-3年/本科/全职','time':'2016-06-03发布','type':'1'},
                  {'name' : '.NET工程师','location':'深圳','salary':'9k-15k','experience':'经验1-3年/本科/全职','time':'2016-05-28发布','type':'1'},
                  {'name' : 'IOS工程师','location':'广州','salary':'12k-18k','experience':'经验1-3年/本科/全职','time':'2016-05-30发布','type':'1'},
                  {'name' : '平面设计师','location':'深圳','salary':'5k-8k','experience':'经验1-3年/本科/全职','time':'2016-05-31发布','type':'2'},
                  {'name' : '插画设计师','location':'北京','salary':'6k-9k','experience':'经验1-3年/本科/全职','time':'2016-06-05发布','type':'2'},
                  {'name' : 'UI设计师','location':'广州','salary':'6k-9k','experience':'经验1-3年/本科/全职','time':'2016-06-01发布','type':'2'},
                  {'name' : '运营专员','location':'北京','salary':'5k-9k','experience':'经验1-3年/本科/全职','time':'2016-05-25发布','type':'3'},
                  {'name' : '新媒体运营','location':'北京','salary':'7k-10k','experience':'经验1-3年/本科/全职','time':'2016-05-27发布','type':'3'}
              ],
              'registerTime' : '1998年',
              'staff' : '3万',
              'companyProduct' : '公司产品QQ,WechatZ-one',
              'companyIntroduce' : '公司介绍公司的介绍信息',
              'companyDevelop' : '公司发展公司的发展历程',
              'companyCommit' : '面试评价，评价部分为数组,每个岗位的面试评价'
          },
          '1' : {
              'companyImg' : 'http://leiphone.qiniudn.com/uploads/new/article/600_600/201411/546fe0480860b.jpg',
              'companyName' : '阿马逊',
              'jobType' : {
                  '0' : {'name' : '全部','jobId' : '0'},
                  '1' : {'name' : '技术','jobId' : '1'},
                  '2' : {'name' : '设计','jobId' : '2'},
                  '3' : {'name' : '运营','jobId' : '3'},
                  '4' : {'name' : '市场与销售','jobId' : '4'}
              },
              'companyJobs' : [
                  {'name' : '中华区销售经理','location':'北京','salary':'32k-48k','experience':'经验5-8年/本科/全职','time':'2016-05-17发布','type':'4'},
                  {'name' : '华东市场专员','location':'上海','salary':'5k-8k','experience':'经验1-3年/本科/全职','time':'2016-06-12发布','type':'4'},
                  {'name' : '市场策划','location':'深圳','salary':'6k-10k','experience':'经验1-3年/本科/全职','time':'2016-05-29发布','type':'4'},
                  {'name' : 'DB','location':'深圳','salary':'15k-22k','experience':'经验1-3年/本科/全职','time':'2016-05-30发布','type':'1'},
                  {'name' : 'Android工程师','location':'深圳','salary':'11k-16k','experience':'经验1-3年/本科/全职','time':'2016-06-03发布','type':'1'},
                  {'name' : '.NET工程师','location':'深圳','salary':'9k-15k','experience':'经验1-3年/本科/全职','time':'2016-05-28发布','type':'1'},
                  {'name' : 'IOS工程师','location':'广州','salary':'12k-18k','experience':'经验1-3年/本科/全职','time':'2016-05-30发布','type':'1'},
                  {'name' : '平面设计师','location':'深圳','salary':'5k-8k','experience':'经验1-3年/本科/全职','time':'2016-05-31发布','type':'2'},
                  {'name' : '插画设计师','location':'北京','salary':'6k-9k','experience':'经验1-3年/本科/全职','time':'2016-06-05发布','type':'2'},
                  {'name' : 'UI设计师','location':'广州','salary':'6k-9k','experience':'经验1-3年/本科/全职','time':'2016-06-01发布','type':'2'},
                  {'name' : '某宝运营专员','location':'北京','salary':'5k-9k','experience':'经验1-3年/本科/全职','time':'2016-06-05发布','type':'3'},
                  {'name' : '某东运营专员','location':'杭州','salary':'4k-7k','experience':'经验1-3年/本科/全职','time':'2016-05-21发布','type':'3'},
                  {'name' : '新媒体运营','location':'北京','salary':'7k-10k','experience':'经验1-3年/本科/全职','time':'2016-05-27发布','type':'3'}
              ],
              'registerTime' : '1996年',
              'staff' : '9万',
              'companyProduct' : '阿马逊电子书，纸质书，在线阅读等等',
              'companyIntroduce' : '公司介绍成立于1996年，第一家电商公司',
              'companyDevelop' : '公司发展，创始人贝索斯丝，无人机送货',
              'companyCommit' : '面试评价，各种岗位的面试评价'
          },
          '2' : {
              'companyImg' : 'http://image2.sina.com.cn/IT/cr/2006/0308/2668949314.jpg',
              'companyName' : '索尼娅',
              'jobType' : {
                  '0' : {'name' : '全部','jobId' : '0'},
                  '1' : {'name' : '技术','jobId' : '1'},
                  '2' : {'name' : '设计','jobId' : '2'},
                  '3' : {'name' : '运营','jobId' : '3'},
                  '4' : {'name' : '市场与销售','jobId' : '4'}
              },
              'companyJobs' : [
                  {'name' : '北美区销售经理','location':'北京','salary':'32k-48k','experience':'经验5-8年/本科/全职','time':'2016-05-17发布','type':'4'},
                  {'name' : '华东市场专员','location':'上海','salary':'5k-8k','experience':'经验1-3年/本科/全职','time':'2016-06-12发布','type':'4'},
                  {'name' : '市场策划','location':'深圳','salary':'6k-10k','experience':'经验1-3年/本科/全职','time':'2016-05-29发布','type':'4'},
                  {'name' : '晶体管工程师','location':'大阪','salary':'15k-22k','experience':'经验1-3年/本科/全职','time':'2016-05-30发布','type':'1'},
                  {'name' : '电路工程师','location':'神户','salary':'11k-16k','experience':'经验1-3年/本科/全职','time':'2016-06-03发布','type':'1'},
                  {'name' : '电路安装工程师','location':'深圳','salary':'9k-15k','experience':'经验1-3年/本科/全职','time':'2016-05-28发布','type':'1'},
                  {'name' : '数据挖掘工程师','location':'东京','salary':'12k-18k','experience':'经验1-3年/本科/全职','time':'2016-05-30发布','type':'1'},
                  {'name' : 'UI设计师','location':'长崎','salary':'6k-9k','experience':'经验1-3年/本科/全职','time':'2016-06-01发布','type':'2'},
                  {'name' : 'ebaye运营专员','location':'北京','salary':'5k-9k','experience':'经验1-3年/本科/全职','time':'2016-06-05发布','type':'3'},
                  {'name' : '帝东运营专员','location':'杭州','salary':'4k-7k','experience':'经验1-3年/本科/全职','time':'2016-05-21发布','type':'3'},
                  {'name' : '旧媒体运营','location':'名古屋','salary':'7k-10k','experience':'经验1-3年/本科/全职','time':'2016-05-27发布','type':'3'}
              ],
              'registerTime' : '1972年',
              'staff' : '10万',
              'companyProduct' : '索尼娅的电子产品，数码产品,PSP游戏机',
              'companyIntroduce' : '公司介绍成立于1972年，日本多元化的公司',
              'companyDevelop' : '公司发展，涉足音乐，电影，电子产品等多个市场',
              'companyCommit' : '面试评价，去索尼娅的面试评价'
          },
          '3' : {
              'companyImg' : 'http://www.antewer.com/web_manage/manage/Upload/20118278447332.jpg',
              'companyName' : '雅虎豹',
              'jobType' : {
                  '0' : {'name' : '全部','jobId' : '0'},
                  '1' : {'name' : '技术','jobId' : '1'},
                  '2' : {'name' : '设计','jobId' : '2'},
                  '3' : {'name' : '运营','jobId' : '3'},
                  '4' : {'name' : '市场与销售','jobId' : '4'}
              },
              'companyJobs' : [
                  {'name' : '北美市场专员','location':'温哥华','salary':'5k-8k','experience':'经验1-3年/本科/全职','time':'2016-06-12发布','type':'4'},
                  {'name' : '北美市场策划','location':'蒙特利尔','salary':'6k-10k','experience':'经验1-3年/本科/全职','time':'2016-05-29发布','type':'4'},
                  {'name' : 'SEO工程师','location':'硅谷','salary':'15k-22k','experience':'经验1-3年/本科/全职','time':'2016-05-30发布','type':'1'},
                  {'name' : '北美区销售经理','location':'纽约','salary':'32k-48k','experience':'经验5-8年/本科/全职','time':'2016-05-17发布','type':'4'},
                  {'name' : 'IOS工程师','location':'华盛顿','salary':'11k-16k','experience':'经验1-3年/本科/全职','time':'2016-06-03发布','type':'1'},
                  {'name' : '电路安装工程师','location':'深圳','salary':'9k-15k','experience':'经验1-3年/本科/全职','time':'2016-05-28发布','type':'1'},
                  {'name' : '高级PHP工程师','location':'东京','salary':'12k-18k','experience':'经验1-3年/本科/全职','time':'2016-05-30发布','type':'1'},
                  {'name' : 'UI设计师','location':'旧金山','salary':'6k-9k','experience':'经验1-3年/本科/全职','time':'2016-06-01发布','type':'2'},
                  {'name' : 'ebaye运营专员','location':'北京','salary':'5k-9k','experience':'经验1-3年/本科/全职','time':'2016-06-05发布','type':'3'},
                  {'name' : 'USA运营专员','location':'拉斯维加斯','salary':'4k-7k','experience':'经验1-3年/本科/全职','time':'2016-05-21发布','type':'3'},
                  {'name' : '旧媒体运营','location':'纽约','salary':'7k-10k','experience':'经验1-3年/本科/全职','time':'2016-05-27发布','type':'3'}
              ],
              'registerTime' : '1995年',
              'staff' : '10万',
              'companyProduct' : '雅虎豹搜索',
              'companyIntroduce' : '公司介绍成立于1995年，美国一家做搜索业务公司',
              'companyDevelop' : '公司发展，公司发展很快，全球市场广阔',
              'companyCommit' : '面试评价，去索尼娅的面试评价'
          }
       };
    return jobService;
  });

  // 一拍公司
  services.factory('dealCompanyService' , function(){
    var dealCompany = {};
      dealCompany.allCompany = [
          {'name' : '千度','time':'1998','staff':'3', 'nation':'china','id':'0',
              'img' : 'http://my.csdn.net/uploads/201205/09/1336543861_6929.jpg'},
          {'name' : '阿马逊','time':'1996','staff':'9','nation':'usa','id':'1',
              'img' : 'http://leiphone.qiniudn.com/uploads/new/article/600_600/201411/546fe0480860b.jpg'},
          {'name' : '索尼娅','time':'1972','staff':'10','nation':'japan','id':'2',
              'img' : 'http://image2.sina.com.cn/IT/cr/2006/0308/2668949314.jpg'},
          {'name' : '雅虎豹','time':'1995','staff':'2.5','nation':'usa','id':'3',
              'img' : 'http://www.antewer.com/web_manage/manage/Upload/20118278447332.jpg'},
          {'name' : '诺基亚米','time':'1980','staff':'11','nation':'europe','id':'4',
              'img' : 'http://image1.hhczy.com/web/2014/7/12/5119281215370305.700x700.jpg'},
          {'name' : '大众人','time':'1908','staff':'18','nation':'europe','id':'5',
              'img' : 'http://img.vipcn.com/img2015/12/12/2015121257401893.png'},
          {'name' : '富士康福','time':'1977','staff':'120','nation':'taiwan','id':'6',
              'img' : 'http://i.ce.cn/ce/culture/gd/201408/21/W020140821347672730557.jpg'},
          {'name' : '苹果梨','time':'1975','staff':'10','nation':'usa','id':'7',
              'img' : 'http://pic.wenwo.com/fimg/7203597805_405.jpg'},
          {'name' : '腾讯雷','time':'1998','staff':'12','nation':'china','id':'8',
              'img' : 'http://www.cnautonews.com/qchl/kj/201509/W020150921463431071255.jpg'},
          {'name' : '塔塔','time':'1981','staff':'22','nation':'indian','id':'9',
              'img' : 'http://img.youxiguancha.com/game/2014/09/22/1411371973_15.jpg'}
      ];
      return dealCompany;
  });

});
