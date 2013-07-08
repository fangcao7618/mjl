function paowu(contentID,ID,startX,startY,endX,endY,timeDE,appendID_C){
         var index = 0;
         //起点和终点坐标
         var startX = startX;
         var startY = startY;
         var endX = endX;
         var endY = endY;
		 //倍数 默认10倍,移动快慢调此参数
		 var vMultiple=30;
		 var vDistance=Math.sqrt(Math.pow(endX-startX,2)+Math.pow(endY-startY,2));
		 var vX=(startX-endX)/vMultiple;//被平均后的X轴移动距离
		 var vY=(endY-startY)/vMultiple;//被平均后的Y轴移动距离
		 var vNewX=0;//新的X值
		 var vNewY=0;//新的Y值
		 var i=1;//计数器
		 //定时器
         var inter;
         var display = function() {
             //设置内容
             //$("#"+ID).html("up" + index+ID);
			 if(i<=vMultiple){//判断计数器是否在倍数范围内
				vNewX=startX-vX*i;//这个很难解释了，反正就是这么一回事。
				vNewY=startY+vY*i;	
				 $("#"+ID).css({
					 top:vNewY,
					 left:vNewX 
				 });
				 i++;
				 //console.log(vNewY+"-"+vNewX);
				 //console.log(Math.sqrt(Math.pow(2-10,2)+Math.pow(10-2,2)));
			 }
			 //到终点时停止定时任务,按比例增减，起点最后必定等于终点，所以作为判定条件停止
             if (vNewY == endY&&vNewX==endX) {
                 window.clearInterval(inter);
             }

         }
         $(document).ready(function () {
             //设置初始内容及坐标
             $("#"+appendID_C).append(contentID);
             $("#"+ID).css({
                 position: 'absolute',
                 left: startX,
                 top: startY
             });
			inter = setInterval(function(){
				display();	 
			},timeDE);  
         });
	 }

$(document).ready(function(){
	//$("#sparks").css("display","none");
    jQuery.fn.anim_progressbar = function (aOptions) {
        var iCms = 1000;
        var iMms = 60 * iCms;
        var iHms = 3600 * iCms;
        var iDms = 24 * 3600 * iCms;

        var aDefOpts = {
            start: new Date(), 
            finish: new Date().setTime(new Date().getTime() + 60 * iCms), 
            interval: 100
        }
        var aOpts = jQuery.extend(aDefOpts, aOptions);
        var vPb = this;

        return this.each(
            function() {
                var iDuration = aOpts.finish - aOpts.start;

                $(vPb).children('.pbar').progressbar();
				
                var vInterval = setInterval(
                    function(){
                        var iLeftMs = aOpts.finish - new Date(); 
                        var iElapsedMs = new Date() - aOpts.start, 
                            iDays = parseInt(iLeftMs / iDms), 
                            iHours = parseInt((iLeftMs - (iDays * iDms)) / iHms), 
                            iMin = parseInt((iLeftMs - (iDays * iDms) - (iHours * iHms)) / iMms), 
                            iSec = parseInt((iLeftMs - (iDays * iDms) - (iMin * iMms) - (iHours * iHms)) / iCms), 
                            iPerc = (iElapsedMs > 0) ? iElapsedMs / iDuration * 100 : 0; 
						var _ML=0;
						if(iPerc>3){_ML=0;}
						if(iPerc>97){_ML=0;}
						
						$('#loading_ma').html(iPerc.toFixed(0)+'%');
                        $(vPb).children('.percent').css('width', iPerc+'%').html('<b style="position:absolute; width: 200px; height: 12px; top: 3px; margin-right:'+_ML+'px; text-align:center; right:0px; background-image:url(images/loading_move.png); background-position:0px 0px;"></b>');
						//console.log($(vPb).children('.percent').css('width'));
                        //$(vPb).children('.elapsed').html(iDays+' days '+iHours+'h:'+iMin+'m:'+iSec+'s</b>');
                        //$(vPb).children('.pbar').children('.ui-progressbar-value').css('width', iPerc+'%');
						$(vPb).children('.pbar').children('.ui-progressbar-value').css('width', iPerc+'%');

                        if (iPerc >= 100) {
                            clearInterval(vInterval);
							$('#loading_ma').html(iPerc.toFixed(0)+'%');
                            $(vPb).children('.percent').css('width', iPerc+'%').html('<b style="position:absolute; width: 200px; height: 12px; top: 3px; margin-right:'+_ML+'px; text-align:center; right:0px; background-image:url(images/loading_move.png); background-position:0px 0px;"></b>');
                            //$(vPb).children('.elapsed').html('Finished');
							$(vPb).hide();
							$("#progressBG").hide();
							$("html").css({"overflow-y":"auto"});
							
							jarallax.setDefault('#baojian',{opacity:1,display:'block'});
							jarallax.setDefault('#poster',{opacity:1,display:'block'});
							
                        }
                    } ,aOpts.interval
                );
            }
        );
    }
var iNow = new Date().setTime(new Date().getTime() + 1 * 1000);
var iEnd = new Date().setTime(new Date().getTime() + 15 * 1000);
    $('#progress1').anim_progressbar({start: iNow, finish: iEnd, interval: 100});
	
	$("#sparks").click(function(){
			$(this).unbind("hover");
			$("#sparks02").unbind("hover");
			$("#chengbao03").css("display","none");
			$(this).css("display","none");
			$("#sparks02").css("display","none");
			$("#jiantou").css("display","none");
			$("#sparks").remove();
			//启用滚动条
			$("html").css("overflow-y","scroll");
			paowu('<div id="ball1"></div>','ball1',290,300,100,150,15,"picList");/*+35-75*/
			 paowu('<div id="ball3"></div>','ball3',290,300,800,200,15,"picList");/*+35-75*/
			 
			 paowu('<div id="ball2"></div>','ball2',290,300,250,200,15,"picList");/*+35-75*/
			 paowu('<div id="ball4"></div>','ball4',290,300,670,300,15,"picList");/*+35-75*/
			 
			 paowu('<div id="ball5"></div>','ball5',290,300,230,400,15,"picList");/*+35-75*/
			 paowu('<div id="ball6"></div>','ball6',290,300,730,530,15,"picList");/*+35-75*/
			 
			 paowu('<div id="ball7"></div>','ball7',290,300,150,550,15,"picList");/*+35-75*/
			 paowu('<div id="ball8"></div>','ball8',290,300,850,400,15,"picList");/*+35-75*/
			 
			 paowu('<div id="ball9"></div>','ball9',290,300,30,380,15,"picList");/*+35-75*/
			 paowu('<div id="ball10"></div>','ball10',290,300,290,250,15,"picList");/*480+35-75  515*/
	});
	
});