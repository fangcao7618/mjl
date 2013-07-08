function include(src) {
	HTMLCode = '<script language="javascript" src="' + src + '"></script>';
	document.write(HTMLCode);
}
include("js/jquery-1.7.2.js");
include("js/jquery-ui-1.8.16.custom.min.js");
include("js/jarallax-0.2.3b.js");
include("js/jquery.roundabout2.4.2.js");
include("js/jquery.easing.1.3.js");
include("js/jquery.event.drag-2.2/jquery.event.drag-2.2.js");
include("js/jquery.event.drop-2.2/jquery.event.drop-2.2.js");
include("js/main.js");
include("js/script.js");	
$(document).ready(function() { 
//预加载图片
	$("body").queryLoader2({
				barColor: "#111111",
				backgroundColor: "#202020",
				percentage: true,
				barHeight: 30,
				completeAnimation: "grow"
			});

//window.location.reload();
$('#featured-area ul').roundabout({
easing: 'easeOutInCirc',//动太效果
duration: 600,//速度时间
minOpacity: 1.0, // 后面图片的 透明度
minScale: 0.1, // 后面图片变大
clickToFocus: true, //不让图片可以击回旋 false
focusBearing: 0.0,//角度

tilt: 0,  //悬空位置
//autoplay:true,//自动播放
//autoplayInitialDelay:0,
//autoplayDuration:3000,//每隔的时间
//autoplayPauseOnHover:true,//移上去是否自动播放
enableDrag:true,//是否可以拖拽
dropDuration:600,//拖拽的速度
dropEasing:'swing',//拖拽的动画
dragAxis:'x'//限制
});
});
include("js/sly.js");
$(document).ready(function() {
var $frame = $('#effects');
		var $wrap  = $frame.parent();

		$frame.sly({
			horizontal: 1,
			itemNav: 'forceCentered',
			smart: 1,
			activateMiddle: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			speed: 300,
			elasticBounds: 1,
			easing: 'swing',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			prev: $('.prev'),
			next: $('.next')
		});
});