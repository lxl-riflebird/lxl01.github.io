$(function() {
	$(".tou_la").hover(function() {
		var index = $(this).parent().index()
		$(this).parent().find(".dian").removeClass("hid")
		$(this).parents().siblings().find(".dian").addClass("hid")
		//			$(".header_fa ul li").eq(index).children(".dian").removeClass("hid")
		//			$(".header_fa ul li").eq(index).siblings().children(".dian").addClass("hid")
	}) //白点的显示与隐藏

	$(".header_fa ul li").eq(1).hover(function() {
		$(this).find(".xiala").css("display", "inline-block")
	}, function() {
		$(this).find(".xiala").css("display", "none")
	}) //小鸟掌学下拉导航的显示与隐藏

	$(".xiala li").hover(function() {
		$(this).css("background", "#049dea")
		$(this).find(".nav_li").stop().animate({
			"right": 10
		}, 500)
		$(this).stop().stop().animate({
			"text-indent": "1em"
		}, 500)
	}, function() {
		$(this).css("background", "rgba(0,0,0,0.6)")
		//			$(this).find(".nav_li").css("right",155)
		$(this).find(".nav_li").stop().animate({
			"right": 155
		}, 10)
		$(this).stop().stop().animate({
			"text-indent": 0
		}, 500)
	}) //下拉导航的hover效果

})