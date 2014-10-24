// 用户需求删除按钮事件开始
$(document).on("click",".del",function(){
    $(this).parent().parent().remove();
})
// 用户需求删除按钮事件结束
//添加开始
$(document).on("click",".add",function(){
    var temp = "";
    var textTemp = "<div class='col-md-12 addDiv'>"
                        +"<input type='text' class='form-control needText' autofocus/>"
                        +"<a href='#'><i class='iconfont'>&#xe6f8</i> </a><br/>"
                        +"<button type='button' class='btn btn-default sure'>确定</button>"
                        +"<button type='button' class='btn btn-default cancel'>取消</button>"
                    +"</div>";
    $(this).after(textTemp);
    $(this).css("display","none");
})
//添加结束
// 确定按钮事件开始
$(document).on("click",".sure",function(){
    var parenttemp = $(this).parent();
    var clickA = parenttemp.prev();
    var needText = parenttemp.find(".needText").val();
    if(needText != ""){
        temp = "<div class='col-md-12'>"
                    +"<p>"
                        +"<i class='iconfont'>&#xf01b1</i>"
                        +"<span>" + needText + "</span>"
                        +"<a href='#' class='del'><i class='iconfont'>&#xf0020</i></a>"
                    +"</p>"
                    +"<a href='#'><i class='iconfont'>&#xe6f8</i> </a>"
                    +"<div class='small'></div>"
                    +"<hr/>"
                +"</div>";
        $(clickA).before(temp);
        $(clickA).parent().find(".addDiv").remove();
        $(clickA).css("display","inline");
    }
    else {
        alert("不能为空！！");
    }
});
// 确定按钮事件结束
// 取消按钮事件开始
$(document).on("click",".cancel",function(){
    var clickA= $(this).parent().prev();
    $(clickA).parent().find(".addDiv").remove();
    $(clickA).css("display","inline");
});
// 取消按钮事件结束
