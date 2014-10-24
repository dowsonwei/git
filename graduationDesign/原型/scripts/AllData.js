//边栏移除和添加active
$(".nav> li").bind("click",function(){
    $(".nav > li").removeClass("active");
    $(this).addClass("active");
});

