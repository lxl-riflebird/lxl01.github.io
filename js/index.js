$(function(){
	$("#header").load("header.html#header")
	$("#footer").load("footer.html#footer")
	//引入头部尾部
	var back=[];
	back[0]="url(images/lol/picture_lol05.jpg)"
	back[1]="url(images/lol/picture_lol06.jpg)"
	back[2]="url(images/lol/picture_lol02.jpg)"//我去！！！为什么这里的路径和写在css的路径不一样
	//
	var k=0,r=0,q=1,w=0,yy=1;
	//定时器循环的部分
	function lunbo222(){
		k++;r++;

		if(k==3)
		{
			k=0
		}
		if(r==3)
		{
			r=0
		}
		$(".part4_la_son").animate({"left":-580*r+"px"},1000)
		$(".part1").css("background-image",back[k])
		$(".part1").find(".lun_middle").children("img").eq(k).attr({"src":"images/next&prev_now.png"})
		$(".part1").find(".lun_middle").children("img").eq(k).siblings().attr({"src":"images/next&prev_others.png"})
        $(".wenzi_son").eq(k).addClass("show").siblings().removeClass("show")

        $(".part4").find(".lun_middle").children("img").eq(r).attr({"src":"images/next&prev_now.png"})
		$(".part4").find(".lun_middle").children("img").eq(r).siblings().attr({"src":"images/next&prev_others.png"})
	}
	//定时器
	var time = setInterval(lunbo222,3000)
	//右点击
	$(".lun_right").click(function(){	
		
		if($(this).parent().attr("class")=="lun")
		{
			k++;
		}
		if($(this).parent().attr("class")=="lun2")
		{
			r++;
		}

		if(k==3)
		{
			k=0
		}
		if(r==3)
		{
			r=0
		}
//		$(".part4_la_son").animate({"left":-580*r+"px"},1000,"backIn")
		$(".part4_la_son").animate({"left":-580*r+"px"},1000)
		$(this).parents(".part1").css("background-image",back[k])
		$(this).parents(".part1").find(".lun_middle").children("img").eq(k).attr({"src":"images/next&prev_now.png"})
		$(this).parents(".part1").find(".lun_middle").children("img").eq(k).siblings().attr({"src":"images/next&prev_others.png"})
        $(".wenzi_son").eq(k).addClass("show").siblings().removeClass("show")

        $(this).parents(".part4").find(".lun_middle").children("img").eq(r).attr({"src":"images/next&prev_now.png"})
		$(this).parents(".part4").find(".lun_middle").children("img").eq(r).siblings().attr({"src":"images/next&prev_others.png"})
        
         
	})
	//左点击
	$(".lun_left").click(function(){		
		if($(this).parent().attr("class")=="lun")
		{
			k--;
		}
		if($(this).parent().attr("class")=="lun2")
		{
			r--;
		}
		if(k==-1)
		{
			k=2
		}
		if(r==-1)
		{
			r=2
		}
		$(this).parents(".part1").css("background-image",back[k])
		$(this).parents(".part1").find(".lun_middle").children("img").eq(k).attr({"src":"images/next&prev_now.png"})
		$(this).parents(".part1").find(".lun_middle").children("img").eq(k).siblings().attr({"src":"images/next&prev_others.png"})
        $(".wenzi_son").eq(k).addClass("show").siblings().removeClass("show")
        
        $(this).parents(".part4").find(".lun_middle").children("img").eq(r).attr({"src":"images/next&prev_now.png"})
		$(this).parents(".part4").find(".lun_middle").children("img").eq(r).siblings().attr({"src":"images/next&prev_others.png"})
//      $(".part4_la_son").animate({"left":-580*r+"px"},1000,"backIn")  
        $(".part4_la_son").animate({"left":-580*r+"px"},1000) 
	})
	//这些部分hover上去清除定时器，移走再重新加载定时器
	$(".part1,.la,.lun2").hover(function(){
		clearInterval(time)
	},function(){
		time = setInterval(lunbo222,3000)
	})
	//这些部分hover上去增加class名，移走移出这些class名
	$(".lun_left,.lun_right,.show_1_3,.c_3_3_1,.c_3_3_2").hover(function(){
		$(this).addClass("animated rubberBand")
	},function(){
		$(this).removeClass("animated rubberBand")
	})
    //笔和线的动画
	$(".apen").click(function(){
		$(".apen_line").width(0).stop().animate({"width":558+"px"},1000)
	})    
    $(".apen_line").width(0).stop().animate({"width":558+"px"},1000)
    //左边六个点的hover
	$(".chanpin").hover(function(){
		$(this).css("opacity",1)
		$(this).siblings(".chanpin").css("opacity",0)
		q=$(this).index();
        $(".part2_middle").eq(q-1).addClass("show").siblings().removeClass("show")//图片切换
        $(".part2_c_3_son").eq(q-1).addClass("show").siblings().removeClass("show")//大文本切换
        //下面判断hover的是不是同一个div，同一个就不触发笔和线的动画
        if(q!=yy)
        {
        	$(".apen_line").width(0).stop().animate({"width":558+"px"},1000)
        }
        yy=q       
        //用if条件判断现在的index与上次hover的index是否相同，不相同才触发，相同不触发
        //啊啊啊，hover同样的div，不触发某个事件怎么弄？-----  上面解决了
	},function(){	
	})
	//横着的向后
	$(".c_3_3_2").click(function(){
			if(q==6)
			{
				q=1
			}
			else{
				q++
			}
        $(".part2_middle").eq(q-1).addClass("show").siblings().removeClass("show")//图片切换
        $(".part2_c_3_son").eq(q-1).addClass("show").siblings().removeClass("show")//大文本切换
		$(".chanpin").eq(q-1).css("opacity",1)
		$(".chanpin").eq(q-1).siblings(".chanpin").css("opacity",0)	
        if(q!=yy)
        {
        	$(".apen_line").width(0).stop().animate({"width":558+"px"},1000)
        }
        yy=q		
	})
	//横着的向前
	$(".c_3_3_1").click(function(){
			if(q==1)
			{
				q=6
			}
			else{
				q--
			}			
        $(".part2_middle").eq(q-1).addClass("show").siblings().removeClass("show")//图片切换
        $(".part2_c_3_son").eq(q-1).addClass("show").siblings().removeClass("show")//大文本切换
		$(".chanpin").eq(q-1).css("opacity",1)
		$(".chanpin").eq(q-1).siblings(".chanpin").css("opacity",0)	
        if(q!=yy)
        {
        	$(".apen_line").width(0).stop().animate({"width":558+"px"},1000)
        }
        yy=q		
	})
	//势力介绍部分中间图片
	$(".show_1_3").click(function(){
		$(this).parent().nextAll(".hid_1").eq(0).slideToggle()
		var ee=$(this).nextAll(".show_1_5").find(".cha").css("top")
		if(ee=="-67px")
		{
			$(this).nextAll(".show_1_5").find(".cha").animate({"top":0},500)
		}
		else{
			$(this).nextAll(".show_1_5").find(".cha").animate({"top":-67+"px"},500)
		}
		
	})
	//势力介绍部分右边×和+的图片
	$(".show_1_5").click(function(){
		$(this).parent().nextAll(".hid_1").eq(0).slideToggle()
		var ff=$(this).find(".cha").css("top")
		if(ff=="-67px")
		{
			$(this).find(".cha").animate({"top":0},500)
		}
		else{
			$(this).find(".cha").animate({"top":-67+"px"},500)
		}
		
	})
	
	//增加特效
	$(".dizhi_tu1,.dizhi_tu2,.dizhi_tu3").hover(function(){
		$(this).addClass("animated bounce")
	},function(){
		$(this).removeClass("animated bounce")
	})
    //右下fixed第一个图 点击回头部
    $(".shang").click(function(){
    	$("body,html").animate({
    		"scrollTop":0
    	},500)
    })
    //右下fixed第二个图 动画
    $(".letter").hover(function(){
    	$(this).addClass("animated tada")
    },function(){
    	$(this).removeClass("animated tada")
    })
    //右下fixed的scrollTop超过一定高度隐藏与显示
   window.onscroll=function(){
   	var bo_height=$(document).scrollTop()
   	if(bo_height>600)
   	{
   		$(".youxia").fadeIn()
   	}
   	else{
   		$(".youxia").fadeOut()
   	}
   	 	
   }
})	
	
	