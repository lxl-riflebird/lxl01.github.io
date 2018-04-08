$(function() {

	pageIndex = 0 //默认打开页面后加载第一页

	function loadPageq(pageIndex) {

		var pageDataya = listData["listData0" + pageIndex].data.list //获取第一页的数据（数组）
		for(i = 0; i < pageDataya.length; i++) {
			var contentya = $("#template").html()

			contentya = contentya.replace("$coverImg$", pageDataya[i].coverImg)
			contentya = contentya.replace("$coverTitle$", pageDataya[i].coverTitle)
			contentya = contentya.replace("$creatAt$", pageDataya[i].creatAt.slice(0, 10))
			contentya = contentya.replace("$describe$", pageDataya[i].describe)
			contentya = contentya.replace("$title$", pageDataya[i].title)
			contentya = contentya.replace("$sysId$", pageDataya[i].sysId)
			$(".listnierong").html($(".listnierong").html() + contentya)
		}
		$(".listnierong").html($(".listnierong").html() + '<div class="clear_both"></div>')

		//判断数据是否有下一页
		//				if(listData["listData0" + (pageIndex+1)]) {
		//					
		//				}else{
		//					$(".listbottom").css({
		//						"background":"url(../images/list_gomore_bg_nomore.jpg)"
		//					})
		//					$(".listbottom1").hide()
		//				}

	}
	loadPageq(pageIndex)

	//			$(".listbottom1").click(function() {
	//
	//				pageIndex++
	//
	//				loadPageq(pageIndex)
	//
	//			})

})