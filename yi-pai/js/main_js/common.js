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
                //$('html').addClass('ng-app');
                $('body').addClass('ng-app');
            });
            //mlm.downloadMarkInit();
            //mlm.gotopInit();
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
        },
        preventEvent:function(e){
            e.preventDefault();
        },
        gotopInit:function(){
            if(!mlm.geturlstr('is_app')){
                $('body').append('<div class="gotop"></div>');
                $(window).scroll(function(){
                    if($(window).scrollTop()>500){$('.gotop').show();}else{$('.gotop').hide();}
                });
                $(document).on('click touchend','.gotop',function(e){
                    $('body,html').animate({
                        'scrollTop':0
                    },300);
                    e.preventDefault();
                });
            }
        },
        getFont:function(){
            var oHtml=document.documentElement;
            function getFont(){
                var screenWidth=oHtml.clientWidth;
                if(screenWidth<=320){
                    oHtml.style.fontSize='17.066px';
                }else if(screenWidth>=640){
                    oHtml.style.fontSize='34.133px';
                }else{
                    oHtml.style.fontSize=screenWidth/(750/40)+'px';
                }
            }
            getFont();
            window.onresize=function(){
                getFont();
            }
        },
        isLogin:function(result){
            if(result.error==0 || !result.error){
                return true;
            }else if(result.error=='999'){
                mlm.loadMark({text:'请先登录',time:1100,callback:function(){window.location.href = '/member/login.html?back='+window.location.href;}});
                return false;
            }else{
                mlm.loadMark({text:result.message,time:1100});
                return false;
            }
        },
        testVal:function(val){
            //验证字符串是否是字母和数字的结合
            var check = /[a-zA-Z]+(?=[0-9]+)|[0-9]+(?=[a-zA-Z]+)/g ;
            if(check.test(val)){return true;}else{return false;}
        },
        dateformat:function(time,format){
            var time = time.replace('-','/');
            if (!time) return;
            if (!format) format = "yyyy-MM-dd";   
            switch(typeof time) {
                case "string":
                    time = new Date(time.replace(/-/, "/"));   
                    break;   
                case "number":   
                    time = new Date(time);   
                    break;   
            }
            if (!time instanceof Date) return;   
            var dict = {   
                "yyyy": time.getFullYear(),   
                "M": time.getMonth() + 1,   
                "d": time.getDate(),   
                "H": time.getHours(),   
                "m": time.getMinutes(),   
                "s": time.getSeconds(),
                "MM": ("" + (time.getMonth() + 101)).substr(1),   
                "dd": ("" + (time.getDate() + 100)).substr(1),   
                "HH": ("" + (time.getHours() + 100)).substr(1),   
                "mm": ("" + (time.getMinutes() + 100)).substr(1),   
                "ss": ("" + (time.getSeconds() + 100)).substr(1)   
            };
            return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function() {   
                return dict[arguments[0]];
            });
        },
        countdown:function(endtime,obj){
            var end_time = new Date(endtime.replace('-','/')).getTime(),
                sys_second = (end_time-new Date().getTime())/1000;
            var timer = setInterval(function(){
                if (sys_second > 1) {
                    sys_second -= 1;
                    var day = Math.floor((sys_second / 3600) / 24);
                    var hour = Math.floor((sys_second / 3600) % 24);
                    var minute = Math.floor((sys_second / 60) % 60);
                    var second = Math.floor(sys_second % 60);
                    $(obj).html(day+' 天 '+(hour<10?"0"+hour:hour)+' 时 '+(minute<10?"0"+minute:minute)+' 分 '+(second<10?"0"+second:second)+' 秒');
                } else {
                    clearInterval(timer);
                    $(obj).html('活动已结束');
                }
            }, 1000);
        },
        isWeixin:function(){
            var ua = navigator.userAgent.toLowerCase();
            if(ua.match(/MicroMessenger/i)=="micromessenger") {
               $('.wxpay').show();
               return true;
            }else{
               $('.alipay').show();
               return false;
            }
        },
        layer:function(options){

            var settings = {
                title    : options.title    || '',
                f_title  : options.f_title  || '',
                desc     : options.desc     || '',
                gray     : options.gray     || '',
                btn_text : options.btn_text || '知道了'
            }

            var title_html = '', f_title = '', gray_html = '', desc_html = '';

            if(settings.title!=''){
                title_html = '<h6>'+settings.title+'</h6>' ;
            }
            if(settings.f_title!=''){
                f_title = '<p class="f_title">'+settings.f_title+'</p>' ;
            }
            if(settings.desc!=''){
                desc_html = '<p class="desc">'+settings.desc+'</p>' ;
            }
            if(settings.gray!=''){
                gray_html = '<p class="gray">'+settings.gray+'</p>' ;
            }

            $('body').append('<div class="layer_mark"><div class="layer_cont"><div class="text">'+title_html+desc_html+f_title+gray_html+'</div><div class="btn_wrap"><a href="javascript:;" class="btn_sure">'+settings.btn_text+'</a></div></div></div>');

            $('.layer_mark .layer_cont').css('margin-top',-($('.layer_mark .layer_cont').height()/2));

            $(document).on('click','.layer_mark .btn_sure',function(){
                mlm.closeLayer();
            });

            document.body.addEventListener('touchmove', mlm.preventEvent, false);
        },
        closeLayer:function(){
            $('.layer_mark').remove();
            document.body.removeEventListener('touchmove', mlm.preventEvent, false);

        }
    }

});