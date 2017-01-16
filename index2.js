//小导航栏
(function  () {
	var isblack=true;
	$('.smallMenu').click(function  () {
		if (isblack) {
			$('.navSlide').animate({top:0},300);
			isblack=false;
		} else{
			$('.navSlide').animate({top:'-400px'},300);
			isblack=true;
		}
		$('.smallNav').toggleClass('smallNavAdd');
		$('.smallMenu').toggleClass('smallMenuAdd');
		$('.smallLogin').toggleClass('smallLoginAdd');
	})
})()





//滚动
;(function ($,window,document,undefined) {
	$('.leftSlide').click(function () {
		$('.picRoll li').eq(0).animate({"margin-left":'-285px'},400,function  () {
			$('.picRoll li').eq(0).remove().appendTo($('.picRoll ul'));
			$('.picRoll li').eq(7).css({"margin-left":''});
		})
	})
	$('.rightSlide').click(function () {
		$('.picRoll li').eq(7).remove().prependTo($('.picRoll ul')).css({"margin-left":"-285px"});
		$('.picRoll li').eq(0).animate({"margin-left":''},400);
	})
})(jQuery,window,document)
//返回页面顶部按钮
var gotop=$('#goTop');
gotop.click(function () {
	$('html,body').animate({scrollTop:0},300);
	return false;
});
window.onresize=function  () {
	if ($(window).width()>775) {
		gotop.fadeIn(200);
	}else{
		gotop.fadeOut(200);
	}
}
$(window).scroll(function () {
	if ($(window).scrollTop()*3>$(window).height()) {
		if ($(window).width()>775) {
			gotop.fadeIn(200);
		}else{
			gotop.fadeOut(200);
		}
	}else{
		gotop.fadeOut(200);
	}
	return false;
})

