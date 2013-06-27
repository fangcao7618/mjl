var jarallax,
    init = function() {
	$(function() {
		var steps = [0, 215, 430];
		var index = 1;
		var interval = setTimeout(function() {
			index++;
			
			if(index == 9) {
				index = 1;
			}
			
			$('#sparks').css('background-image', 'url(images/button/botton-0'+index+'.png)');
			setTimeout(arguments.callee, 200);

		}, 25);
		
	});
	
	
	
		
        jarallax = new Jarallax(new ControllerScroll(true));
        var currentProgress = 0;
        var progressSteps = 1 / 5;
        
		
		jarallax.setDefault('#poster',{opacity:0,display:'none'});
		jarallax.setDefault('#produce_ziti',{opacity:0,display:'none'});
		jarallax.setDefault('#chengbao',{opacity:0,display:'none'});
		jarallax.setDefault('#ziti_one',{opacity:0,display:'none'});
		jarallax.setDefault('#ziti_two',{opacity:0,display:'none'});
		jarallax.setDefault('#ziti_three',{opacity:0,display:'none'});
		jarallax.setDefault('#ziti_four',{opacity:0,display:'none'});
		//jarallax.setDefault('#sparks',{opacity:1,display:'block',top:'2168px'});

		/*jarallax.addAnimation('#poster',[{progress:'0%', opacity:'1',display:'block'},
			{progress:'1%', opacity:'1',display:'block'},
			{progress:'2%', opacity:'1',display:'block'},
			{progress:'3%', opacity:'1',display:'block'}
		]);*/
									   
		jarallax.addAnimation('#produce_ziti',[{progress:'1%', display:'block', opacity:'1',top:'500px',width:'100%'},
												{progress:'2%', display:'block', opacity:'1',top:'560px',width:'100%'},
														 {progress:'3%', display:'block', opacity:'1',top:'620px',width:'100%'},
														 {progress:'4%', display:'block', opacity:'1',top:'680px',width:'100%'},
														 {progress:'5%', display:'block', opacity:'1',top:'740px',width:'100%'},
														 {progress:'6%', display:'block', opacity:'1',top:'800px',width:'100%'},
														 {progress:'100%', display:'block', opacity:'1',top:'800px',width:'100%'}
														 ]);
		jarallax.addAnimation('#ziti_one',[{progress:'3%', display:'none', opacity:'0', top:'0px',width:'100%'},
                                                         {progress:'4%', display:'block', opacity:'0.1', top:'25px',width:'100%'},
                                                         {progress:'5%', display:'block', opacity:'0.2', top:'50px',width:'100%'},
														 {progress:'6%', display:'block', opacity:'1', top:'75px',width:'100%'},
														 {progress:'7%', display:'block', opacity:'1', top:'100px',width:'100%'},
														 {progress:'8%', display:'block', opacity:'1', top:'125px',width:'100%'},
														 {progress:'9%', display:'block', opacity:'1', top:'150px',width:'100%'},
														 {progress:'10%', display:'block', opacity:'1', top:'175px',width:'100%'},
														 {progress:'11%', display:'block', opacity:'1', top:'200px',width:'100%'},
														 {progress:'100%', display:'block', opacity:'1', top:'200px',width:'100%'}/*265*/
														 ]);
		jarallax.addAnimation('#ziti_two',[{progress:'10%', display:'block', opacity:'0', top:'300px',width:'100%'},
                                                         {progress:'11%', display:'block', opacity:'1', top:'310px',width:'100%'},
                                                         {progress:'12%', display:'block', opacity:'1', top:'320px',width:'100%'},
														 {progress:'13%', display:'block', opacity:'1', top:'330px',width:'100%'},
							{progress:'14%', display:'block', opacity:'1', top:'340px',width:'100%'},							 
							{progress:'100%', display:'block', opacity:'1', top:'340px',width:'100%'}/*395*/
														 ]);
		jarallax.addAnimation('#ziti_three',[{progress:'11%', display:'block', opacity:'0', top:'350px',width:'100%'},
                                                         {progress:'12%', display:'block', opacity:'1', top:'450px',width:'100%'},
                                                         {progress:'13%', display:'block', opacity:'1', top:'550px',width:'100%'},
														 {progress:'100%', display:'block', opacity:'1', top:'550px',width:'100%'}
														 ]);
		jarallax.addAnimation('#ziti_four',[{progress:'3%', display:'none', opacity:'0', top:'340px'},
                                                         {progress:'4%', display:'block', opacity:'1', top:'290px',width:'100%'},
                                                         {progress:'5%', display:'block', opacity:'1', top:'240px',width:'100%'},
														 {progress:'6%', display:'block', opacity:'1', top:'190px',width:'100%'},
														 {progress:'7%', display:'block', opacity:'1', top:'140px',width:'100%'},
														 {progress:'8%', display:'block', opacity:'1', top:'90px',width:'100%'},
														 {progress:'9%', display:'block', opacity:'1', top:'40px',width:'100%'},
														 {progress:'10%', display:'block', opacity:'1', top:'-10px',width:'100%'},
														 {progress:'11%', display:'block', opacity:'1', top:'-60px',width:'100%'},/*170*/
														 {progress:'100%', display:'block', opacity:'1', top:'-60px',width:'100%'}
														 ]);
		jarallax.addAnimation('#chengbao',[
				{progress:'15%', display:'block', opacity:'1', top:'1400px',width:'100%'},
				{progress:'16%', display:'block', opacity:'1', top:'1550px',width:'100%'},
				{progress:'17%', display:'block', opacity:'1', top:'1560px',width:'100%'},
				{progress:'18%', display:'block', opacity:'0.7', top:'1600px',width:'100%'},
				{progress:'100%', display:'block', opacity:'0.2', top:'1600px',width:'100%'}
		]);

		/*if($("#sparks").css('opacity') == 0){								 
			jarallax.addAnimation('#sparks',[
					{progress:'16%', display:'block', opacity:'0'},
					{progress:'17%', display:'block', opacity:'0.2'},
					{progress:'18%', display:'block', opacity:'1'},
					{progress:'100%', display:'block', opacity:'1'}
			]);
		}*/
		
		jarallax.addAnimation('#ball10',[
			 //人物排列组合
			 {progress:'33%', display:'block', opacity:'1', left:'310px', top:'250px', 'background-position':'-170px 0px', width:'450px', height:'223px'},
			 {progress:'36%', display:'block', opacity:'1', left:'310px', top:'357px', 'background-position':'-170px -537px', width:'450px', height:'309px'},
			 {progress:'38%', display:'block', opacity:'1', left:'310px', top:'464px', 'background-position':'-170px -1074px', width:'450px', height:'373px'},
			 {progress:'40%', display:'block', opacity:'1', left:'310px', top:'571px', 'background-position':'-170px -1611px', width:'450px', height:'417px'},
			 {progress:'42%', display:'block', opacity:'1', left:'310px', top:'678px', 'background-position':'-182px -2148px', width:'450px', height:'475px'},
			 {progress:'43%', display:'block', opacity:'1', left:'310px', top:'785px', 'background-position':'-165px -2675px', width:'450px', height:'537px'},
			 {progress:'44%', display:'block', opacity:'1', left:'310px', top:'892px', 'background-position':'-165px -2675px', width:'450px', height:'537px'},
			 {progress:'45%', display:'block', opacity:'1', left:'310px', top:'1000px', 'background-position':'-165px -2675px', width:'450px', height:'537px'},
			 
			 {progress:'50%', display:'block', opacity:'1', left:'310px', top:'1000px', 'background-position':'-165px -2675px', width:'450px', height:'537px'},
			 //卡牌展示
			 {progress:'51%', display:'block', opacity:'1', left:'310px', top:'1050px', 'background-position':'-182px -2148px', width:'450px', height:'537px'},
			 {progress:'52%', display:'block', opacity:'1', left:'310px', top:'1100px', 'background-position':'-170px -1611px', width:'450px', height:'500px'},
			 {progress:'53%', display:'block', opacity:'1', left:'310px', top:'1150px', 'background-position':'-170px -1611px', width:'450px', height:'500px'},
			 {progress:'54%', display:'block', opacity:'1', left:'310px', top:'1200px', 'background-position':'-170px -1074px', width:'450px', height:'373px'},
			 {progress:'55%', display:'block', opacity:'1', left:'310px', top:'1250px', 'background-position':'-170px -1074px', width:'450px', height:'373px'},
			 {progress:'56%', display:'block', opacity:'1', left:'310px', top:'1350px', 'background-position':'-170px -1074px', width:'450px', height:'373px'},
			 {progress:'57%', display:'block', opacity:'1', left:'310px', top:'1450px', 'background-position':'-170px -1074px', width:'450px', height:'373px'},
			 
			 //插入卡片
			 {progress:'58%', display:'block', opacity:'1', left:'310px', top:'1550px', 'background-position':'-170px -1074px', width:'450px', height:'373px'},
			 {progress:'59%', display:'block', opacity:'1', left:'310px', top:'1650px', 'background-position':'-170px -1074px', width:'450px', height:'373px'},
			 {progress:'60%', display:'block', opacity:'1', left:'310px', top:'1700px', 'background-position':'-170px -1074px', width:'450px', height:'373px'},
			 {progress:'61%', display:'block', opacity:'1', left:'310px', top:'1770px', 'background-position':'-170px -1074px', width:'450px', height:'373px'},
			 {progress:'62%', display:'none', opacity:'0', left:'310px', top:'1770px', 'background-position':'-170px -1074px', width:'450px', height:'373px'},
			 
			 {progress:'100%', display:'block', opacity:'1', left:'310px', top:'1770px', 'background-position':'-170px -1074px', width:'450px', height:'373px'}
		]);
		
		jarallax.addAnimation('#ball2',[
			 //人物排列组合
			 {progress:'33%', display:'block', opacity:'1', left:'250px', top:'200px', 'background-position':'-288px 0px', width:'248px', height:'174px'},
			 {progress:'36%', display:'block', opacity:'1', left:'284px', top:'290px', 'background-position':'-288px -350px', width:'248px', height:'199px'},
			 {progress:'38%', display:'block', opacity:'1', left:'301px', top:'380px', 'background-position':'-288px -700px', width:'248px', height:'215px'},
			 {progress:'40%', display:'block', opacity:'1', left:'335px', top:'470px', 'background-position':'-288px -1050px', width:'248px', height:'243px'},
			 {progress:'42%', display:'block', opacity:'1', left:'369px', top:'560px', 'background-position':'-288px -1400px', width:'248px', height:'270px'},
			 {progress:'43%', display:'block', opacity:'1', left:'386px', top:'650px', 'background-position':'-288px -1750px', width:'248px', height:'270px'},
			 {progress:'44%', display:'block', opacity:'1', left:'403px', top:'740px', 'background-position':'-288px -1750px', width:'248px', height:'270px'},
			 {progress:'45%', display:'block', opacity:'1', left:'403px', top:'830px', 'background-position':'-288px -1750px', width:'248px', height:'270px'},
			 
			 {progress:'50%', display:'block', opacity:'1', left:'420px', top:'830px', 'background-position':'-288px -1750px', width:'248px', height:'270px'},
			 //卡牌展示
			 {progress:'51%', display:'block', opacity:'1', left:'466px', top:'930px', 'background-position':'-288px -1750px', width:'248px', height:'270px'},
			 {progress:'52%', display:'block', opacity:'1', left:'512px', top:'1030px', 'background-position':'-288px -1750px', width:'248px', height:'270px'},
			 {progress:'53%', display:'block', opacity:'1', left:'558px', top:'1130px', 'background-position':'-288px -2100px', width:'248px', height:'350px'},
			 {progress:'54%', display:'block', opacity:'1', left:'604px', top:'1230px', 'background-position':'-288px -2100px', width:'248px', height:'350px'},
			 {progress:'55%', display:'block', opacity:'1', left:'650px', top:'1330px', 'background-position':'-288px -2450px', width:'248px', height:'350px'},
			 {progress:'56%', display:'block', opacity:'1', left:'650px', top:'1430px', 'background-position':'-288px -2450px', width:'248px', height:'350px'},
			 {progress:'57%', display:'block', opacity:'1', left:'650px', top:'1480px', 'background-position':'-288px -2450px', width:'248px', height:'350px'},
			 
			 //插入卡片
			 {progress:'58%', display:'block', opacity:'1', left:'650px', top:'1580px', 'background-position':'-288px -2450px', width:'248px', height:'350px'},
			 {progress:'59%', display:'block', opacity:'1', left:'650px', top:'1680px', 'background-position':'-288px -2450px', width:'248px', height:'350px'},
			 {progress:'60%', display:'block', opacity:'1', left:'650px', top:'1700px', 'background-position':'-288px -2450px', width:'248px', height:'350px'},
			 {progress:'61%', display:'block', opacity:'1', left:'650px', top:'1770px', 'background-position':'-288px -2450px', width:'248px', height:'350px'},
			 {progress:'62%', display:'none', opacity:'0', left:'650px', top:'1770px', 'background-position':'-288px -2450px', width:'248px', height:'350px'},
			 
			 {progress:'100%', display:'block', opacity:'1', left:'650px', top:'1770px', 'background-position':'-288px -2450px', width:'248px', height:'350px'}
		]);

      }