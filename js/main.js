var jarallax;
    init = function() {
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
									   
		jarallax.addAnimation('#produce_ziti',[{progress:'1%', display:'block', opacity:'1',top:'500px'},
												{progress:'2%', display:'block', opacity:'1',top:'560px'},
														 {progress:'3%', display:'block', opacity:'1',top:'620px'},
														 {progress:'4%', display:'block', opacity:'1',top:'680px'},
														 {progress:'5%', display:'block', opacity:'1',top:'740px'},
														 {progress:'6%', display:'block', opacity:'1',top:'800px'},
														 {progress:'100%', display:'block', opacity:'1',top:'800px'}
														 ]);												 
		jarallax.addAnimation('#ziti_one',[{progress:'3%', display:'none', opacity:'0', top:'0px'},
                                                         {progress:'4%', display:'block', opacity:'0.1', top:'25px'},
                                                         {progress:'5%', display:'block', opacity:'0.2', top:'50px'},
														 {progress:'6%', display:'block', opacity:'1', top:'75px'},
														 {progress:'7%', display:'block', opacity:'1', top:'100px'},
														 {progress:'8%', display:'block', opacity:'1', top:'125px'},
														 {progress:'9%', display:'block', opacity:'1', top:'150px'},
														 {progress:'10%', display:'block', opacity:'1', top:'175px'},
														 {progress:'11%', display:'block', opacity:'1', top:'200px'},
														 {progress:'100%', display:'block', opacity:'1', top:'200px'}
														 ]);
		jarallax.addAnimation('#ziti_two',[{progress:'10%', display:'block', opacity:'0', top:'300px'},
                                                         {progress:'11%', display:'block', opacity:'1', top:'310px'},
                                                         {progress:'12%', display:'block', opacity:'1', top:'320px'},
														 {progress:'13%', display:'block', opacity:'1', top:'330px'},
														 {progress:'14%', display:'block', opacity:'1', top:'340px'},
														 {progress:'100%', display:'block', opacity:'1', top:'340px'}
														 ]);
		jarallax.addAnimation('#ziti_three',[{progress:'11%', display:'block', opacity:'0', top:'350px'},
                                                         {progress:'12%', display:'block', opacity:'1', top:'450px'},
                                                         {progress:'13%', display:'block', opacity:'1', top:'550px'},
														 {progress:'100%', display:'block', opacity:'1', top:'550px'}
														 ]);
		jarallax.addAnimation('#ziti_four',[{progress:'3%', display:'none', opacity:'0', top:'340px'},
                                                         {progress:'4%', display:'block', opacity:'1', top:'290px'},
                                                         {progress:'5%', display:'block', opacity:'1', top:'240px'},
														 {progress:'6%', display:'block', opacity:'1', top:'190px'},
														 {progress:'7%', display:'block', opacity:'1', top:'140px'},
														 {progress:'8%', display:'block', opacity:'1', top:'90px'},
														 {progress:'9%', display:'block', opacity:'1', top:'40px'},
														 {progress:'10%', display:'block', opacity:'1', top:'-10px'},
														 {progress:'11%', display:'block', opacity:'1', top:'-60px'},
														 {progress:'100%', display:'block', opacity:'1', top:'-60px'}
														 ]);
		jarallax.addAnimation('#chengbao',[
				{progress:'15%', display:'block', opacity:'0', top:'1450px'},
				{progress:'16%', display:'block', opacity:'1', top:'1500px'},
				{progress:'17%', display:'block', opacity:'1', top:'1550px'},
				{progress:'18%', display:'block', opacity:'1', top:'1600px'},
				{progress:'100%', display:'block', opacity:'1', top:'1600px'}
		]);
		jarallax.addAnimation('#chengbao01',[
				{progress:'25%', display:'none', opacity:'0', top:'1800px'},
				{progress:'26%', display:'block', opacity:'0', top:'1760px'},
				{progress:'27%', display:'block', opacity:'1', top:'1720px'},
				{progress:'28%', display:'block', opacity:'1', top:'1680px'},
				{progress:'29%', display:'block', opacity:'1', top:'1640px'},
				{progress:'30%', display:'block', opacity:'1', top:'1600px'},
				{progress:'100%', display:'block', opacity:'1', top:'1600px'}
		]);
		jarallax.addAnimation('#chengbao02',[
				{progress:'25%', display:'none', opacity:'0', top:'1400px'},
				{progress:'26%', display:'block', opacity:'1', top:'1440px'},
				{progress:'27%', display:'block', opacity:'1', top:'1480px'},
				{progress:'28%', display:'block', opacity:'1', top:'1520px'},
				{progress:'29%', display:'block', opacity:'1', top:'1560px'},
				{progress:'30%', display:'block', opacity:'1', top:'1600px'},
				{progress:'100%', display:'block', opacity:'1', top:'1600px'}
		]);

		jarallax.addAnimation('#ball10',[
			 //人物排列组合
			 {progress:'33%', display:'block', opacity:'1', left:'290px', top:'250px', 'background-position':'0px 0px', width:'470px', height:'580px'},
			 {progress:'36%', display:'block', opacity:'1', left:'290px', top:'357px', 'background-position':'0px -580px', width:'470px', height:'580px'},
			 {progress:'38%', display:'block', opacity:'1', left:'290px', top:'464px', 'background-position':'0px -1160px', width:'470px', height:'580px'},
			 {progress:'40%', display:'block', opacity:'1', left:'290px', top:'571px', 'background-position':'0px -1740px', width:'470px', height:'580px'},
			 {progress:'42%', display:'block', opacity:'1', left:'290px', top:'678px', 'background-position':'0px -2320px', width:'470px', height:'580px'},
			 {progress:'43%', display:'block', opacity:'1', left:'290px', top:'785px', 'background-position':'0px -2900px', width:'470px', height:'580px'},
			 {progress:'44%', display:'block', opacity:'1', left:'290px', top:'892px', 'background-position':'0px -2900px', width:'470px', height:'580px'},
			 {progress:'45%', display:'block', opacity:'1', left:'290px', top:'1000px', 'background-position':'0px -2900px', width:'470px', height:'580px'},
			 
			 {progress:'50%', display:'block', opacity:'1', left:'290px', top:'1000px', 'background-position':'0px -2900px', width:'470px', height:'580px'},
			 //卡牌展示
			 {progress:'51%', display:'block', opacity:'1', left:'290px', top:'1069px', 'background-position':'0px -2900px', width:'470px', height:'580px'},
			 {progress:'52%', display:'block', opacity:'1', left:'290px', top:'1138px', 'background-position':'0px -2900px', width:'470px', height:'580px'},
			 {progress:'53%', display:'block', opacity:'1', left:'290px', top:'1207px', 'background-position':'0px -2900px', width:'470px', height:'580px'},
			 {progress:'54%', display:'block', opacity:'1', left:'290px', top:'1276px', 'background-position':'0px -2320px', width:'470px', height:'580px'},
			 {progress:'55%', display:'block', opacity:'1', left:'290px', top:'1345px', 'background-position':'0px -2320px', width:'470px', height:'580px'},
			 {progress:'56%', display:'block', opacity:'1', left:'290px', top:'1414px', 'background-position':'0px -2320px', width:'470px', height:'580px'},
			 {progress:'57%', display:'block', opacity:'1', left:'290px', top:'1483px', 'background-position':'0px -2320px', width:'470px', height:'580px'},
			 
			 //插入卡片
			 {progress:'58%', display:'block', opacity:'1', left:'290px', top:'1552px', 'background-position':'0px -1740px', width:'470px', height:'580px'},
			 {progress:'59%', display:'block', opacity:'1', left:'290px', top:'1623px', 'background-position':'0px -1740px', width:'470px', height:'580px'},
			 {progress:'60%', display:'block', opacity:'1', left:'290px', top:'1692px', 'background-position':'0px -1740px', width:'470px', height:'580px'},
			 {progress:'61%', display:'block', opacity:'1', left:'290px', top:'1692px', 'background-position':'0px -1740px', width:'470px', height:'580px'},
			 {progress:'62%', display:'none', opacity:'0', left:'290px', top:'1692px', 'background-position':'0px -1740px', width:'470px', height:'580px'},
			 
			 {progress:'100%', display:'block', opacity:'1', left:'290px', top:'1692px', 'background-position':'0px -1740px', width:'470px', height:'580px'}
		]);
		
		jarallax.addAnimation('#ball1',[
			 //人物排列组合
			 {progress:'33%', display:'block', opacity:'1', left:'100px', top:'150px', 'background-position':'0px 0px', width:'300px', height:'170px'},
			 {progress:'36%', display:'block', opacity:'1', left:'105px', top:'247px', 'background-position':'0px -358px', width:'300px', height:'193px'},
			 {progress:'38%', display:'block', opacity:'1', left:'110px', top:'344px', 'background-position':'0px -716px', width:'300px', height:'205px'},
			 {progress:'40%', display:'block', opacity:'1', left:'115px', top:'441px', 'background-position':'0px -1074px', width:'300px', height:'225px'},
			 {progress:'42%', display:'block', opacity:'1', left:'120px', top:'538px', 'background-position':'0px -1074px', width:'300px', height:'225px'},
			 {progress:'43%', display:'block', opacity:'1', left:'125px', top:'635px', 'background-position':'0px -1074px', width:'300px', height:'225px'},
			 {progress:'44%', display:'block', opacity:'1', left:'130px', top:'732px', 'background-position':'0px -1074px', width:'300px', height:'225px'},
			 {progress:'45%', display:'block', opacity:'1', left:'138px', top:'828px', 'background-position':'0px -1074px', width:'300px', height:'225px'},
			 
			 {progress:'50%', display:'block', opacity:'1', left:'138px', top:'828px', 'background-position':'0px -1074px', width:'300px', height:'225px'},
			 //卡牌展示
			 {progress:'51%', display:'block', opacity:'1', left:'225px', top:'930px', 'background-position':'0px -1074px', width:'300px', height:'225px'},
			 {progress:'52%', display:'block', opacity:'1', left:'312px', top:'1030px', 'background-position':'0px -1074px', width:'300px', height:'225px'},
			 {progress:'53%', display:'block', opacity:'1', left:'399px', top:'1130px', 'background-position':'0px -1074px', width:'300px', height:'225px'},
			 {progress:'54%', display:'block', opacity:'1', left:'400px', top:'1230px', 'background-position':'0px -1074px', width:'300px', height:'225px'},
			 {progress:'55%', display:'block', opacity:'1', left:'400px', top:'1330px', 'background-position':'0px -1074px', width:'300px', height:'225px'},
			 {progress:'56%', display:'block', opacity:'1', left:'400px', top:'1430px', 'background-position':'0px -1074px', width:'300px', height:'225px'},
			 {progress:'57%', display:'block', opacity:'1', left:'400px', top:'1480px', 'background-position':'0px -1074px', width:'300px', height:'225px'},
			 
			 //插入卡片
			 {progress:'58%', display:'block', opacity:'0', left:'400px', top:'1580px', 'background-position':'0px -1074px', width:'300px', height:'225px'},
			 {progress:'59%', display:'block', opacity:'0', left:'400px', top:'1680px', 'background-position':'0px -1074px', width:'300px', height:'225px'},
			 {progress:'60%', display:'block', opacity:'0', left:'400px', top:'1700px', 'background-position':'0px -1074px', width:'300px', height:'225px'},
			 {progress:'61%', display:'block', opacity:'0', left:'400px', top:'1770px', 'background-position':'0px -1074px', width:'300px', height:'225px'},
			 {progress:'62%', display:'none', opacity:'0', left:'400px', top:'1770px', 'background-position':'0px -1074px', width:'300px', height:'225px'},
			 
			 {progress:'100%', display:'block', opacity:'1', left:'400px', top:'1770px', 'background-position':'0px -1074px', width:'300px', height:'225px'}
		]);
		
		jarallax.addAnimation('#ball5',[
			 //人物排列组合
			 {progress:'33%', display:'block', opacity:'1', left:'230px', top:'400px', 'background-position':'0px 0px', width:'200px', height:'168px'},
			 {progress:'36%', display:'block', opacity:'1', left:'236px', top:'466px', 'background-position':'0px -324px', width:'200px', height:'185px'},
			 {progress:'38%', display:'block', opacity:'1', left:'242px', top:'532px', 'background-position':'0px -648px', width:'200px', height:'206px'},
			 {progress:'40%', display:'block', opacity:'1', left:'248px', top:'598px', 'background-position':'0px -952px', width:'200px', height:'235px'},
			 {progress:'42%', display:'block', opacity:'1', left:'254px', top:'664px', 'background-position':'0px -952px', width:'200px', height:'235px'},
			 {progress:'43%', display:'block', opacity:'1', left:'260px', top:'730px', 'background-position':'0px -952px', width:'200px', height:'235px'},
			 {progress:'44%', display:'block', opacity:'1', left:'266px', top:'796px', 'background-position':'0px -952px', width:'200px', height:'235px'},
			 {progress:'45%', display:'block', opacity:'1', left:'270px', top:'860px', 'background-position':'0px -952px', width:'200px', height:'235px'},
			 
			 {progress:'50%', display:'block', opacity:'1', left:'270px', top:'860px', 'background-position':'0px -952px', width:'200px', height:'235px'},
			 //卡牌展示
			 {progress:'51%', display:'block', opacity:'1', left:'313px', top:'930px', 'background-position':'0px -952px', width:'200px', height:'235px'},
			 {progress:'52%', display:'block', opacity:'1', left:'356px', top:'1030px', 'background-position':'0px -952px', width:'200px', height:'235px'},
			 {progress:'53%', display:'block', opacity:'1', left:'399px', top:'1130px', 'background-position':'0px -952px', width:'200px', height:'235px'},
			 {progress:'54%', display:'block', opacity:'1', left:'400px', top:'1230px', 'background-position':'0px -952px', width:'200px', height:'235px'},
			 {progress:'55%', display:'block', opacity:'1', left:'400px', top:'1330px', 'background-position':'0px -952px', width:'200px', height:'235px'},
			 {progress:'56%', display:'block', opacity:'1', left:'400px', top:'1430px', 'background-position':'0px -952px', width:'200px', height:'235px'},
			 {progress:'57%', display:'block', opacity:'1', left:'400px', top:'1480px', 'background-position':'0px -952px', width:'200px', height:'235px'},
			 
			 //插入卡片
			 {progress:'58%', display:'block', opacity:'0', left:'400px', top:'1580px', 'background-position':'0px -952px', width:'200px', height:'235px'},
			 {progress:'59%', display:'block', opacity:'0', left:'400px', top:'1680px', 'background-position':'0px -952px', width:'200px', height:'235px'},
			 {progress:'60%', display:'block', opacity:'0', left:'400px', top:'1700px', 'background-position':'0px -952px', width:'200px', height:'235px'},
			 {progress:'61%', display:'block', opacity:'0', left:'400px', top:'1770px', 'background-position':'0px -952px', width:'200px', height:'235px'},
			 {progress:'62%', display:'none', opacity:'0', left:'400px', top:'1770px', 'background-position':'0px -952px', width:'200px', height:'235px'},
			 
			 {progress:'100%', display:'block', opacity:'1', left:'400px', top:'1770px', 'background-position':'0px -952px', width:'200px', height:'235px'}
		]);
		
		jarallax.addAnimation('#ball9',[
			 //人物排列组合
			 {progress:'33%', display:'block', opacity:'1', left:'30px', top:'380px', 'background-position':'0px 0px', width:'212px', height:'195px'},
			 {progress:'36%', display:'block', opacity:'1', left:'30px', top:'472px', 'background-position':'0px -356px', width:'212px', height:'220px'},
			 {progress:'38%', display:'block', opacity:'1', left:'30px', top:'564px', 'background-position':'0px -712px', width:'212px', height:'245px'},
			 {progress:'40%', display:'block', opacity:'1', left:'30px', top:'656px', 'background-position':'0px -1068px', width:'212px', height:'260px'},
			 {progress:'42%', display:'block', opacity:'1', left:'30px', top:'748px', 'background-position':'0px -1068px', width:'212px', height:'260px'},
			 {progress:'43%', display:'block', opacity:'1', left:'30px', top:'840px', 'background-position':'0px -1068px', width:'212px', height:'260px'},
			 {progress:'44%', display:'block', opacity:'1', left:'30px', top:'932px', 'background-position':'0px -1068px', width:'212px', height:'260px'},
			 {progress:'45%', display:'block', opacity:'1', left:'30px', top:'1020px', 'background-position':'0px -1068px', width:'212px', height:'260px'},
			 
			 {progress:'50%', display:'block', opacity:'1', left:'30px', top:'1020px', 'background-position':'0px -1068px', width:'212px', height:'260px'},
			 //卡牌展示
			 {progress:'51%', display:'block', opacity:'1', left:'153px', top:'930px', 'background-position':'0px -1068px', width:'212px', height:'260px'},
			 {progress:'52%', display:'block', opacity:'1', left:'276px', top:'1030px', 'background-position':'0px -1068px', width:'212px', height:'260px'},
			 {progress:'53%', display:'block', opacity:'1', left:'399px', top:'1130px', 'background-position':'0px -1068px', width:'212px', height:'260px'},
			 {progress:'54%', display:'block', opacity:'1', left:'400px', top:'1230px', 'background-position':'0px -1068px', width:'212px', height:'260px'},
			 {progress:'55%', display:'block', opacity:'1', left:'400px', top:'1330px', 'background-position':'0px -1068px', width:'212px', height:'260px'},
			 {progress:'56%', display:'block', opacity:'1', left:'400px', top:'1430px', 'background-position':'0px -1068px', width:'212px', height:'260px'},
			 {progress:'57%', display:'block', opacity:'1', left:'400px', top:'1480px', 'background-position':'0px -1068px', width:'212px', height:'260px'},
			 
			 //插入卡片
			 {progress:'58%', display:'block', opacity:'0', left:'400px', top:'1580px', 'background-position':'0px -1068px', width:'212px', height:'260px'},
			 {progress:'59%', display:'block', opacity:'0', left:'400px', top:'1680px', 'background-position':'0px -1068px', width:'212px', height:'260px'},
			 {progress:'60%', display:'block', opacity:'0', left:'400px', top:'1700px', 'background-position':'0px -1068px', width:'212px', height:'260px'},
			 {progress:'61%', display:'block', opacity:'0', left:'400px', top:'1770px', 'background-position':'0px -1068px', width:'212px', height:'260px'},
			 {progress:'62%', display:'none', opacity:'0', left:'400px', top:'1770px', 'background-position':'0px -1068px', width:'212px', height:'260px'},
			 
			 {progress:'100%', display:'block', opacity:'1', left:'400px', top:'1770px', 'background-position':'0px -1068px', width:'212px', height:'260px'}
		]);
		
		jarallax.addAnimation('#ball2',[
			 //人物排列组合
			 {progress:'33%', display:'block', opacity:'1', left:'250px', top:'200px', 'background-position':'0px 0px', width:'230px', height:'180px'},
			 {progress:'36%', display:'block', opacity:'1', left:'284px', top:'290px', 'background-position':'0px -350px', width:'230px', height:'203px'},
			 {progress:'38%', display:'block', opacity:'1', left:'301px', top:'380px', 'background-position':'0px -700px', width:'230px', height:'218px'},
			 {progress:'40%', display:'block', opacity:'1', left:'335px', top:'470px', 'background-position':'0px -1050px', width:'230px', height:'222px'},
			 {progress:'42%', display:'block', opacity:'1', left:'369px', top:'560px', 'background-position':'0px -1400px', width:'230px', height:'239px'},
			 {progress:'43%', display:'block', opacity:'1', left:'386px', top:'650px', 'background-position':'0px -1750px', width:'230px', height:'247px'},
			 {progress:'44%', display:'block', opacity:'1', left:'403px', top:'740px', 'background-position':'0px -1750px', width:'230px', height:'247px'},
			 {progress:'45%', display:'block', opacity:'1', left:'448px', top:'916px', 'background-position':'0px -1750px', width:'230px', height:'247px'},
			 
			 {progress:'50%', display:'block', opacity:'1', left:'448px', top:'916px', 'background-position':'0px -1750px', width:'230px', height:'247px'},
			 //卡牌展示
			 {progress:'51%', display:'block', opacity:'1', left:'393px', top:'930px', 'background-position':'0px -2100px', width:'230px', height:'255px'},
			 {progress:'52%', display:'block', opacity:'1', left:'338px', top:'1030px', 'background-position':'0px -2100px', width:'230px', height:'255px'},
			 {progress:'53%', display:'block', opacity:'1', left:'283px', top:'1130px', 'background-position':'0px -2450px', width:'230px', height:'260px'},
			 {progress:'54%', display:'block', opacity:'1', left:'228px', top:'1230px', 'background-position':'0px -2450px', width:'230px', height:'260px'},
			 {progress:'55%', display:'block', opacity:'1', left:'173px', top:'1330px', 'background-position':'0px -2450px', width:'230px', height:'260px'},
			 {progress:'56%', display:'block', opacity:'1', left:'173px', top:'1430px', 'background-position':'0px -2450px', width:'230px', height:'260px'},
			 {progress:'57%', display:'block', opacity:'1', left:'173px', top:'1480px', 'background-position':'0px -2450px', width:'230px', height:'260px'},
			 
			 //插入卡片
			 {progress:'58%', display:'block', opacity:'1', left:'173px', top:'1580px', 'background-position':'0px -2450px', width:'230px', height:'260px'},
			 {progress:'59%', display:'block', opacity:'1', left:'173px', top:'1680px', 'background-position':'0px -2450px', width:'230px', height:'260px'},
			 {progress:'60%', display:'block', opacity:'1', left:'173px', top:'1788px', 'background-position':'0px -2450px', width:'230px', height:'260px'},
			 {progress:'61%', display:'block', opacity:'1', left:'173px', top:'1788px', 'background-position':'0px -2450px', width:'230px', height:'260px'},
			 {progress:'62%', display:'none', opacity:'0', left:'173px', top:'1788px', 'background-position':'0px -2450px', width:'230px', height:'260px'},
			 
			 {progress:'100%', display:'block', opacity:'1', left:'173px', top:'1788px', 'background-position':'0px -2450px', width:'230px', height:'260px'}
		]);
		
		jarallax.addAnimation('#ball3',[
			 //人物排列组合
			 {progress:'33%', display:'block', opacity:'1', left:'800px', top:'200px', 'background-position':'0px 0px', width:'270px', height:'180px'},
			 {progress:'36%', display:'block', opacity:'1', left:'767px', top:'290px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'38%', display:'block', opacity:'1', left:'734px', top:'380px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'40%', display:'block', opacity:'1', left:'701px', top:'470px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'42%', display:'block', opacity:'1', left:'668px', top:'560px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'43%', display:'block', opacity:'1', left:'635px', top:'650px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'44%', display:'block', opacity:'1', left:'602px', top:'740px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'45%', display:'block', opacity:'1', left:'570px', top:'860px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 
			 {progress:'50%', display:'block', opacity:'1', left:'570px', top:'860px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 //卡牌展示
			 {progress:'51%', display:'block', opacity:'1', left:'520px', top:'930px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'52%', display:'block', opacity:'1', left:'470px', top:'1030px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'53%', display:'block', opacity:'1', left:'420px', top:'1130px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'54%', display:'block', opacity:'1', left:'400px', top:'1230px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'55%', display:'block', opacity:'1', left:'400px', top:'1330px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'56%', display:'block', opacity:'1', left:'400px', top:'1430px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'57%', display:'block', opacity:'1', left:'400px', top:'1480px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 
			 //插入卡片
			 {progress:'58%', display:'block', opacity:'0', left:'400px', top:'1580px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'59%', display:'block', opacity:'0', left:'400px', top:'1680px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'60%', display:'block', opacity:'0', left:'400px', top:'1700px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'61%', display:'block', opacity:'0', left:'400px', top:'1770px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'62%', display:'none', opacity:'0', left:'400px', top:'1770px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 
			 {progress:'100%', display:'block', opacity:'1', left:'400px', top:'1770px', 'background-position':'0px -350px', width:'270px', height:'210px'}
		]);
		
		jarallax.addAnimation('#ball4',[
			 //人物排列组合
			 {progress:'33%', display:'block', opacity:'1', left:'670px', top:'300px', 'background-position':'0px 0px', width:'270px', height:'180px'},
			 {progress:'36%', display:'block', opacity:'1', left:'677px', top:'393px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'38%', display:'block', opacity:'1', left:'684px', top:'486px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'40%', display:'block', opacity:'1', left:'691px', top:'579px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'42%', display:'block', opacity:'1', left:'698px', top:'672px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'43%', display:'block', opacity:'1', left:'715px', top:'765px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'44%', display:'block', opacity:'1', left:'715px', top:'858px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'45%', display:'block', opacity:'1', left:'715px', top:'950px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 
			 {progress:'50%', display:'block', opacity:'1', left:'715px', top:'950px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 //卡牌展示
			 {progress:'51%', display:'block', opacity:'1', left:'615px', top:'930px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'52%', display:'block', opacity:'1', left:'515px', top:'1030px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'53%', display:'block', opacity:'1', left:'415px', top:'1130px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'54%', display:'block', opacity:'1', left:'400px', top:'1230px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'55%', display:'block', opacity:'1', left:'400px', top:'1330px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'56%', display:'block', opacity:'1', left:'400px', top:'1430px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'57%', display:'block', opacity:'1', left:'400px', top:'1480px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 
			 //插入卡片
			 {progress:'58%', display:'block', opacity:'0', left:'400px', top:'1580px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'59%', display:'block', opacity:'0', left:'400px', top:'1680px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'60%', display:'block', opacity:'0', left:'400px', top:'1700px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'61%', display:'block', opacity:'0', left:'400px', top:'1770px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 {progress:'62%', display:'none', opacity:'0', left:'400px', top:'1770px', 'background-position':'0px -350px', width:'270px', height:'210px'},
			 
			 {progress:'100%', display:'block', opacity:'1', left:'400px', top:'1770px', 'background-position':'0px -350px', width:'270px', height:'210px'}
		]);
		
		jarallax.addAnimation('#ball6',[
			 //人物排列组合
			 {progress:'33%', display:'block', opacity:'1', left:'730px', top:'530px', 'background-position':'0px 0px', width:'260px', height:'215px'},
			 {progress:'36%', display:'block', opacity:'1', left:'712px', top:'634px', 'background-position':'0px -367px', width:'260px', height:'268px'},
			 {progress:'38%', display:'block', opacity:'1', left:'694px', top:'738px', 'background-position':'0px -734px', width:'260px', height:'289px'},
			 {progress:'40%', display:'block', opacity:'1', left:'676px', top:'842px', 'background-position':'0px -1101px', width:'260px', height:'302px'},
			 {progress:'42%', display:'block', opacity:'1', left:'658px', top:'946px', 'background-position':'0px -1468px', width:'260px', height:'320px'},
			 {progress:'43%', display:'block', opacity:'1', left:'640px', top:'1050px', 'background-position':'0px -1835px', width:'260px', height:'342px'},
			 {progress:'44%', display:'block', opacity:'1', left:'622px', top:'1154px', 'background-position':'0px -1835px', width:'260px', height:'342px'},
			 {progress:'45%', display:'block', opacity:'1', left:'605px', top:'1258px', 'background-position':'0px -1835px', width:'260px', height:'342px'},
			 
			 {progress:'50%', display:'block', opacity:'1', left:'605px', top:'1258px', 'background-position':'0px -1835px', width:'260px', height:'342px'},
			 //卡牌展示
			 {progress:'51%', display:'block', opacity:'1', left:'598px', top:'1308px', 'background-position':'0px -2202px', width:'260px', height:'360px'},
			 {progress:'52%', display:'block', opacity:'1', left:'591px', top:'1358px', 'background-position':'0px -2569px', width:'260px', height:'360px'},
			 {progress:'53%', display:'block', opacity:'1', left:'584px', top:'1408px', 'background-position':'0px -2569px', width:'260px', height:'367px'},
			 {progress:'54%', display:'block', opacity:'1', left:'577px', top:'1458px', 'background-position':'0px -2569px', width:'260px', height:'367px'},
			 {progress:'55%', display:'block', opacity:'1', left:'573px', top:'1508px', 'background-position':'0px -2569px', width:'260px', height:'367px'},
			 {progress:'56%', display:'block', opacity:'1', left:'573px', top:'1558px', 'background-position':'0px -2569px', width:'260px', height:'367px'},
			 {progress:'57%', display:'block', opacity:'1', left:'573px', top:'1608px', 'background-position':'0px -2569px', width:'260px', height:'367px'},
			 
			 //插入卡片
			 {progress:'58%', display:'block', opacity:'1', left:'573px', top:'1658px', 'background-position':'0px -2569px', width:'260px', height:'367px'},
			 {progress:'59%', display:'block', opacity:'1', left:'573px', top:'1708px', 'background-position':'0px -2569px', width:'260px', height:'367px'},
			 {progress:'60%', display:'block', opacity:'1', left:'573px', top:'1755px', 'background-position':'0px -2569px', width:'260px', height:'367px'},
			 {progress:'61%', display:'block', opacity:'1', left:'573px', top:'1755px', 'background-position':'0px -2569px', width:'260px', height:'367px'},
			 {progress:'62%', display:'none', opacity:'0', left:'573px', top:'1755px', 'background-position':'0px -2569px', width:'260px', height:'367px'},
			 
			 {progress:'100%', display:'block', opacity:'1', left:'573px', top:'1755px', 'background-position':'0px -2569px', width:'260px', height:'367px'}
		]);
		jarallax.addAnimation('#ball7',[
			 //人物排列组合
			 {progress:'33%', display:'block', opacity:'1', left:'150px', top:'550px', 'background-position':'0px 0px', width:'430px', height:'186px'},
			 {progress:'36%', display:'block', opacity:'1', left:'136px', top:'647px', 'background-position':'0px -350px', width:'430px', height:'220px'},
			 {progress:'38%', display:'block', opacity:'1', left:'122px', top:'744px', 'background-position':'0px -700px', width:'430px', height:'232px'},
			 {progress:'40%', display:'block', opacity:'1', left:'108px', top:'841px', 'background-position':'0px -1050px', width:'430px', height:'268px'},
			 {progress:'42%', display:'block', opacity:'1', left:'94px', top:'938px', 'background-position':'0px -1400px', width:'430px', height:'278px'},
			 {progress:'43%', display:'block', opacity:'1', left:'80px', top:'1035px', 'background-position':'0px -1750px', width:'430px', height:'305px'},
			 {progress:'44%', display:'block', opacity:'1', left:'66px', top:'1132px', 'background-position':'0px -1750px', width:'430px', height:'305px'},
			 {progress:'45%', display:'block', opacity:'1', left:'50px', top:'1230px', 'background-position':'0px -1750px', width:'430px', height:'305px'},
			 
			 {progress:'50%', display:'block', opacity:'1', left:'50px', top:'1230px', 'background-position':'0px -1750px', width:'430px', height:'305px'},
			 //卡牌展示
			 {progress:'51%', display:'block', opacity:'1', left:'40px', top:'1285px', 'background-position':'0px -1750px', width:'430px', height:'305px'},
			 {progress:'52%', display:'block', opacity:'1', left:'30px', top:'1340px', 'background-position':'0px -1750px', width:'430px', height:'305px'},
			 {progress:'53%', display:'block', opacity:'1', left:'20px', top:'1395px', 'background-position':'0px -1750px', width:'430px', height:'305px'},
			 {progress:'54%', display:'block', opacity:'1', left:'10px', top:'1450px', 'background-position':'0px -1400px', width:'430px', height:'278px'},
			 {progress:'55%', display:'block', opacity:'1', left:'0px', top:'1505px', 'background-position':'0px -1400px', width:'430px', height:'278px'},
			 {progress:'56%', display:'block', opacity:'1', left:'0px', top:'1560px', 'background-position':'0px -1400px', width:'430px', height:'278px'},
			 {progress:'57%', display:'block', opacity:'1', left:'0px', top:'1615px', 'background-position':'0px -1400px', width:'430px', height:'278px'},
			 
			 //插入卡片
			 {progress:'58%', display:'block', opacity:'1', left:'0px', top:'1670px', 'background-position':'0px -1050px', width:'430px', height:'268px'},
			 {progress:'59%', display:'block', opacity:'1', left:'0px', top:'1725px', 'background-position':'0px -1050px', width:'430px', height:'268px'},
			 {progress:'60%', display:'block', opacity:'1', left:'0px', top:'1788px', 'background-position':'0px -1050px', width:'430px', height:'268px'},
			 {progress:'61%', display:'block', opacity:'1', left:'0px', top:'1788px', 'background-position':'0px -1050px', width:'430px', height:'268px'},
			 {progress:'62%', display:'none', opacity:'0', left:'0px', top:'1788px', 'background-position':'0px -1050px', width:'430px', height:'268px'},
			 
			 {progress:'100%', display:'block', opacity:'1', left:'0px', top:'1788px', 'background-position':'0px -1050px', width:'430px', height:'268px'}
		]);
		jarallax.addAnimation('#ball8',[
			 //人物排列组合
			 {progress:'33%', display:'block', opacity:'1', left:'850px', top:'400px', 'background-position':'0px 0px', width:'364px', height:'149px'},
			 {progress:'36%', display:'block', opacity:'1', left:'830px', top:'490px', 'background-position':'0px -363px', width:'364px', height:'178px'},
			 {progress:'38%', display:'block', opacity:'1', left:'810px', top:'580px', 'background-position':'0px -726px', width:'364px', height:'208px'},
			 {progress:'40%', display:'block', opacity:'1', left:'790px', top:'670px', 'background-position':'0px -1089px', width:'364px', height:'236px'},
			 {progress:'42%', display:'block', opacity:'1', left:'770px', top:'760px', 'background-position':'0px -1089px', width:'364px', height:'236px'},
			 {progress:'43%', display:'block', opacity:'1', left:'750px', top:'850px', 'background-position':'0px -1089px', width:'364px', height:'236px'},
			 {progress:'44%', display:'block', opacity:'1', left:'732px', top:'940px', 'background-position':'0px -1089px', width:'364px', height:'236px'},
			 {progress:'45%', display:'block', opacity:'1', left:'732px', top:'1130px', 'background-position':'0px -1089px', width:'364px', height:'236px'},
			 
			 {progress:'50%', display:'block', opacity:'1', left:'732px', top:'1130px', 'background-position':'0px -1089px', width:'364px', height:'236px'},
			 //卡牌展示
			 {progress:'51%', display:'block', opacity:'1', left:'737px', top:'1130px', 'background-position':'0px -1089px', width:'364px', height:'236px'},
			 {progress:'52%', display:'block', opacity:'1', left:'742px', top:'1226px', 'background-position':'0px -1089px', width:'364px', height:'236px'},
			 {progress:'53%', display:'block', opacity:'1', left:'747px', top:'1322px', 'background-position':'0px -1089px', width:'364px', height:'236px'},
			 {progress:'54%', display:'block', opacity:'1', left:'749px', top:'1418px', 'background-position':'0px -1089px', width:'364px', height:'236px'},
			 {progress:'55%', display:'block', opacity:'1', left:'750px', top:'1514px', 'background-position':'0px -1089px', width:'364px', height:'236px'},
			 {progress:'56%', display:'block', opacity:'1', left:'750px', top:'1610px', 'background-position':'0px -1089px', width:'364px', height:'236px'},
			 {progress:'57%', display:'block', opacity:'1', left:'750px', top:'1706px', 'background-position':'0px -1089px', width:'364px', height:'236px'},
			 
			 //插入卡片
			 {progress:'58%', display:'block', opacity:'1', left:'750px', top:'1702px', 'background-position':'0px -1452px', width:'364px', height:'236px'},
			 {progress:'59%', display:'block', opacity:'1', left:'750px', top:'1798px', 'background-position':'0px -1452px', width:'364px', height:'264px'},
			 {progress:'60%', display:'block', opacity:'1', left:'750px', top:'1805px', 'background-position':'0px -1452px', width:'364px', height:'264px'},
			 {progress:'61%', display:'block', opacity:'1', left:'750px', top:'1805px', 'background-position':'0px -1452px', width:'364px', height:'264px'},
			 {progress:'62%', display:'none', opacity:'0', left:'750px', top:'1805px', 'background-position':'0px -1452px', width:'364px', height:'264px'},
			 
			 {progress:'100%', display:'block', opacity:'1', left:'750px', top:'1805px', 'background-position':'0px -1452px', width:'364px', height:'264px'}
		]);
      }