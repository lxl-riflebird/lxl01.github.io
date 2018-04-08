$(function() {
	//扩展方法获取url参数 
	function getUrlParams(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
			//location.hash 是网址中的井号部分
			//location.search 是网址中的问号部分
			var r = window.location.search.substr(1).match(reg)
			if(r != null) {
				return r[2]
			} else {
				return ""
			}
		}
		
		var typeya = getUrlParams("type")//得到url参数  
		var articleIdya = getUrlParams("articleId")
		var dataya = articleData[typeya+articleIdya].data
		//console.log(dataya)
		var content2ya = $(".article").html()
		
		content2ya = content2ya.replace("$creatAt$",dataya.creatAt)
		content2ya = content2ya.replace("$typeTitle$",dataya.typeTitle)
		content2ya = content2ya.replace("$typeEntitle$",dataya.typeEntitle)
		content2ya = content2ya.replace("$title$",dataya.title)
		content2ya = content2ya.replace("$content$",dataya.content)
		content2ya = content2ya.replace("$creatByFullName$",dataya.creatByFullName)
		content2ya = content2ya.replace("$coverImg$",dataya.coverImg)
	
	
		$(".article").html(content2ya)

        
            var maxwidth=120;//设置最多显示的字数
            var text=$(".DATAlore").text();
            console.log(text)
            if(text.length>maxwidth){
                $(".DATAlore").text(text.substring(0,maxwidth));
                $(".DATAlore").html($(".DATAlore").html()+"...");//如果字数超过最大字数，超出部分用...代替，并且在后面加上点击展开的链接；
                var text1=$(".DATAlore").text();
            };

            $(".zhankai").click(function(){
            	//alert(1)
                $(".DATAlore").text(text);//点击“点击展开”，展开全文
                $(".zhankai").css("display","none")
                $(".shouqi").css("display","inline-block")
            })
            
            $(".shouqi").click(function(){
            	$(".DATAlore").text(text1);//点击“收起”，收起全文
                $(".zhankai").css("display","inline-block")
                $(".shouqi").css("display","none")
            	
            })
        
	
	
	
})