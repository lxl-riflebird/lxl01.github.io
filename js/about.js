$(function(){
	$(".qie").click(function(){
		$(this).addClass("change").siblings().removeClass("change")
		var yh=$(".qief").css("left")
		var qie_n=$(this).index()
		$(".couple1,.couple2").removeClass("animated bounce")
		if(yh=="0px"&&qie_n==1)
		{
			$(".qief").stop().animate({"left":-720+"px"},500,function(){
				$(".couple2").addClass("animated bounce")
			})
		}
		if(yh=="-720px"&&qie_n==0)
		{
			$(".qief").stop().animate({"left":0+"px"},500,function(){
				$(".couple1").addClass("animated bounce")
			})
		}	
	})
	$(".lingtu2").click(function(){
		$(".cover").css("display","block")
		
	})
	$(".quxiao").click(function(){
		$(".cover").css("display","none")
	})
		
})
