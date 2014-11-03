$(function(){
	//点击城市特效切换
	$(".cityBtn").click(function(){
		$(this).addClass("selected").siblings().removeClass("selected");
	})
})