/*index.js*/

/*banner*/
(function(){
	bannerauto('.swiper-container1','.swiper-pagination1');
	bannerauto('.swiper-containerLm1','.swiper-paginationLm1');
	bannerauto('.swiper-containerLm2','.swiper-paginationLm2');
	
	function bannerauto (Banner,Tab){
		var mySwiper = new Swiper(Banner, {
		autoplay: 5000,//可选选项，自动滑动
		autoplayDisableOnInteraction : false,//手指滑动是否停止自动切换
		pagination : Tab,//分页器
		loop : true,//无缝循环播放
		});
	}
})();
	
/*通知*/
(function(){
	var mySwiper = new Swiper('.swiper-container2', {
		autoplay: 5000,//可选选项，自动滑动
		direction : 'vertical',//垂直方向滑动
		speed:800,//动画过程的时间
		autoplayDisableOnInteraction : false,//手指滑动是否停止自动切换
		loop : true,//无缝循环播放
	});
})();
	
/*抢购*/
(function(){
	var mySwiper = new Swiper('.swiper-container3', {
		resistanceRatio : 0.5,
        slidesPerView : 3.3,
        spaceBetween : 10,
        resistance : true, //继续拖动Swiper会离开边界，释放后弹回。
        preloadImages:true,
        updateOnImagesReady : true,
	});
})();

/*弹窗消失*/
(function(){
	var times;
	times = setTimeout(function(){
		$('#full').fadeOut();
	},3000);
	
	$('#img').click(function(){
		$('#full').fadeOut();
	});
})();

/*返回顶部*/
(function(){
		var t;
	$(window).scroll(function(){
		t = $(window).scrollTop();
		if(t>800){
			$('#onTop').fadeIn();
		}else{
			$('#onTop').fadeOut();
		}
	});
	$('#onTop').click(function(){
		$(window).scrollTop(0);
	});
})();

 // 倒计时
(function(){
	
})()
