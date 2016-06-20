define(['jquery','wxsdk'],function(jquery,wxsdk){

	$.ajax({
        type: 'GET',
        url: 'https://www1.meilimei.com/api/wx/js_api_parameters?url=' + encodeURIComponent(location.href.split('#')[0]),
        success: function (result) {
            wxshare.init(result.data.appid, result.data.timestamp, result.data.noncestr, result.data.sign);
        }
    });
	
	return wxshare = {
		init:function(appId,timestamp,nonceStr,signature){
			wx.config({
	            debug: true, // 开启调试模式
	            appId: appId, 
	            timestamp: timestamp, //生成签名的时间戳
	            nonceStr: nonceStr, //生成签名的随机串
	            signature: signature,//签名
	            jsApiList: [
	                'onMenuShareTimeline',
	                'onMenuShareAppMessage',
	                'onMenuShareQQ',
	                'onMenuShareWeibo'
	            ]
	        });
		},
		config:function(title,desc,imgurl,link){
			wx.ready(function(){
	            wx.onMenuShareTimeline({
	                title: title, // 分享标题
	                link: link, // 分享链接
	                imgUrl: imgUrl, // 分享图标
	                success: function () {
	                    // 用户确认分享后执行的回调函数
	                    alert('分享成功');
	                },
	                cancel: function () {
	                    // 用户取消分享后执行的回调函数
	                    alert('取消分享');
	                }
	            });

	            wx.onMenuShareAppMessage({
	                title: title, // 分享标题
	                desc: title, // 分享描述
	                link: link, // 分享链接
	                imgUrl: imgUrl, // 分享图标
	                type: 'link', // 分享类型,music、video或link，不填默认为link
	                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
	                success: function () {
	                    // 用户确认分享后执行的回调函数
	                    alert('分享成功');
	                },
	                cancel: function () {
	                    // 用户取消分享后执行的回调函数
	                    alert('取消分享');
	                }
	            });

	            wx.onMenuShareQQ({
	                title: title, // 分享标题
	                desc: title, // 分享描述
	                link: link, // 分享链接
	                imgUrl: imgUrl, // 分享图标
	                success: function () {
	                    // 用户确认分享后执行的回调函数
	                    alert('分享成功');
	                },
	                cancel: function () {
	                    // 用户取消分享后执行的回调函数
	                    alert('取消分享');
	                }
	            });

	            wx.onMenuShareWeibo({
	                title: title, // 分享标题
	                desc: title, // 分享描述
	                link: link, // 分享链接
	                imgUrl: imgUrl, // 分享图标
	                success: function () {
	                    // 用户确认分享后执行的回调函数
	                    alert('分享成功');
	                },
	                cancel: function () {
	                    // 用户取消分享后执行的回调函数
	                    alert('取消分享');
	                }
	            });

	            wx.onMenuShareQZone({
	                title: title, // 分享标题
	                desc: title, // 分享描述
	                link: link, // 分享链接
	                imgUrl: imgUrl, // 分享图标
	                success: function () {
	                    // 用户确认分享后执行的回调函数
	                    alert('分享成功');
	                },
	                cancel: function () {
	                    // 用户取消分享后执行的回调函数
	                    alert('取消分享');
	                }
	            });

	        });
		}
	}

});	